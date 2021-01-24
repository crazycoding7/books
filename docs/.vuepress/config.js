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
        path: '/Android/01基础机制/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/Android/01基础机制/1.Android系统启动流程',
            '/Android/01基础机制/2.Binder进程通信机制.md'

        ]
      },
       {
        title: 'Tools',
        path: '/Tools/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        children: [
            '/Tools/Mac开发快捷键大全.md'
        ]
      },
    ] 
  }
}