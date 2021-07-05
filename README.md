# OPP
2021年7月2日，下雨，断断续续写了2天，到目前为止实现了:triangular_flag_on_post::

1. FIRSTVT
2. LASTVT
3. PRT优先关系表

今天找到了昨天写的两个重要错误:warning:：

1. VT和VN在部分代码中搞反了，VT才是终结符，VN是非终结符 :unamused: ，实在太蠢了
2. 之前用是否是小写来筛选终结符，事实证明偷懒是没有好下场的，重新写了`isVT`函数，并考虑了`undefined`和字符串情况

今天实现了个不错的想法：

在工具模块`tools`中写了个叫`decorate2DArray`的函数，代码很简洁，作用是为二维数组加上行头和列头，输出调试的时候再也不会看不懂二维数组。而且因为相当于装饰函数，所以想去掉得到纯数据时只需要删除这个调用就可以了，应该会有不错的效果。

------

2021年7月4日，下带雨，第三天完成了所有功能，今天实现:triangular_flag_on_post:：

1. 算符优先分析过程

今天修复了前天写的两个错误:warning:：

1. 调整了`decorate2DArray`函数的位置，现在不会因为提前装饰了FIRSTVT和LASTVT而导致在求PRT的过程中发生错误。
2. 修改了`findVTindex`函数，现在它可以正确地找到“#”的索引（即VTarr.length）。是否应该在一开始就将"#"算入VTarr？这个问题我至今很模糊，网课上也没有说得很清楚，感觉它是在求PRT时突然加入的，所以会产生一些冲突。

晚上写完页面就完成了。

------

2021年7月5日，毛毛雨，第四天终于开始写界面了，今天实现:triangular_flag_on_post:：

1. 学会了使用[antd ](https://ant.design/index-cn):ant:，之前不会react时总觉得很难，今天发现挺简单的:happy:
2. 为了使数据契合antd中Table组件的接受格式，我将我之前”引以为傲“二维数组展示形式推倒了，重新编写了`generateColumns`和`generateDataSource`这两个工具函数生成新的数据格式。我想一定有人写了二维数组转json数组的轮子，但我没找到，而且我的数据比较特别，索性就自己写了。说真的这段代码写得挺臭的:disappointed_relieved:，即使有注释我过几天也一定看不懂了。(主要还是前期的准备工作没有做好，数据结构设计漏洞较多，后面打的补丁多)

今天发现的大问题:warning:：

1. ”#“真的太折磨人了，每次改动都要单独考虑它，再给我一次机会我一定一开始就将它算作VT

今晚加把劲试试能不能把界面搞定吧，如果可以全部搞完也好。

------

