<template>
	<div id="mine">
		<div class="top_all">
			<div class="top_top">
				<div></div>
				<a href="#">
					<span>设置</span>
					<van-icon name="setting-o" />
				</a>
			</div>
			<div class="top_bottom" >
				
				<div class="member-box" >
					<!-- 未登录 v-if islogin flase-->
					<div class="member-info"  v-if="!islogin">
						<a href="#">
							<img src="http://img2.ch999img.com/newstatic/2048/014ce31b7846786e.png.webp" alt="">
						</a>
						<div class="login">
							<router-link to="/login">
								<a href="#">登录 |</a>
								<a href="#">注册</a>
							</router-link>	
						</div>
						
					</div>
					<!-- 登录成功  ture-->
					<div class="member-info" v-else >
						<a href="#">
							<img src="../../public/login.jpg" alt="">
						</a>
						<div class="login" @click="logout">
							<a href="##">{{$store.getters.get_one}}</a>
							
							<a href="#">注销</a>
						</div>
						
					</div>
					
					<div class="property" >
						<div class="property-con" v-for="(item,index) in datas.property" :key="index">
							<span>{{item.number}}</span>
							<span>{{item.title}}</span>
						</div>
						
					</div>
				</div>
				<div class="member-bottom">
					<img src="https://img2.ch999img.com/newstatic/1379/0141136bce243dc3.jpg" alt="">
				</div>
				
			</div>
			
		
			
			
		</div>
		<div class="content" v-for="(item,index) in datas.menu" :key="index">
			<div class="content-all"  v-if="item.type==1" >
				<div class="content-all-top"  >
					<span>{{item.title}}</span>
					<span>{{item.moreText}}</span>
				</div>
				<div class="item2">
					<div class="content-all-bottom" v-for="(item1,index) in item.item " :key="index">
						<span><img :src="item1.imagePath" alt=""></span>
						<span>{{item1.title}}</span>
					</div>
				</div>
				
				
			</div>
			<div class="type2" v-if="item.type==2">
				<img src="https://img2.ch999img.com/newstatic/1525/014c6d45cbc1bf33.jpg.webp" alt="">
				<img src="https://img2.ch999img.com/newstatic/1527/01440cb1af4b895a.jpg.webp" alt="">
			</div>
			
			
		</div>
		
	</div>
</template>
<style scoped="scoped" lang="less">
	
	#mine{
	
		margin: -30px;
		margin-bottom: 20px;
		box-sizing: border-box;
		.top_all{
			width: 100%;
			background-image: url("https://img2.ch999img.com/newstatic/1379/01437aa24ec31145.jpg");
			height: 270px;
			border-radius: 0 0 20px 20px;
			.top_top{
				display: flex; 
				height: 44px;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 14px;
				align-items: center;
			}
			.top_bottom{
				.member-box{
					padding: 0 14px 6px;
					box-sizing: border-box;
					position: relative;
					.member-info{
						display: flex;
						
						align-items: center;
						a{
							flex-shrink:0;
							width: 87px;
							height: 73px;
							img{
								width: 100%;
								border-radius: 50%;
								border: 4px solid;
							}
						}
						.login{
							margin-left: 50px;
							width: 90px;height: 14px;
							a{
								margin-right: 5px;
								// padding: 0 5px;
								
							}
						}
					}
					.property{
						display:flex;
						flex-direction: row;
						margin-top:35px;
						
						.property-con{
							display: flex;
							align-items: center;
							flex-direction: column;
							width:25%;
						}
					}
					
					
				}
				.member-bottom{
					margin: 0 15px;
					height: 64px;
					img{
						border-radius: 10px 10px 0 0;
						width: 100%;
					}
				}
			}	
		}
		
		.content-all{
			
			
			display: flex;
			flex-direction: column;
			padding:6px 15px;
			margin:10px 14px 14px;
			
			.content-all-top{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
			.item2{
				display: flex;
				flex-direction:row;
				flex-wrap:wrap;
				// margin:0 auto;
				margin: 20px 10px 10px 30px;
				
				.content-all-bottom{
					display: flex;
					flex-direction: column;
					width: 25%;
					margin-bottom:15px;
					font-size:12px;
					img{
						width: 80%;
					}
					align-items: center;
				}
			}
			
		}
		.type2{
			height: 84px;
			display: flex;
			margin:10px;
			
			img{
				width:48%;
				padding: 5px;
				border-radius: 10px;
			}
		}
		
		
		
	}
	
	
	
	
	
	
</style>

<script>
	import {mine} from '../../data.js'
	export default{
		data(){
			return {
				datas:null,
				islogin:localStorage.getItem("islogin")
			}
		},
		created() {
			this.datas=mine.data
			
		},
		
		methods:{
			logout(){
				this.islogin= localStorage.removeItem("islogin")
			}
		}
		
		
	}

</script>

