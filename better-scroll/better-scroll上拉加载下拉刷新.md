```JavaScript
mounted() { //第一步：导入插件后，在mounted中初始化插件
    this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.itemScroll, {
            click: true,
            probeType: 3
        })
        this.scroll.on('scroll', (pos) => {
            if (pos.y > 50) { //下拉高度大于50 (看自己需要)
                this.dropDown = true //逻辑操作，我这是显示下拉提示组件
            } else {
                this.dropDown = this.isLoading ? true : false //isloading 表示正在加载数据(加载中也显示下拉提示组件)
            }
        })
        //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
        this.scroll.on('touchEnd', (pos) => {
            // 下拉动作
            if (pos.y > 50) {
                this.isLoading = true
                this.page = 1
                this.getPostList().then(res => { //此处请求接口，处理数据，具体逻辑看自己需求，此处仅供参考
                    this.list = res.list
                    this.com_info = res.list.comment_info
                    this.downTip = 2 //提示内容
                    setTimeout(() => {
                        this.isLoading = false
                        this.dropDown = false
                        this.downTip = 1
                    }, 1000)
                })
            }
            //上拉加载 总高度>下拉的高度+数值(20仅供参考) 触发加载更多
            if (this.scroll.maxScrollY > pos.y + 20) {
                //使用refresh 方法 来更新scroll 解决无法滚动的问题
                if (this.isMorePage) { //判断是否有下一页
                    this.pullUp = true //显示上拉提示组件
                    this.page++
                    this.getPostList().then(res => { //调用接口，处理数据
                        this.pullUp = false
                        this.list = this.list.concat(res.list)
                        this.scroll.refresh() //刷新插件!!!!!这个挺重要的！别忘了。不然会一卡一卡
                    })
                }
            }
        })
    })
}
```
