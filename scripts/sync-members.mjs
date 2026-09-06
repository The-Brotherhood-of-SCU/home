// 从 GitHub 组织拉取全量成员（含角色、昵称、bio），生成 src/data/members.json
// 用法：npm run sync-members （需要本机 gh CLI 已登录，且 token 有 read:org 权限）
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ORG = 'The-Brotherhood-of-SCU';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const QUERY = `
query($org: String!, $cursor: String) {
  organization(login: $org) {
    membersWithRole(first: 100, after: $cursor) {
      edges { role node { login name bio } }
      pageInfo { hasNextPage endCursor }
    }
  }
}`;

function graphql(variables) {
  const out = execFileSync(
    'gh',
    ['api', 'graphql', '-f', `org=${variables.org}`, '-f', `query=${QUERY}`, ...(variables.cursor ? ['-f', `cursor=${variables.cursor}`] : [])],
    { encoding: 'utf8' },
  );
  return JSON.parse(out).data.organization.membersWithRole;
}

let cursor;
const members = [];
for (;;) {
  const page = graphql({ org: ORG, cursor });
  for (const { role, node } of page.edges) {
    members.push({
      login: node.login,
      name: node.name || node.login,
      role,
      bio: (node.bio || '').trim(),
    });
  }
  if (!page.pageInfo.hasNextPage) break;
  cursor = page.pageInfo.endCursor;
}

members.sort((a, b) => {
  if (a.role !== b.role) return a.role === 'ADMIN' ? -1 : 1;
  return a.login.toLowerCase().localeCompare(b.login.toLowerCase());
});

const outFile = join(root, 'src', 'data', 'members.json');
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify(members, null, 2) + '\n', 'utf8');
console.log(`已写入 ${members.length} 名成员到 src/data/members.json`);
