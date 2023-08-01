module.exports = {
  // 左上角标题
  title: "cql 的文档库",
  // 描述
  description: "前端工程师 cql 的文档库",
  // 头部部署，右上角小图标
  head: [
    // ico 配置
    [
      "link",
      {
        rel: "icon",
        href: "/img/logo.ico",
      },
    ],
  ],
  // 主题部署
  themeConfig: {
    /**
     * 右侧导航条
     * text - 显示字段
     * link - 链接：注意前后带 / 符号
     */
    nav: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "每日一题",
        link: "/daily/20230731",
      },
      {
        text: "JavaScript",
        link: "/javascript/",
      },
      {
        test: "算法",
        link: "/algorithm/",
      },
      /**
       * 多级菜单
       * 开头 text 为一级标题
       * 数组内 text 为二级标题
       * link 为链接，注意带 /
       */
      //   {
      //     text: "博文",
      //     items: [
      //       {
      //         text: "微信小程序 bug 集中营",
      //         link: "https://github.com/LiangJunrong/document-library/blob/master/other-library/WeChatApplet/WeChatAppletBug.md",
      //       },
      //       {
      //         text: "使用 GitHub Pages 和 VuePress 搭建网站",
      //         link: "https://github.com/LiangJunrong/document-library/blob/master/other-library/GithubPages/GithubPages.md",
      //       },
      //     ],
      //   },
      {
        text: "关于",
        link: "/about/",
      },
      // 链接到网站
      {
        text: "Github",
        link: "https://www.github.com/LiangJunrong",
      },
    ],
    /**
     * 侧边栏配置：侧边栏组
     */
    sidebar: {
      "/daily/": [
        ["20230731", "2023-07-31"],
      ],
      "/javascript/": [
        ["", "手写函数"],
        ["two", "JS遇到过的坑"],
        ["three", "每日知识点"],
      ],
      "/algorithm/": [
        ["", "README"],
        ["indexTwo", "导航第二页"],
      ],
      "/about/": [
        ["", "README"],
        ["GithubPages", "GithubPages"],
        ["VuePress", "VuePress"],
      ],
    },
  },
};
