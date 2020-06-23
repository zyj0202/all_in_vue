<template>
  <div class="home">
	<div>
	    <backTop></backTop>
	</div> 
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<div class="datas">
		<div class="data" v-for="(item,index) in datas.datas" :key="index">
			<!-- 顶部轮播图 -->
			<div class="swipe" v-if="item.adv_list">
				<van-swipe :autoplay="3000" indicator-color="white">
				  <van-swipe-item v-for="(item1,index) in item.adv_list.item" :key="index">
					<img :src="item1.image" />
				  </van-swipe-item>
				</van-swipe>
				<!--搜索栏 -->
				<div class="search">
					<!-- 搜索框 -->
					<van-search placeholder="请输入搜索关键词" disabled="true" class="vansearch" @click="goToSearch"/>
					<!-- 信息框 -->
					<div class="message">
						<img src="../../public/message_ws.png" alt="">
						<span>消息</span>
					</div>
					
				</div>
			</div>
	
		</div>
		
	</div>
	<!-- 菜单导航宫格 -->
	<div class="menus">
		<div class="menu" v-for="(item,index) in menus" :key="index">
			<div class="menus_img">
				<img :src="item.image" alt="">
			</div>
			<span>{{item.name}}</span>
			
		</div>
		
	</div>
	<!-- 最新公告栏 -->
	<div class="notice">
		<div class="notice_text">
			<li>最新</li>
			<li>公告</li>
		</div>
		<van-notice-bar mode="closeable"  left-icon="volume-o" class="notice_bar">
		  怎么就不左移动显示通知内容呢怎么就不左移动显示通知内容呢
		</van-notice-bar>
		<span>更多</span>
	</div>
	<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
	  商品推荐
	</van-divider>
	<!-- banner -->
	<div class="banners">
		<div v-for="(item,index) in datas.datas" :key="index">
			<div v-if="item.goods" class="banner_all">
				<div class="banner" v-for="(item1,index) in item.goods.item" :key="index">
					<!--展示的商品 -->
					<div class="banner_img">
						
						<router-link :to="'/detail/'+item1.goods_id">
							<img :src="item1.goods_image" alt="">
							<span>{{item1.goods_name}}</span>
						</router-link>
					</div>
					
					<div class="banner_money">
						
						<span>￥{{item1.goods_promotion_price}}</span>
						
						<span>{{item1.buy_multiple}}件装</span>
						<div class="banner_cart">
							<span>热销商品</span>
							
							<img :src="'http://m.hianto2o.com/wap/images/cart_add.png'" alt="" @click="$router.push('/cart')">
						</div>
						
					</div>
					<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa' }" />
				</div>
			</div>
			
		</div>	
	</div>
	<!-- <div class="bottom">
		<van-tabs v-model="active">
		  <van-tab title="登录"></van-tab>
		  <van-tab title="注册"></van-tab>
		  <van-tab title="反馈"></van-tab>
		  <van-tab title="帮助"></van-tab>
		</van-tabs>
	</div> -->
  </div>
</template>
<style scoped="scoped" lang="less">
	.swipe{
		margin: -30px -30px 0 -30px;
		position:relative;
		
		img{
			width: 100%;
		}
		.search{
			opacity: 0.8;
			position:absolute;
			left: 50%;
			transform: translateX(-150px);
			bottom: 10px;
			width: 360px;
			height: 40px;
			display: flex;
			.vansearch{
				width: 260px;
			}
			.message{
				background-color: #3A3939;
				display: flex;
				flex-direction: column;
				align-items:flex-start;
				width: 40px;
				img{
					margin-left: 7px;
					opacity: 1;
					width: 20px;
					height: 20px;
				}
				
			}
			
			
		}
	}
	.menus{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-around;
		text-align:center;
		.menu{
			width: 25%;
			display:flex;
			flex-direction:column;
			.menus_img{
				padding: 10%;
				height: 40px;
				line-height: 40px;
				width: 40px;
				margin: 10px;
				border-radius: 50%;
				
				background-color: #CB4B16;
				text-align:center;
				img{
					width: 70%;
					vertical-align: middle;
					
				}
			}
			span{
				flex: 1;
			}
		}
		
	}
	.notice{
		display: flex;
		height: 42px;
		margin: 10px -30px 0 -30px;
		text-align: center;
		line-height: 42px;
		flex:1;
		.notice_text{
			text-decoration: none;
			list-style: none;
			width: 10%;
			line-height:20px;
			font-style:italic;
			li:nth-of-type(2){
				color: #880000;
			}
		}
		.notice_bar{
			width: 70%;
		}
		
	
	}
	
	// 

	.banner_all{
		display: flex;
		//主轴方向 x轴
		flex-direction:row;
		//撑满换行，默认不换行
		flex-wrap:wrap;
		margin-left: -20px;
		margin-top: 10px;
		margin-bottom: 30px;
		// margin:10px 0px -30px -30px;
		// 内容的对齐方式
		// 	flex-end主轴结束方向
		// 	center主轴方向居中
		// 	space-between 中间留空
		// 	space-around 周建和两遍都留空
		justify-content:space-around;
		.banner{
			width: 46%;
			display: flex;
			font-size: 16px;
			flex-direction:column;
			// 延y轴拉伸
			align-items:stretch;
			margin-left:10px;
			.banner_img{
				// width:100%;
				text-align: left;
				
				img{
					width: 100%;
				}	
			}
			.banner_money{
				display: flex;
				justify-content: space-between;
				flex-wrap:wrap;
				font-size: 15px;
				color: #880000;
				margin-top: 8px;
				.banner_cart{
					display: flex;
					// flex-direction: row;
					margin-top: 10px;
					width: 100%;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					span{
						background-color: #1b6e8e;
						border-radius: 4px;
						color: #FFF0FF;
					}
				}
			}
			
		}
	}
	// .bottom{
	// 	margin-top: -0.625rem;
	// 	margin-left: -1.25rem;
	// 	margin-bottom: 20px;
	// }
	// 
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {homes,menus} from '../../data.js'
import backTop from '../components/backTop.vue'
export default {
  name: 'home',
  
  components: {
    // HelloWorld
	backTop,
  },
  data(){
	  return{
		  datas:null,
		  menus:null,
		  active:0
	  }
  },
  created() {
  	this.datas=homes
	this.menus=menus
  },
  methods:{
	  goToSearch(){
		   this.$router.push("/search")
	  }
	 
  }
  

}
</script>
