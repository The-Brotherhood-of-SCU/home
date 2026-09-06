export const SITE = {
  name: 'The Brotherhood of SCU',
  nameZh: '四川大学开源社区',
  motto: '川流不息，代码为舟',
  url: 'https://scubro.dev',
  github: 'https://github.com/The-Brotherhood-of-SCU',
  email: 'The_Brotherhood_of_SCU@outlook.com',
  discord: 'https://discord.com/channels/1529137076635697234/1529137077143343299',
  description:
    'The Brotherhood of SCU，由四川大学在校生及校友自发组织的开发者社区。我们致力于打破信息隔阂，构建一个纯粹、自由、富有创造力的开源生态空间。',
} as const;

export const CONCEPTS = [
  {
    no: '01',
    name: '精品共建',
    en: 'Craft',
    description: '打造具有川大特色的开源工具、学术资源与技术项目，不做一次性脚本，做经得起使用的作品。',
  },
  {
    no: '02',
    name: '技艺精进',
    en: 'Craftsmanship',
    description: '在 Code Review 与协作开发中，磨砺算法、架构与工程能力，让每一次提交都有分量。',
  },
  {
    no: '03',
    name: '人脉连接',
    en: 'Community',
    description: '连接每一位热爱技术的川大人，构建跨学院、跨年级的技术纽带，让同路人彼此看见。',
  },
] as const;

export interface Project {
  name: string;
  en: string;
  description: string;
  link: string;
  cover?: string;
  featured?: boolean;
}

/** 精选开源项目 */
export const PROJECTS: Project[] = [
  {
    name: 'SCU Plus',
    en: 'scu-plus',
    description: '四川大学教务系统实用 / 美化拓展插件，让教务系统重新变得可用。',
    link: 'https://github.com/The-Brotherhood-of-SCU/scu-plus',
    cover: '/images/projects/scu-plus.avif',
    featured: true,
  },
  {
    name: '不高山上',
    en: 'Bugaoshan',
    description: '四川大学课表、成绩、第二课堂、微服务一站式聚合工具集。',
    link: 'https://github.com/The-Brotherhood-of-SCU/Bugaoshan',
    cover: '/images/projects/bugaoshan.avif',
    featured: true,
  },
  {
    name: '川大选课助手',
    en: 'Advanced-SCU_course_catcher',
    description: '选课季的抢手工具，查询课程容量，助你选上想上的课。',
    link: 'https://github.com/The-Brotherhood-of-SCU/Advanced-SCU_course_catcher',
    cover: '/images/projects/course-catcher.avif',
  },
  {
    name: 'SCU-CLI',
    en: 'SCU-CLI',
    description: '四川大学校园服务命令行工具：为 AI Agent 提供教务系统、微服务等校园服务操作能力。',
    link: 'https://github.com/The-Brotherhood-of-SCU/SCU-CLI',
    featured: true,
  },
  {
    name: 'scunet-autologin-sh',
    en: 'scunet-autologin-sh',
    description: '校园网认证页自动登录脚本，POSIX sh 编写，适合 Linux、OpenWrt、路由器与服务器。',
    link: 'https://github.com/The-Brotherhood-of-SCU/scunet-autologin-sh',
    featured: true,
  },
  {
    name: '计算机网络知识梳理',
    en: 'network_docs',
    description: '计算机网络课程知识体系整理，写给正在备考的你。',
    link: 'https://github.com/The-Brotherhood-of-SCU/network_docs',
    cover: '/images/projects/netword-docs.avif',
  },
  {
    name: 'SCU 课程论文 Typst 模板',
    en: 'SCU-course-typst-template',
    description: '四川大学课程论文 Typst 排版模板，告别 Word 对齐地狱。',
    link: 'https://github.com/The-Brotherhood-of-SCU/SCU-course-typst-template',
  },
  {
    name: 'SCU-CS 课程资料',
    en: 'SCU-CS-Class-Materials',
    description: '四川大学计算机学院本科课程资料整理（更新中）。',
    link: 'https://github.com/The-Brotherhood-of-SCU/SCU-CS-Class-Materials',
  },
];

/** 更多小工具与实验性项目（名录形式收录） */
export const MORE_PROJECTS = [
  { name: 'SCU-2ndclass-AutoResolve', description: '自动化预约完成四川大学第二课堂' },
  { name: 'SCU-2ndClass-QuickResolve', description: '第二课堂活动半自动报名、签到、签退一体化工具' },
  { name: 'SCU-2ndClass-QRGen', description: '第二课堂签到 / 签退二维码生成工具' },
  { name: 'SCU-SportVenue-Reserver', description: '自动化预约四川大学体育场地（开发中）' },
  { name: 'SCU-Course-Capacity-Query-Tool', description: '查询教务系统中各课程的容量信息' },
  { name: 'SCU-Openlesson-AutoLearner', description: '自动完成新生实验室安全公开课' },
  { name: 'SCU-Ecourse-Helper', description: '大川学堂自动刷课控制台脚本' },
  { name: 'Chingo_Runner', description: '自动跑创高（继承自 Chingo_Hack，完善中）' },
  { name: 'QQ-bot-framework', description: '社区 QQ 机器人框架' },
  { name: 'ZanaoAPI', description: '赞哦集市 API 代理' },
] as const;

export interface Member {
  login: string;
  name: string;
  role: 'ADMIN' | 'MEMBER';
  bio: string;
}

import rawMembers from './members.json';

/** 全量成员，由 `npm run sync-members` 从 GitHub 组织同步生成 */
export const MEMBERS = rawMembers as Member[];

export const ADMINS = MEMBERS.filter((m) => m.role === 'ADMIN');

/** 墙上的话 */
export const QUOTES = [
  { name: 'wmj · commented on minecraft', words: '一时生电一时爽，一直生电一直爽。' },
  { name: '史铁生', words: '如果你抑郁了，说明你活在过去；如果你焦虑了，说明你活在未来；只有真正平静下来，你才是活在当下。' },
  { name: '57U', words: '无为。' },
  { name: '鱼幼薇 · commented on csgo2', words: 'If u luv cs, then I luv u.' },
] as const;

export const CODE_OF_CONDUCT = [
  { title: '友好协作', text: '包容差异，鼓励讨论，严禁任何形式的语言攻击。' },
  { title: '尊重版权', text: '坚持开源协议，保护每一行代码的原创性。' },
  { title: '纯粹技术', text: '拒绝任何形式的违法违规内容，保持社区的专业性。' },
  { title: '开放交流', text: '无论技术深浅，只要有好奇心，这里就是你的舞台。' },
] as const;

export function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}
