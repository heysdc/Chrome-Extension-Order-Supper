# Chrome-Extension-Order-Supper

##Chrome插件，其本质为：突破页面js权限限制，调用chrome接口进行打开页面，自动在该页面运行js脚本，并关闭该页面
##Chrome Extensions: open a new page, run js on it automatically and close it

####需要改姓名，默认中午12点－1点订晚饭，要求在该时间段内chrome开着且插件不被关闭，订饭期间会弹出页面，10秒后页面自动关闭

![](http://ocuxixv24.bkt.clouddn.com/detail.png)
###使用方法：
1. clone项目
2. 配置参数
3. 打开chrome浏览器
4. 进入chrome://extensions/
5. 开启开发者模式
6. 点击加载已解压的扩展程序, 选择文件夹Chrome-Extension-Order-Supper
7. 启用该插件

###需要配置的参数
1. go.js的name：订餐人姓名
2. orderFood.js的orderFoodHour：几点订餐 （默认12点－1点）
