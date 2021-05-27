(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{399:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"树形结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树形结构"}},[t._v("#")]),t._v(" 树形结构")]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("h3",{attrs:{id:"一、树形结构概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、树形结构概念"}},[t._v("#")]),t._v(" 一、树形结构概念")]),t._v(" "),a("h4",{attrs:{id:"_1-二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-二叉树"}},[t._v("#")]),t._v(" 1. 二叉树")]),t._v(" "),a("p",[t._v("​\t**特点：**每个节点最多有两个子树。")]),t._v(" "),a("p",[t._v("​\t**存储形式：**顺序存储(数组,适合完全二叉树，避免浪费空间)、链式存储(left,right)。")]),t._v(" "),a("h5",{attrs:{id:"遍历方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历方法"}},[t._v("#")]),t._v(" "),a("strong",[t._v("!!!遍历方法!!!：")])]),t._v(" "),a("p",[t._v("​\tDLR--前序遍历（根在前，从左往右，一棵树的根永远在左子树前面，左子树又永远在右子树前面 ）")]),t._v(" "),a("p",[t._v("​\tLDR--中序遍历（根在中，从左往右，一棵树的左子树永远在根前面，根永远在右子树前面）")]),t._v(" "),a("p",[t._v("​\tLRD--后序遍历（根在后，从左往右，一棵树的左子树永远在右子树前面，右子树永远在根前面）")]),t._v(" "),a("p",[t._v("​\t层序遍历(按层，从上到下，从左到右遍历)")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"images/tree_itr.png"}}),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"images/tree_itr_layer.png"}}),t._v(" "),a("h5",{attrs:{id:"构建方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建方法"}},[t._v("#")]),t._v(" "),a("strong",[t._v("!!!构建方法!!!：")])]),t._v(" "),a("p",[t._v("实现思路：")]),t._v(" "),a("ol",[a("li",[t._v("根据"),a("strong",[t._v("前序+中序")]),t._v("或者"),a("strong",[t._v("后序+中序")]),t._v("来唯一确定二叉树的结构。")]),t._v(" "),a("li",[t._v("扩充二叉树前序序列构建二叉树。")])]),t._v(" "),a("h4",{attrs:{id:"_2-满二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-满二叉树"}},[t._v("#")]),t._v(" 2. 满二叉树")]),t._v(" "),a("p",[t._v("​\t特点：除叶子节点外，其他节点的度一点是2。")]),t._v(" "),a("h4",{attrs:{id:"_3-完全二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-完全二叉树"}},[t._v("#")]),t._v(" 3. 完全二叉树")]),t._v(" "),a("p",[t._v("​\t特定：与满二叉树类似，只是叶子节点允许可以为一个；满二叉树一定是完全二叉树。")]),t._v(" "),a("h4",{attrs:{id:"_4-二叉查找树-有序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-二叉查找树-有序"}},[t._v("#")]),t._v(" 4. 二叉查找树(有序)")]),t._v(" "),a("p",[t._v("​\t二叉排序树（Binary Sort Tree），又称二叉查找树（Binary Search Tree），亦称二叉搜索树。是数据结构中的一类。在一般情况下，查询效率比链表结构要高。")]),t._v(" "),a("p",[t._v("​\t特点：左子树上的节点均小于根节点，右子树上的节点均大于根节点。")]),t._v(" "),a("h4",{attrs:{id:"_5-平衡二叉树-有序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-平衡二叉树-有序"}},[t._v("#")]),t._v(" 5. 平衡二叉树(有序)")]),t._v(" "),a("p",[t._v("​\t定义：其实平衡二叉树的英文是Self-Balancing Binary Searching Tree，但是在1962年两位科学家G.M.Adelson-Velskii和E.M.Landis共同发明了一种解决平衡二叉树的算法，所以后续资料就称平衡二叉树为AVL树。")]),t._v(" "),a("p",[t._v("​\t"),a("strong",[t._v("平衡二叉树的常用实现方法有AVL、红黑树、替罪羊树、Treap、伸展树等。")])]),t._v(" "),a("p",[t._v("​\t"),a("strong",[t._v("特点：平衡树(Balance Tree，BT) 指的是，任意节点的子树的高度差都小于等于1。")])]),t._v(" "),a("p",[t._v("​\t"),a("strong",[t._v("是对二叉查找树的优化；避免二叉查找树(有序的)变成“链表”，保证树的左右平衡。")])]),t._v(" "),a("p",[a("img",{staticStyle:{zoom:"80%"},attrs:{src:"images/btree.png"}}),t._v("r")]),t._v(" "),a("p",[a("strong",[t._v("场景：")])]),t._v(" "),a("p",[t._v("​\tAVL树是带有平衡条件的二叉查找树，一般是用平衡因子差值判断是否平衡并通过旋转来实现平衡，左右子树高度差不超过1，和红黑树相比，AVL树是"),a("strong",[t._v("严格的平衡二叉树")]),t._v("，平衡条件必须满足("),a("strong",[t._v("所有结点的左右子树高度差不超过1")]),t._v(")。不管我们是执行插入还是删除操作，只要不满足上面的条件，就要通过旋转来保存平衡，而因为旋转非常"),a("strong",[t._v("耗时")]),t._v("，由此我们可以知道"),a("strong",[t._v("AVL树适合用于插入与删除次数比较少，但查找多的情况")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"_6-红黑树-有序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-红黑树-有序"}},[t._v("#")]),t._v(" 6. 红黑树(有序)")]),t._v(" "),a("p",[t._v("​\tR-B Tree，全称是Red-Black Tree，又称为“红黑树”，它一种平衡二叉树。红黑树的每个节点上都有存储位表示节点的颜色，可以是红(Red)或黑(Black)。")]),t._v(" "),a("p",[t._v("​\t特点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("根节点必须为黑色；")])]),t._v(" "),a("li",[a("p",[t._v("节点非黑即红，不可以同时存在红色节点；")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("从根到叶子的最长的可能路径不多于最短的可能路径的两倍长")]),t._v("。(区别：当前节点到任何叶子节点的黑色节点数相同)")])]),t._v(" "),a("li",[a("p",[t._v("如果一个节点是红色，它的孩子节点都是黑色；")])]),t._v(" "),a("li",[a("p",[t._v("叶子节点都是黑色。")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/redblacktree.png",alt:""}})])])]),t._v(" "),a("p",[a("strong",[t._v("场景：")])]),t._v(" "),a("p",[t._v("红黑树的应用比较广泛，主要是用它来存储有序的数据，它的时间复杂度是O(logN)，效率非常之高。\n它虽然是复杂的，但它的最坏情况运行时间也是非常良好的，并且在实践中是高效的： 它可以在O(log n)时间内做查找，插入和删除，这里的n 是树中元素的数目。\n例如，Java集合中的TreeSet和TreeMap，C++ STL中的set、map，以及Linux虚拟内存的管理，都是通过红黑树去实现的。")]),t._v(" "),a("p",[a("strong",[t._v("区别：")])]),t._v(" "),a("p",[t._v("1、红黑树放弃了追求完全平衡，追求大致平衡，在与平衡二叉树的时间复杂度相差不大的情况下，保证每次插入最多只需要三次旋转就能达到平衡，实现起来也更为简单。")]),t._v(" "),a("p",[t._v("2、平衡二叉树追求绝对平衡，条件比较苛刻，实现起来比较麻烦，每次插入新节点之后需要旋转的次数不能预知。")]),t._v(" "),a("h4",{attrs:{id:"_7-小顶堆和大顶堆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-小顶堆和大顶堆"}},[t._v("#")]),t._v(" 7. 小顶堆和大顶堆")]),t._v(" "),a("p",[t._v("​\t堆是一种"),a("strong",[t._v("非线性结构")]),t._v("，（本篇随笔主要分析堆的数组实现）可以把堆看作一个数组，也可以被看作一个完全二叉树，通俗来讲"),a("strong",[t._v("堆其实就是利用完全二叉树的结构来维护的一维数组")])]),t._v(" "),a("p",[t._v("按照堆的特点可以把堆分为"),a("strong",[t._v("大顶堆")]),t._v("和"),a("strong",[t._v("小顶堆")])]),t._v(" "),a("p",[t._v("大顶堆：每个结点的值都"),a("strong",[t._v("大于")]),t._v("或"),a("strong",[t._v("等于")]),t._v("其左右孩子结点的值;")]),t._v(" "),a("p",[t._v("小顶堆：每个结点的值都"),a("strong",[t._v("小于")]),t._v("或"),a("strong",[t._v("等于")]),t._v("其左右孩子结点的值;")]),t._v(" "),a("p",[t._v("**大顶堆：**arr[i] >= arr[2i+1] && arr[i] >= arr[2i+2] ;")]),t._v(" "),a("p",[t._v("**小顶堆：**arr[i] <= arr[2i+1] && arr[i] <= arr[2i+2] ;")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/bigheaptree.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("场景：")])]),t._v(" "),a("p",[t._v("​\t海量数据找TopK问题、优先级队列问题。")]),t._v(" "),a("h4",{attrs:{id:"_8-b-树或b树-多路查找树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-b-树或b树-多路查找树"}},[t._v("#")]),t._v(" 8. B-树或B树(多路查找树)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/herr_kun/article/details/80550652",target:"_blank",rel:"noopener noreferrer"}},[t._v("!!参考!!"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("多路搜索树，每个结点存储M/2到M个关键字，非叶子结点存储指向关键")]),t._v(" "),a("p",[t._v("字范围的子结点；")]),t._v(" "),a("p",[t._v("所有关键字在整颗树中出现，且只出现一次，非叶子结点可以命中；")]),t._v(" "),a("p",[t._v("场景：B/B+树是为了磁盘或其它存储设备而设计的一种平衡多路查找树(相对于二叉,B树每个内节点有多个分支),与红黑树相比,在相同的的节点的情况下,一颗B/B+树的高度远远小于红黑树的高度("),a("strong",[t._v("在下面B/B+树的性能分析中会提到")]),t._v(").B/B+树上操作的时间通常由存取磁盘的时间和CPU计算时间这两部分构成,而CPU的速度非常快,所以B树的操作效率取决于访问磁盘的次数,关键字总数相同的情况下B树的高度越小，磁盘I/O所花的时间越少.")]),t._v(" "),a("p",[t._v("Ｂ树出现是因为磁盘ＩＯ。ＩＯ操作的效率很低，那么，当在大量数据存储中，查询时我们不能一下子将所有数据加载到内存中，只能逐一加载磁盘页，每个磁盘页对应树的节点。造成大量磁盘ＩＯ操作（最坏情况下为树的高度）。平衡二叉树由于树深度过大而造成磁盘IO读写过于频繁，进而导致效率")]),t._v(" "),a("h4",{attrs:{id:"b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[t._v("#")]),t._v(" B+树")]),t._v(" "),a("p",[t._v("在B-树基础上，为叶子结点增加链表指针，所有关键字都在叶子结点")]),t._v(" "),a("p",[t._v("中出现，非叶子结点作为叶子结点的索引；B+树总是到叶子结点才命中；")]),t._v(" "),a("h4",{attrs:{id:"b-树-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树-2"}},[t._v("#")]),t._v(" B*树")]),t._v(" "),a("p",[t._v("在B+树基础上，为非叶子结点也增加链表指针，将结点的最低利用率")]),t._v(" "),a("p",[t._v("从1/2提高到2/3；")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000019927682",target:"_blank",rel:"noopener noreferrer"}},[t._v("资料"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"二、树形搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、树形搜索"}},[t._v("#")]),t._v(" 二、树形搜索")]),t._v(" "),a("blockquote",[a("p",[t._v("最好时间复杂度都是O(logN)。")])]),t._v(" "),a("h4",{attrs:{id:"_1-红黑树-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-红黑树-重点"}},[t._v("#")]),t._v(" 1. 红黑树(重点)")]),t._v(" "),a("p",[t._v("​\t性能最好，时间复杂度是O(logN)。适用于查找、插入、删除。")]),t._v(" "),a("h4",{attrs:{id:"_2-avl树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-avl树"}},[t._v("#")]),t._v(" 2. AVL树")]),t._v(" "),a("p",[t._v("​\t查找性能好，时间复杂度是O(logN)。插入和删除需要多次旋转。")]),t._v(" "),a("h4",{attrs:{id:"_3-大顶堆-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-大顶堆-重点"}},[t._v("#")]),t._v(" 3. 大顶堆(重点)")]),t._v(" "),a("p",[t._v("​\t适用有TopK问题，O(logN)。")]),t._v(" "),a("h3",{attrs:{id:"三、常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、常见问题"}},[t._v("#")]),t._v(" 三、常见问题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("红黑树效率很高，为什么没有用在"),a("code",[t._v("MySQL")]),t._v("中做索引？")]),t._v(" "),a("p",[t._v("数据库是将记录保存在磁盘中，将数据库的内容读取到内存中，是读一页大小（4K）的内容，而红黑树中的一个结点仅仅保存了一个数据，所以被查找到的概率很低，需要多次"),a("code",[t._v("I/O")]),t._v("操作，存在"),a("code",[t._v("I/O")]),t._v("浪费以及读取资源浪费。"),a("strong",[t._v("红黑树适合在内存中进行查找，不适合数据量大或磁盘存储的情况中查找。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("B+树 适合文件存储系统。")])])])]),t._v(" "),a("h3",{attrs:{id:"四、习题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、习题"}},[t._v("#")]),t._v(" 四、习题")]),t._v(" "),a("h5",{attrs:{id:"_1-根据前序、中序推导二叉树结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-根据前序、中序推导二叉树结构"}},[t._v("#")]),t._v(" 1. 根据前序、中序推导二叉树结构")]),t._v(" "),a("p",[t._v("前序遍历: GDAFEMHZ\n中序遍历: ADEFGHMZ")]),t._v(" "),a("p",[t._v("结果：")]),t._v(" "),a("p",[t._v("​                         G1")]),t._v(" "),a("p",[t._v("​        D2                                M")]),t._v(" "),a("p",[t._v("A3              F4                    H       Z")]),t._v(" "),a("p",[t._v("​           E5")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/jpfss/p/11141956.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h5",{attrs:{id:"_2-根据中序、后序推导二叉树结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-根据中序、后序推导二叉树结构"}},[t._v("#")]),t._v(" 2. 根据中序、后序推导二叉树结构")]),t._v(" "),a("p",[t._v("中序遍历：ADEFGHMZ\n后序遍历：AEFDHZMG")]),t._v(" "),a("p",[t._v("结果：")]),t._v(" "),a("p",[t._v("​                            G1")]),t._v(" "),a("p",[t._v("​              D                          M2")]),t._v(" "),a("p",[t._v("​      A          F                 H3             Z4")]),t._v(" "),a("p",[t._v("​              E")]),t._v(" "),a("h5",{attrs:{id:"_3-扩充前序序列-构建二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-扩充前序序列-构建二叉树"}},[t._v("#")]),t._v(" 3.  扩充前序序列 构建二叉树")]),t._v(" "),a("p",[t._v("前序字符串： ABC##DE#G##F### 其中“#”表示的是空格，代表一棵空树。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBinaryTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeFirst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBinaryTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBinaryTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1176915",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h5",{attrs:{id:"_4-用中序序列和前序序列-构建二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-用中序序列和前序序列-构建二叉树"}},[t._v("#")]),t._v(" 4.  用中序序列和前序序列 构建二叉树")]),t._v(" "),a("p",[t._v("其前序遍历序列为：{1,2,4,7,3,5,6,8}，中序遍历序列为：{4,7,2,1,5,3,8,6}。")]),t._v(" "),a("p",[a("strong",[t._v("构建过程：")]),t._v("  （1）前序遍历序列中的第一个数字为根节点，构造根节点；  （2）找到根节点在中序遍历序列中的位置，中序中根节点左右两边分别为左子树和有子树，前序序列根节点后面为左子树+右子树；  （3）递归处理处理左右子树，返回根节点，完成构造。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1. 根据区分动态数组长度计算 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBinaryTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" inorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到根节点在中序遍历序列中的位置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" inorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBinaryTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBinaryTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" inorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBinaryTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2. 根据区分节点数计算  大致相同")]),t._v("\n\n")])])]),a("h5",{attrs:{id:"_5-遍历二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-遍历二叉树"}},[t._v("#")]),t._v(" 5. 遍历二叉树")]),t._v(" "),a("p",[t._v("两种思路：递归、利用栈实现。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前序遍历")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),t._v(" myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" -> "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中序遍历")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),t._v(" myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" -> "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后序遍历")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTreeNode")]),t._v(" myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrderTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myTreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" -> "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"_6-二叉树的锯齿形层序遍历-z字遍历或层次遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-二叉树的锯齿形层序遍历-z字遍历或层次遍历"}},[t._v("#")]),t._v(" 6. 二叉树的锯齿形层序遍历(Z字遍历或层次遍历)")])])}),[],!1,null,null,null);s.default=r.exports}}]);