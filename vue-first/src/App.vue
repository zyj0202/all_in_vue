<template>
  <div id="app">
    <div id="nav">
     <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
	  <!-- 将标签栏在底部显示,将标签栏的路由匹配成功显示内容在上方显示(router-view) -->
	  <router-view/>
	  <van-tabbar v-show="$route.meta.auth" v-model="active" active-color="#ff6700" route>
		<!--  <van-tabbar-item info="3">
		    <span>自定义</span>
		    <img
		      slot="icon"
		      slot-scope="props"
		      :src="props.active ? home_b.png.active : icon.inactive"
		    >
		  </van-tabbar-item> -->
		<van-tabbar-item name="home" icon="wap-home-o" to="/">首页</van-tabbar-item> 
	    <van-tabbar-item name="friends" icon="friends-o" to="/category">分类</van-tabbar-item>
	    <van-tabbar-item name="search" icon="search" to="/search">搜索</van-tabbar-item>
	    <van-tabbar-item name="cart" icon="cart-o" to="/cart">购物车</van-tabbar-item>
		<van-tabbar-item name="user-o" icon="user-o" to="/mine">我的</van-tabbar-item>
	  </van-tabbar>
    </div>
    
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
	export default {
	  data() {
	    return {
	      active: 0
	    }
	  }
	}
</script>
