# MiGPT：智能家居，从未如此贴心 ❤️

[![npm version](https://badge.fury.io/js/mi-gpt.svg)](https://www.npmjs.com/package/mi-gpt) [![Docker Image Version](https://img.shields.io/docker/v/idootop/mi-gpt?color=%23086DCD&label=docker%20image)](https://hub.docker.com/r/idootop/mi-gpt)

<video src='https://github.com/idootop/mi-gpt/assets/35302658/dc336916-9087-418b-bc1b-04d5534dce8f'></video>

> 👉 查看完整演示视频：【[整活！将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手～](https://www.bilibili.com/video/BV1N1421y7qn/?share_source=copy_web&vd_source=5d4e78ff2a0dc6a661baa65f479199c1)】

## 👋 项目简介

在这个数字化的世界里，家已不仅仅是一个居住的地方，而是我们数字生活的延伸。

`MiGPT` 通过将小爱音箱、米家智能设备，与 ChatGPT 的理解能力完美融合，让你的智能家居更懂你。

`MiGPT` 不仅仅是关于设备自动化，而是关于：**打造一个懂你、有温度、与你共同进化的家**。

未来，你的每个智能家居设备，从灯泡、插座，到扫地机器人、电视等，

都可以作为一个个独立的智能体 (Agent)，更智能、更贴心的响应你的指令。

这些独立的智能体，也可以彼此感知，彼此配合，构成一个更强大的协作网络。

而小爱音箱就像是你的智能家居专属管家，全心全意为你服务，释放智能家居的真正潜力。

## ✨ 功能亮点

- **🎓 AI 问答**。想象一下，当小爱音箱接入大模型后，上知天文，下知地理，从“人工智障”秒变学霸。
- **🎭 角色扮演**。一秒调教小爱，无论是成为你的完美伴侣，还是那个能听你倾诉心事的贴心闺蜜，都不在话下。
- **💬 流式响应**。爱情来得太快就像龙卷风，而你的小爱音箱也是，对你的爱意秒回，爱你不会让你等太久。
- **🧠 长短期记忆**。小爱音箱现在能记住你们之间的每一次对话，越聊越默契，就像是你身边的老朋友。
- **🔊 自定义 TTS**。厌倦了小爱同学的语音？帮你解锁[「豆包」](https://doubao.com)同款音色，就像真人在回你的消息。
- **🤖️ 智能家居 Agent**。心情不好？小爱立刻懂你，自动帮你播放喜欢的音乐，调节灯光，逗你开心。_TODO_

## 🦄 Sponsors

![302.AI](https://github.com/idootop/mi-gpt/assets/35302658/89f82e00-4f80-43f3-8c4a-5fc66602fab6)

> 302.AI 是一个汇集全球顶级 AI 的自助平台，按需付费，零月费，零门槛使用各种类型 AI。 [官方网站](https://302.ai)｜[网站介绍](https://help.302.ai)

## ⚡️ 快速开始

> 查看视频教程 👉 【[MiGPT 光速入门教程，从零教你调教小爱音箱～](https://www.bilibili.com/video/BV1zb421H7cS)】

`MiGPT` 有两种启动方式: [Docker](#docker) 和 [Node.js](#nodejs)。

启动成功后，你可以通过以下方式来召唤 AI 回答问题：

- **小爱同学，请 xxx**。比如 `小爱同学，请问地球为什么是圆的？`
- **小爱同学，你 xxx**。比如 `小爱同学，你喜欢我吗？`
- **小爱同学，召唤 xxx**。比如 `小爱同学，召唤傻妞`

### 设备要求

`MiGPT` 支持大部分的小爱音箱型号，推荐使用小爱音箱 Pro（完美运行）

👉 [查看更多兼容的小爱音箱型号和配置参数](https://github.com/idootop/mi-gpt/blob/main/docs/compatibility.md)

> 注意：本项目暂不支持小度音箱、天猫精灵、HomePod 等智能音箱设备，亦无相关适配计划。

### Docker

[![Docker Image Version](https://img.shields.io/docker/v/idootop/mi-gpt?color=%23086DCD&label=docker%20image)](https://hub.docker.com/r/idootop/mi-gpt)

对于电脑小白或者不想自己配置代码运行环境（Node）的同学，可以使用 Docker 启动方式。

请先按照 [⚙️ 参数设置](https://github.com/idootop/mi-gpt/blob/main/docs/settings.md) 相关说明，配置好你的 `.env` 和 `.migpt.js` 文件，然后使用以下命令启动 docker：

```shell
docker run -d --env-file $(pwd)/.env -v $(pwd)/.migpt.js:/app/.migpt.js idootop/mi-gpt:latest
```

注意：在 Windows 终端下需要将配置文件路径 `$(pwd)` 替换为绝对路径。

### Node.js

[![npm version](https://badge.fury.io/js/mi-gpt.svg)](https://www.npmjs.com/package/mi-gpt)

如果你是一名前端 (Node) 开发者，也可以通过 NPM 安装 `mi-gpt` 启动 `MiGPT`。

```shell
npm install mi-gpt # 安装依赖
```

然后，创建并启动 `MiGPT` 实例。初始化参数的具体说明请到 [⚙️ 参数设置](https://github.com/idootop/mi-gpt/blob/main/docs/settings.md) 查看。

```typescript
import { MiGPT } from "mi-gpt";

async function main() {
  const client = MiGPT.create({
    speaker: {
      userId: "987654321", // 注意：不是手机号或邮箱，请在「个人信息」-「小米 ID」查看
      password: "123456", // 账号密码
      did: "小爱音箱Pro", // 小爱音箱 ID 或在米家中设置的名称
    },
  });
  await client.start();
}

main();
```

注意：此模式下并不会主动读取 `.env` 和 `.migpt.js` 中的配置信息，你需要手动初始化 Node 环境变量，并将 `.migpt.js` 中的参数作为 `MiGPT.create` 的初始化参数传入。👉 [示例代码](https://github.com/idootop/mi-gpt/blob/example/index.ts)

## 📖 使用文档

以下为更详细的使用教程，大多数问题都可在 [💬 常见问题](https://github.com/idootop/mi-gpt/blob/main/docs/faq.md) 中找到答案。

- [🔥 官方视频教程](https://www.bilibili.com/video/BV1zb421H7cS)
- [⚙️ 参数设置](https://github.com/idootop/mi-gpt/blob/main/docs/settings.md)
- [💬 常见问题](https://github.com/idootop/mi-gpt/blob/main/docs/faq.md)
- [🔊 使用第三方 TTS](https://github.com/idootop/mi-gpt/blob/main/docs/tts.md)
- [🛠️ 本地开发](https://github.com/idootop/mi-gpt/blob/main/docs/development.md)
- [💎 工作原理](https://github.com/idootop/mi-gpt/blob/main/docs/how-it-works.md)
- [🦄 Sponsors](https://github.com/idootop/mi-gpt/blob/main/docs/sponsors.md)
- [✨ 更新日志](https://github.com/idootop/mi-gpt/blob/main/docs/changelog.md)
- [🚀 Roadmap](https://github.com/idootop/mi-gpt/blob/main/docs/roadmap.md)

## 👍 推荐项目与教程

| 项目链接                                                                                                                                                                                                                             | 简介                                                                                                                                                    | 来源            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| **相关项目**                                                                                                                                                                                                                         |                                                                                                                                                         |                 |
| [@shinedlc/mi-gpt](https://github.com/shinedlc/mi-gpt)                                                                                                                                                                               | 一个接入了摄像头硬件 + 本机搭建 Ollama 模型的 MiGPT 分支，让小爱同学可以看到和理解现实世界                                                              | @shinedlc       |
| [@lmk123/migpt-cli](https://github.com/lmk123/migpt-cli)                                                                                                                                                                             | 通过图形化界面的方式创建并管理 MiGPT，支持运行多个账号。                                                                                                | @lmk123         |
| [@lmk123/migpt-cli/gui](https://migptgui.com/gui/)                                                                                                                                                                                   | 直接在网页上更方便的编辑和生成 `.migpt.js` 和 `.env` 配置文件                                                                                           | @lmk123         |
| **使用教程**                                                                                                                                                                                                                         |                                                                                                                                                         |                 |
| [MiGPT 官方视频教程](https://www.bilibili.com/video/BV1zb421H7cS)                                                                                                                                                                    | 官方视频教程配套 PPT 文件 👉 [MiGPT 官方教程.pdf](https://github.com/idootop/mi-gpt/blob/main/assets/pdf/MiGPT%E5%AE%98%E6%96%B9%E6%95%99%E7%A8%8B.pdf) | @idootop        |
| [MiGPT 接入豆包等大模型教程](https://migptgui.com/docs/apply/)                                                                                                                                                                       | 豆包、Moonshot（Kimi）等常见大模型的详细接入教程                                                                                                        | @lmk123         |
| [小爱音箱 PRO 的 AI 模式使用说明](https://github.com/idootop/mi-gpt/blob/bbdb80e9bc38b7c40865e52cbd6517980a68615a/assets/pdf/%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1PRO%20AI%E6%A8%A1%E5%BC%8F%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf) | 这是一位老爸为家里的小朋友专门整理的贴心教程                                                                                                            | @mxyblog        |
| [使用 MiGPT 将你的小爱音箱接入 ChatGPT](https://www.iloli.love/archives/1719073913220)                                                                                                                                               | 作者详细介绍了如何在 1Panel 上，通过 [OneAPI](https://github.com/songquanpeng/one-api) 来转换腾讯混元大模型，和讯飞星火大模型的 API 并成功接入 MiGPT    | @miaowmint      |
| [Unraid 部署 MiGPT](https://github.com/idootop/mi-gpt/blob/adfdcc4ee51aef8d4f2d8996f18be716da19a0ad/assets/pdf/Unraid%E9%83%A8%E7%BD%B2MiGPT.pdf)                                                                                    | 在 Unraid 上使用 Docker 部署 MiGPT 的详细教程                                                                                                           | @ilovesouthpark |

## ❤️ 鸣谢

特别感谢以下项目提供的实现参考：

- https://github.com/yihong0618/xiaogpt
- https://github.com/jialeicui/open-lx01
- https://github.com/inu1255/mi-service
- https://github.com/Yonsm/MiService

## 🚨 免责声明

本项目仅供学习和研究目的，不得用于任何商业活动。用户在使用本项目时应遵守所在地区的法律法规，对于违法使用所导致的后果，本项目及作者不承担任何责任。
本项目可能存在未知的缺陷和风险（包括但不限于设备损坏和账号封禁等），使用者应自行承担使用本项目所产生的所有风险及责任。
作者不保证本项目的准确性、完整性、及时性、可靠性，也不承担任何因使用本项目而产生的任何损失或损害责任。
使用本项目即表示您已阅读并同意本免责声明的全部内容。

## License

[MIT](https://github.com/idootop/mi-gpt/blob/main/LICENSE) License © 2024-PRESENT Del Wang
