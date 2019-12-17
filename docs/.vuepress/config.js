module.exports = {
  base: "/",
  title: "leamiko's blog",
  description: "do it first, then make it better",
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: "https://github.com/leamiko/leamiko.github.io.git",
    // 自定义仓库链接文字。
    repoLabel: "My GitHub",
    nav: [
      { text: "Home", link: "/" },
      { text: "FirstBlog", link: "/blog/first-blog.md" }
    ],
    sidebar: ["/", ["/blog/2016-08-23-CSS-Guide", "CSS-Guide"]],
    displayAllHeaders: true // 默认值：false
  }
};
