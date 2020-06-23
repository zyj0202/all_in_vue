<template>
	<div class="serach">
		<div class="S_top">
			<van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
				<van-icon name="arrow-left" slot="left"  />
				<van-search v-model="history" placeholder="请输入搜索关键词" slot="title"/>
				<div slot="right" >搜索</div>
			</van-nav-bar>
		</div>
		<div class="hot_serach">
			<p >热门搜索</p>
			<van-tag round type="primary" v-for="(item,index) in hot_list.datas.list" :key="index">
				{{item}}
			</van-tag>
		</div>
		<div class="history_serach">
			<p>历史记录</p>
			<!-- 通过遍历计算函数的返回值显示历史搜索信息 -->
			<van-tag round type="primary" v-for="(item1,index) in search_history" :key="index">
				{{item1}}
			</van-tag>
		</div>
		<div class="clear" @click="clear_history">
			<p>清除历史</p>
		</div>
	</div>
</template>
<style scoped="scoped" lang="less">
	.serach{
		position: relative;
		
		.clear{
			position: absolute;
			margin: 100px 120px;
			font-size: 18px;
			text-align: center;
		}
	}
</style>
<script>
	import {hot} from '../../data.js'
	export default{
		data(){
			return{
				hot_list:null,
				history:'',
				// 将json的字符串格式数据转成js对象展示到html上
				history_list:JSON.parse(localStorage.getItem("history_list"))||[]
			}
		},
		created() {
			this.hot_list=hot
		},
		computed:{
			search_history(){
				// 将从服务器拿到转换后的数据赋予数据模型后，将其返还出去给节点进行操作显示
				return this.history_list
			}
		},
		methods:{
			onClickRight(){
				if(this.history.length<=0){
					this.$toast("搜索不能为空")
				}
				else{
					// 点击了搜索 将搜索的值存储到本地,本地存储需要转成字符串
					// 与服务器之间的数据页数通过字符串的格式进行传输
					this.$toast(`搜索了  :  ${this.history}`);
					//在所有历史里添加新的搜索
					this.history_list.unshift(this.history);
					// 将所有更新过的历史信息转成字符串存储
					localStorage.setItem("history_list",JSON.stringify(this.history_list));
				}
				
			},
			onClickLeft(){
				this.$router.go(-1);
			},
			clear_history(){
				this.$toast("点击了清除历史")
				// 不能将移除的本地存储的值赋给数据模型
				// this.history_list=localStorage.removeItem("history_list")
				this.history_list=[]	
			}
		}
	}
	// 
	
</script>


