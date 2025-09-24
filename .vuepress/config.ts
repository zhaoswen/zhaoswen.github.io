import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: "Zhsaen",
  description: "Some books",
  bundler: viteBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "Zhsaen",
    authorAvatar: "/head.png",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    navbar: [
      { text: "主页", link: "/" },
      { text: "开始", link: "/blog/start" },
      {
        text: "随笔", children: [
          { text: "索引", link: "/essays/index" },
        ]
      },

      {
        text: "书籍",
        children: [
          { text: "世界构造原理", link: "/books/principles/index" },
          { text: "小番茄的哲学课", link: "/books/cherry_tomato/index" },
          { text: "人间谈话集", link: "/books/talks/index" },
          { text: "汹涌世潮", link: "/books/wave/index" },
        ],
      },
      { text: "关于", link: "/blog/about" },
    ]
  }),
});
