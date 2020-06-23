<template>
	<div class="detail">
		<div class="D-top">
			<img :src="datas.goods_image" alt="">
			<div class="D-top-img">
				<div class="D-top-img1" @click="goback">
					<img src="../../public/arrow_left_r.png" alt="">
				</div>
				<div class="D-top-img1">
					<img src="../../public/more_r.png" alt="">		
				</div>
				
			</div>
			<div class="D-bottom-img">
				<div class="D-bottom-img1">
					<img src="../../public/favorite_r.png" alt="">
				</div>
			</div>
	
		</div>
	
		<div class="main">
			
			<div class="goods-detail-county">
				<div>
					<img src="../../public/favorite_r.png" alt="">
					<!-- {{datas.goods_info.country_logo}} -->
					<!-- <span>{{datas.goods_info.country_name}}</span> -->
					<span>正规发票 售后保障</span>
				</div>
				
				<span class="dutypaid">热销商品</span>
			</div>
			
			<div class="goods-detail-name">
				<dl>
					<dt>{{datas.goods_info.goods_name}}</dt>
					<dd>{{datas.goods_info.goods_jingle}}</dd>
				</dl>
				
				
			</div>
			
			<div class="goods-detail-price">
				<span class="goods-detail-price1">￥{{datas.goods_info.goods_price}}</span>
				<span>{{datas.goods_info.buynow}}件装</span>
			</div>
			<div class="min_buy_number">
				起订量:{{datas.goods_info.min_buy_number}}件
			</div>
			<div class="min_buy_number">
				商品条形码：{{datas.goods_info.goods_barcode}}
			</div>
			<div class="goods-detail-item">
				<div class="itme-name">送至</div>
				<div class="item-con">
					<div>{{datas.goods_hair_info.area_name}}<span>{{datas.goods_hair_info.if_store_cn}}</span><van-icon name="location" /></div>
					<div class="item-con-content">{{datas.goods_hair_info.content}}</div>
				</div>
				
				
				
			</div>
			<div class="goods_spec_selected">
				<div class="goods_spec_selected-l">已选</div>
				<div class="goods_spec_selected-r">
					<span>默认</span>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="goods-detail-comment">
				<div class="title">
					<a href="">
						商品评价
						<span>
							好评率:{{datas.goods_evaluate_info.good_percent}}%
						</span>
					</a>
					<div class="arrow_span">
						<span>({{datas.goods_evaluate_info.all}}人评价)</span>
						<van-icon name="arrow" />
					</div>
				</div>
			
			</div>
			<div class="goods-detail-store">
				<div class="store-name">
					<span>{{datas.store_info.store_name}}</span>
					<van-icon name="arrow" />
				</div>
				<div class="store-rate" >
					<div v-for="(item,index) in datas.store_info.store_credit">
						<span>{{item.text}}:{{item.credit}}</span>
					</div>
					
				</div>

			</div>
			<div class="goods-detail-recom">
				<h3>
					店铺推荐
				</h3>
				<div class="goods-detail-recom-list" >
					<div class="list-all" v-for="(item,index) in datas.goods_commend_list">
						<div class="list-all-span-img">
							<img :src="item.goods_image_url" alt="">
							
							<span>{{item.goods_name}}</span>
							
												
						</div>
						<span>￥{{item.goods_promotion_price}}</span>
						
					
					
						
					</div>
					
					
					
				</div>
				
				
				
			</div>
			
			
		</div>
	
		<van-popup v-model="show" position="bottom" :style="{ height: '80%' }">
			<div>
				选择购买个数：<van-stepper v-model="buyNum" />
			</div>
			
			<van-button type="primary" @click="addCart">加入购物车</van-button>
		</van-popup>
		<van-goods-action>
			
		  <van-goods-action-icon icon="chat-o" text="客服"  />
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/cart')"  :info="$store.getters.get_good.length"/>
		  <van-goods-action-button type="warning" text="加入购物车" @click="show=true" />

		</van-goods-action>
	</div>
	
</template>
<style scoped="scoped" lang="less">
	.detail{
		margin: -30px;
		box-sizing: border-box;
		.D-top{
			width: 100%;
			height: 352px;
			position: relative;
			img{
				// margin: 0 30px 0 10px;
				margin-left: 7px;
				margin-top: -10px;
				vertical-align: top;
				// width: 98%;
			}
		
			.D-top-img{
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 100%;
				height: 42px;
				// background-color:#073642;
				opacity: 0.7;
				.D-top-img1{
					
					width: 42px;
					height: 42px;
					border-radius: 50%;
					background-color:#002B36;
					margin: 10px;
					img{
						width: 50%;
						margin: 10px;
					}
					
				}
				
			}
			
			.D-bottom-img{
				position: absolute;
				bottom: 10px;
				right: 0px;
				.D-bottom-img1{
					width: 42px;
					height: 42px;
					border-radius: 50%;
					background-color:#002B36;
					margin: 10px;
					img{
						width: 50%;
						margin: 10px;
					}
				}
				
				
				
			}
		}
		
		.main{
			
			margin-bottom: 100px;
			
			.goods-detail-county{
				padding: 0 10px;
				display: flex;
				height: 30px;
				align-items: center;
				justify-content:space-between;
				img{
					
					width: 24px;height: 20px;
				}
				span{
					color: rgb(237, 85, 100);
					font-size: 17px;
				}
				.dutypaid{
					color: #FFFFFF;
					border-radius: 5px;
					background-color: rgb(27, 110, 142);
				}
				
			}
			.goods-detail-name{
				height: 52px;
				padding: 5px 11px;
				
				
				dt{
					font-size: 15px;
				}
				dd{
					font-size: 12px;
					margin-left: 0;
				}
			}
			.goods-detail-price{
				padding: 0 10px;
				display: flex;
				justify-content: space-between;
				align-items:center;
				span{
					color: #880000;
					font-size: 14px;
				}
					
				.goods-detail-price1{
					font-size: 22px;
					color: #880000;
				}
			}
			.min_buy_number{
				padding: 0 10px;
			}
			.goods-detail-item{
			
				display: flex;
				padding: 0 10px;
				 font-size: 16px;
				margin-top:10px;
				flex: 1;
				text-align: center;
				.itme-name{
						width: 15%;
						height: 0.9rem;
						color: #888;
						line-height: 0.9rem;
					
				}
				.item-con{
					span{
						margin-left: 10px;
						color: #880000;
						margin-right: 200px;
					}
					.item-con-content{
						margin-top: 5px;
						margin-left: -230px;
					}
					
				}
			}
			.goods_spec_selected{
				padding: 10px;
				display:flex;
				.goods_spec_selected-l{
					
					width: 10%;
				}
				.goods_spec_selected-r{
					width: 90%;
					display: flex;
					justify-content: space-between;
					span{
						padding: 1px;
						border: 1px #3A3939 solid;
					}
				}
				
		}
			.goods-detail-comment{
				display: flex;
				border: 1px #3A3939 solid;
				padding: 10px;
				margin-top: 10px;
				justify-content:space-between;
				// font-size: 14px;
				a{
					margin-left: -5px;
				}				
				.arrow_span{	
					display: inline-block;
					margin-left: 100px;
				}
			}
			.goods-detail-store{
				display: flex;
				flex-direction: column;
				margin-top: 10px;
				border: 1px #3A3939 solid;
				padding: 10px;
				.store-name{
					display: flex;
					justify-content: space-between;
				}
				.store-rate{
					display: flex;
					justify-content: space-between;
					flex-direction: row;
					margin-top: 5px;
				}
				
			}
			
			.goods-detail-recom{
				padding: 10px;
				.goods-detail-recom-list{
					display: flex;
					flex-direction: row;
					flex-wrap:wrap;
					.list-all{
						width:25%;
						display: flex;
						flex-direction:row;
						flex-wrap: wrap;
						font-size: 0.5rem;
						.list-all-span-img{
							width: 88%;
							
							img{
								width: 100%;
							}
							
						}
						
					}
				}
			}
			
			
			
	}

	
}
	
</style>


<script>
	import {details} from '../../data.js'
	export default{
		data(){
			return{
				datas:null,
				show:false,
				buyNum:1
				
				
			}
		},
		created() {
			this.datas=details.datas
		},
		methods:{
			goback(){
				this.$router.go(-1)
			},
			addCart(){
				this.show=false;
				this.$toast("添加成功")
				this.$store.commit("addGood",{id:this.$route.params.id,num: this.buyNum})
			}
		}
	}
</script>

