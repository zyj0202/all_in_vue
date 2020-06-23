<template>
  
	<div class="category">
		<!-- 搜索栏 -->
		<div class="C_top" >
			<van-nav-bar >
				<van-icon name="arrow-left" slot="left" @click="onClickLeft" />
				<van-search placeholder="请输入搜索关键词" slot="title"/>
				<div slot="right" @click="show_more">更多</div>
			</van-nav-bar>
		</div>
		<div class="main">
			<!-- 分类名 -->
			<div class="main_left">
					<van-sidebar v-model="activeKey" @change="onChange">
						<van-sidebar-item :title="item.gc_name" v-for="(item,index) in datas"/>	
					</van-sidebar>				
			</div>
			<!-- 分类对应商品 -->
			<div class="main_right" ref="right">
				<div v-for="(item,index) in datas" v-if="index==activeKey">
					<div v-for="(item1,index) in item.class_list">
						<van-nav-bar>
							<div slot="left"><li>{{item1.gc_name}}</li></div>
							<van-icon name="arrow" slot="right" />
						</van-nav-bar>
						<div class="item2_father">
							<div class="item2" v-for="(item2,index) in item1.child">
								<p>{{item2.gc_name}}</p>	
							</div>
						</div>
						
						
						
					</div>
					
					
				</div>
				
			</div>
		
		</div>
		
	
		
	</div>
	
</template>
<style scoped="scoped" lang="less">
	
	.C_top{
		margin-top: -30px;
		line-height: 50px;
		height: 50px;
	}
	.main{
		margin-left: -30px;
		margin-right: -30px;
		margin-bottom: 30px;
		display:flex;
		
		.main_left{
			width: 25%;
			position: absolute;
			top: 50px;
			left: 0px;
			overflow: auto;
		}
		.main_right{
			overflow: auto;
			position: absolute;
			top: 50px;
			right: 0;
			bottom: 50px;
			width: 75%;
			
			li{	
				font-size: 16px;
				color: #777777;
			}
			.item2_father{
				font-size: 14px;
				display: flex;
				flex-wrap:wrap;
				flex-direction: row;	
			}
			.item2{
				width: 33%;	
				// 不可用span标签
				p{
					overflow: hidden;
					//溢出显示为省略号
					text-overflow:ellipsis;
					// 不换行
					white-space: nowrap;
				}
			}
		}
		
	}
	
	
	
</style>
<script>
	import {category} from '../../data.js'
	export default{
		data(){
			return{
				datas:null,
				activeKey:0
			}
		},
		created() {
			this.datas=category
		},
		methods:{
			onClickLeft() {
			 this.$router.go(-1);
			},
			show_more() {
			  this.$toast('按钮');
			},
			onChange(index){
				this.$refs.right.scrollTo(0,0)
			}
			
		}
		
		
		
		
	}
	
</script>