(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{439:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"linux命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux命令"}},[t._v("#")]),t._v(" Linux命令")]),t._v(" "),n("p",[t._v("[TOC]")]),t._v(" "),n("h4",{attrs:{id:"_1-汇总"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-汇总"}},[t._v("#")]),t._v(" 1. 汇总")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.查看端口 ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lsof")]),t._v(" -i:8080\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2.临时打开防火墙")]),t._v("\niptables -I INPUT -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8090")]),t._v(" -j ACCEPT\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" iptables restart\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3.下载文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -c http://sea-repo.hostwinds.net/tests/100mb.zip\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4.硬盘大小")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" -h\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#5.查看cpu、内存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#6.路由经过网关")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("traceroute")]),t._v(" -n www.google.com\n\n")])])]),n("h4",{attrs:{id:"_2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2"}},[t._v("#")]),t._v(" 2.")])])}),[],!1,null,null,null);s.default=e.exports}}]);