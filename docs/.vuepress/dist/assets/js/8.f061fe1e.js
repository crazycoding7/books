(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(t,a,e){t.exports=e.p+"assets/img/image-20190903102802867.1ada3aca.png"},437:function(t,a,e){"use strict";e.r(a);var s=e(42),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gitbook使用教程-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitbook使用教程-mac"}},[t._v("#")]),t._v(" GitBook使用教程(Mac)")]),t._v(" "),s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.gitbook.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBook 官网"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/GitbookIO/gitbook",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBook 文档"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"使用步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[t._v("#")]),t._v(" 使用步骤")]),t._v(" "),s("h4",{attrs:{id:"安装node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装node-js"}},[t._v("#")]),t._v(" 安装Node.js")]),t._v(" "),s("p",[t._v("GitBook 是一个基于 Node.js 的命令行工具，下载安装 "),s("a",{attrs:{href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v("，安装完成之后，你可以使用下面的命令来检验是否安装成功。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("bogon:~ xin$ node -v\nv10.16.3\n")])])]),s("h4",{attrs:{id:"安装-gitbook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-gitbook"}},[t._v("#")]),t._v(" 安装 GitBook")]),t._v(" "),s("p",[t._v("输入下面的命令来安装 GitBook。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gitbook-cli -g\n")])])]),s("p",[t._v("安装完成之后，你可以使用下面的命令来检验是否安装成功。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("bogon:~ xin$ gitbook -V\nCLI version: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),t._v(".2\nGitBook version: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),t._v(".3\n")])])]),s("p",[t._v("更多详情请参照 "),s("a",{attrs:{href:"https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBook 安装文档"),s("OutboundLink")],1),t._v(" 来安装 GitBook。")]),t._v(" "),s("h4",{attrs:{id:"安装-gitbook-编辑器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-gitbook-编辑器"}},[t._v("#")]),t._v(" 安装 GitBook 编辑器")]),t._v(" "),s("p",[t._v("去 "),s("a",{attrs:{href:"https://www.gitbook.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBook 官网"),s("OutboundLink")],1),t._v(" 下载 GitBook 编辑器；如果是 Mac 用户且安装过 "),s("code",[t._v("brew cask")]),t._v(" 的话可以使用 "),s("code",[t._v("brew cask install gitbook-editor")]),t._v(" 命令行来安装 GitBook 编辑器。")]),t._v(" "),s("p",[t._v("推荐使用"),s("a",{attrs:{href:"https://www.typora.io/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Typora")]),s("OutboundLink")],1),t._v("直接编辑markdown文件。")]),t._v(" "),s("h4",{attrs:{id:"先睹为快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先睹为快"}},[t._v("#")]),t._v(" 先睹为快")]),t._v(" "),s("p",[t._v("GitBook 准备工作做好之后，我们进入一个你要写书的目录，输入如下命令。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ gitbook init\nwarn: no summary "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" this book\ninfo: create README.md\ninfo: create SUMMARY.md\ninfo: initialization is finished\n")])])]),s("p",[t._v("可以看到他会创建 README.md 和 SUMMARY.md 这两个文件，README.md 应该不陌生，就是说明文档，而 SUMMARY.md 其实就是书的章节目录，其默认内容如下所示：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# Summary\n\n* [Introduction](README.md)\n")])])]),s("p",[t._v("接下来，我们输入 "),s("code",[t._v("$ gitbook serve")]),t._v(" 命令，然后在浏览器地址栏中输入 "),s("code",[t._v("http://localhost:4000")]),t._v(" 便可预览书籍。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(358),alt:"image-20190903102802867"}})]),t._v(" "),s("p",[t._v("运行该命令后会在书籍的文件夹中生成一个 "),s("code",[t._v("_book")]),t._v(" 文件夹, 里面的内容即为生成的 html 文件，我们可以使用下面命令来生成网页而不开启服务器。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("gitbook build\n")])])]),s("p",[t._v("下面我们来详细介绍下 GitBook 目录结构及相关文件。")]),t._v(" "),s("h3",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("p",[t._v("GitBook 基本的目录结构如下所示：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├── book.json   存放配置信息\n├── README.md   \n├── SUMMARY.md  章节目录\n├── chapter-1/\n|   ├── README.md\n|   └── something.md\n└── chapter-2/\n    ├── README.md\n    └── something.md\n")])])]),s("h3",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),s("p",[t._v("这是我对 GitBook 使用的总结，希望能帮到今后需要的小伙伴。")])])}),[],!1,null,null,null);a.default=o.exports}}]);