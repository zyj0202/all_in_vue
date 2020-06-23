<template>
    <div class="scrollTop" v-show="showTop" @click="gotop">
		顶部
	</div>
</template>
<script>
    export default {
        name: 'backtop',
        data() {
            return {
                scrollTop: 0,
            }
        },
        computed: {
			// 计算函数进行显示顶部按钮
            showTop: function () {
                //判断滚轮位置是否大于300px，如果大于就ture，否则false
                let value = this.scrollTop > 300 ? true : false;
                //返回值
                return value;
            }

        },
		// 该渲染周期在视图中渲染了元素节点,能获取并操作dom节点
        mounted() {
            //addEventListener() 方法来添加监听事件
			// 原事件名其实为onscroll,但传参去掉on，监听到了就执行第二个参数(方法)
            window.addEventListener("scroll", this.getScrollTop);
        },
        methods: {
            gotop() {
                // 这是最简单的回到顶部代码，但是过渡非常生硬，不建议这样写
                // document.documentElement.scrollTop = 0
				// document.body.scrollTop？？？？？区别暂不知
                //这里的原理是用定时器每40毫秒执行一次函数，每一次滚轮px减50，直到0为止
                let back = setInterval(()=>{
                    if(document.documentElement.scrollTop ){
                        document.documentElement.scrollTop -=50;
                    }else{
                        clearInterval(back) //scrollTop到0时就移除定时器
                    }
                },40)
            },
            getScrollTop() {
                this.scrollTop =
				// scrollY的别名 滚轮的向下向上滚动的浮点值
                    window.pageYOffset ||
				// 要获取当前页面的滚动条纵坐标位置
                    document.documentElement.scrollTop 
            }
        }
    }
</script>
<style scoped>
    .scrollTop {
        position: fixed;
        right: 20%;
        bottom: 80px;
        width: 40px;
        height: 40px;
		opacity: 0.7;
        background: #10707F;
		text-align: center;
    }
</style>