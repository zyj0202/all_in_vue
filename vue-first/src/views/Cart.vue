<template>
	<div class="cart">
		<van-nav-bar title="购物车"  left-arrow @click-left="onClickLeft" @click-right="onClickRight">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		商品的id为{{$route.params.id}}
		
		
		<div>
			<!-- 展示vuex的数据模型 -->
			<van-card v-for="(item,index) in $store.getters.get_good" :key="index"
				:num="item.num"
				:title="item.id"
				thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
			>
				<!--更改vuex的数据模型 -->
				<van-stepper v-model="item.num" slot="bottom" @change="change(index,item.num)"	 />
				
			</van-card>
			
			
		</div>
		
	</div>
</template>
<style scoped="scoped" lang="less">
   .cart{
		margin: -30px;
   }

</style>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onClickRight(){
				this.$router.push('/search')
			},
			change(index,num){
				// 使用vuex的computed的方法，并与其形参对应
				this.$store.commit("changeNumber",[index,num])
				
			}
		}
	}
    
</script>
