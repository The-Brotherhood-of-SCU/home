---
title: "[不高山上] 的起源"
date: 2026-07-21 02:01:13
author: 57U
tags:
  - dev
  - 课表
  - 不高山上
---

[不高山上/Bugaoshan](https://github.com/The-Brotherhood-of-SCU/Bugaoshan) 现在已经是非常成熟的项目了，但它的来历也可以说是有起有落

## 起因

在去年年底，我们常用的课表工具Wakeup突然加入了开屏广告，这让我们非常不舒服
![起因](/images/posts/bugaoshan-dev-blog/wakeup-complain.avif)于是Jeanhua就随口说了一句“你们可以自己写一个课表app”，这便是Bugaoshan的起源

过了几天我突然想起这个事，于是在群里征集名字，问了问AI，但似乎其他人都不太重视这个项目（悲）
![名字征集](/images/posts/bugaoshan-dev-blog/naming.avif)

我私底下也向很多AI问过这个，当时我取的名字其实是 “混沌课表/Rubbish Plan”

当时本来也想着是一个小项目，弄着玩的，我就选择我最熟悉的flutter框架，靠着复制我以前的[Flutter软件的圣遗物](https://github.com/57UU/Shape_Weather)（其实现在版本里面还残留有这些圣遗物代码），完成了最初版本的框架搭建。但也只是搭建了最基本的框架，课表的功能还是placeholder状态。~~在那个时候vibe coding还不是那么靠谱~~。

无论如何，我还是弄出了最基础的课表（ https://github.com/The-Brotherhood-of-SCU/Bugaoshan/tree/46c3246e7dd272db2031241b40bc216258f730ef ）
![最基础课表](/images/posts/bugaoshan-dev-blog/vibe-init.avif)

群友终于开始关注起了这个项目，开始集思广益需要的功能了：
成绩页面或者电费空调费卡费页面,课表实现周次刷新,etc

随之而来的是一些决策问题：

Q1: 技术栈选择Flutter吗
Q2：我们要做成川大专属的，还是通用的
Q3：访问川大服务的技术栈：Webview/Request

|Q1|Q2|Q3|
|---|---|---|
|![](/images/posts/bugaoshan-dev-blog/comfirm-flutter.avif)|![](/images/posts/bugaoshan-dev-blog/comfirm-specific.avif)|![](/images/posts/bugaoshan-dev-blog/webview_or_request.avif)|webview_or_request.avif|
|选择Flutter，跨平台友好|川大专属，其他平台涉及到无人维护问题|Request:虽然复杂一点，但用户体验更好|

使用Flutter还有一点好处，就是对于鸿蒙平台的支持
> Google 官方主库目前拒绝直接合入鸿蒙分支，但由华为官方及 OpenHarmony 开源社区 (SIG 组) 维护的 HarmonyOS Flutter SDK 已实现部分同步。
> 实际上assumeengage开发的homo端的时候被折磨的很惨doge

~~在这个时候被嫌弃名字太难听~~，但当前的名字也是在这个时候诞生的

**request renaming**
![](/images/posts/bugaoshan-dev-blog/renaming-request.avif)

**name comfirmed**
![](/images/posts/bugaoshan-dev-blog/renaming2.avif)

接下来的问题就是要上架应用市场吗？国内肯定是不考虑了，国内应用商店需要APP备案，先不说APP备案不对个人开放，这种类型的应用能不能完成备案都是个问题。但是国际平台在国内渗透率很低，变成一根筋两头堵了。

因此，我们最后的选择还是：**Github Release** 以及**QQ群**分享

来自群友的一句玩笑话：
> 哈哈哈哈哈哈别真就是最后全地下
> 如果不上架那就全走地下要不？
> 全走底下有个好处，跑路时候快

## Dev

本以为就这样顺利的开发下去，但开发没几天就难产了

![](/images/posts/bugaoshan-dev-blog/dev-pause.avif)

可以看到，在去年年底，commit就暂停了。原因是缺乏维护者，单靠我一个人开发，精力实在是不够。
直到今年四月份，我才又想起来这个工作，想着既然没人开发，不如vibe一下得了，有总比没有好。

![](/images/posts/bugaoshan-dev-blog/mention-app.avif)

于是我就拿那时最先进的GLM-5模型、选择我最熟悉的flutter框架，vibe了一下（当然是白嫖的腾讯主推的CodeBuddy），vibe也是真vibe，我只大致review了一下plan，得到了最初版的课表
> 期间AI的一些骚操作还是把我气笑了：用SharedPerference放json字符串，还把Git仓库玩炸了

（虽然后来发现数据库的表并没有设计好，有冗余信息）btw，你可以在这里找到我不小心上传的[Plan](https://github.com/The-Brotherhood-of-SCU/Bugaoshan/blob/f5c6cabfaacae8b86b23a86807b88d19449422e3/.codebuddy/plans/complete-course-schedule-feature_63dcb0d6.md)

![最初版的课表](/images/posts/bugaoshan-dev-blog/coursetable-v1.avif)

单论课表页面，已经和现在的很接近了。

## Jeanhua的加入

![](/images/posts/bugaoshan-dev-blog/jeanhua-join.avif)

就在我重启开发后的两天，Jeanhua提交了首个commit，并连续提交了大几十个commit。涵盖：软件重命名、课程表多项改动与修复、加入CI/CD支持、加入SCU在线服务等。成为了Bugaoshan项目重要的核心开发者。

在接下来的几周，Bugaoshan得以快速迭代。在4月21日，v0.5.6版本发布，基本上可以看作第一个能在生产环境使用的版本。
4月22日，建立了Bugaoshan软件分享QQ群，用于分发软件安装包、反馈问题等。

![](/images/posts/bugaoshan-dev-blog/qq-group.avif)

同时也做了第一波宣传，拉入了百余人。

![](/images/posts/bugaoshan-dev-blog/promote1.avif)

### Assumeengage的加入
![](/images/posts/bugaoshan-dev-blog/assumeengage-join.avif)

然后是Assumeengage负责的鸿蒙端，4月初期时候Assumeengage开始往仓库里提交ArkTS的代码以及homo有关的cicd,但是homo端的适配出现比较严重的问题，当时的华为内部维护在gitcode上的flutter_flutter还不成熟，先是在代码层面写了兼容性，随着Bugaoshan复杂性上升，做了submodule构建，下游库在assumeengage自己的github[TEMP-HOMO](https://github.com/assumeengagetry/TEMP-HOMO)

![](/images/posts/bugaoshan-dev-blog/homo-factor.avif)

后续又是复杂度进一步升级，于是迎来了新的解耦，homo端放到单独的[Bugaoshan-homo](https://github.com/The-Brotherhood-of-SCU/Bugaoshan-HarmonyOS)


## 版本迭代
详细的change log可以在这儿里找到：https://github.com/The-Brotherhood-of-SCU/Bugaoshan/blob/main/CHANGELOG.md

在接下来的版本中，增加了验证码的自动识别，增加了安卓、windows、linux的自动更新支持。

在5月6日，正式发布了第一个正式版 v1.0.0

![](/images/posts/bugaoshan-dev-blog/release.avif)

由于软件体量的扩大，早期的登录状态管理已经变成了屎山代码：微服务、智慧教务等依赖统一登陆，但目前的扁平化架构无法支持更多高级功能，例如自动状态维护等等。不得不进行底层代码的重构。
你可以在这里找到重构的文档：https://github.com/The-Brotherhood-of-SCU/Bugaoshan/tree/main/docs/decisions

在6月14日，v2.0.0正式发布，代表登录认证架构的现代化。

## 更多人的参与

Bugaoshan离不开开源社区的支持。

在4月25日，Simpidbit 开启了第一个Pr https://github.com/The-Brotherhood-of-SCU/Bugaoshan/pull/18 用于增强网络连接稳定性

4月26日，Yii6724XT 提交了 https://github.com/The-Brotherhood-of-SCU/Bugaoshan/pull/20 ，用于将课表文件导出为日历文件

感谢所有为Bugaoshan做出贡献的人：

meteor-liu-xinyu 参与仓库维护
assumeengage 维护鸿蒙版本和AUR以及flatpak
Visio-Vanitas 维护iOS分支与仓库
oldplum 参与仓库维护

~~以及各个Agent~~ 比如这个是GPT5.6 Sol Ultra 自己弄的PR https://github.com/The-Brotherhood-of-SCU/Bugaoshan/pull/143

