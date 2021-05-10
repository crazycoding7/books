module.exports = {
  title: '知鱼之乐@Android',
  description: 'Just playing around 1',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Android基础',   // 必要的
        path: '',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/Android/01基础机制/1.Android系统启动流程',
            '/Android/01基础机制/2.Binder进程通信机制.md',
            '/Android/07面试题/1.面试题-计算机基础.md',
            '/Android/07面试题/2.面试题-Android.md',
            '/Android/07面试题/3.面试题-架构设计.md'
        ]
      },
      {
        title: '操作系统等',   // 必要的
        path: '',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/操作系统等/C编译原理.md',
            '/操作系统等/Linux常用操作手册.md',
            '/操作系统等/IOS.md'
        ]
      },
       {
        title: 'Tools',
        path: '',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        children: [
            '/Tools/1.Mac开发快捷键大全.md',
            '/Tools/2.翻墙工具指南.md',
        ]
      },
      {
        title: '投名状',
        path: '',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        children: [
            '/ppt/警世通言.md',
            '/ppt/1.阿里技术合伙人.md',
        ]
      }
    ] 
  }
}
