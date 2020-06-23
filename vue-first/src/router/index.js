import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Serach from '../views/Serach.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		auth:true,
		
	}
  },
  {
    path: '/category',
    name: 'category',
	component: Category
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	path: '/search',
	name: 'search',
	component: Serach,
	meta:{
	 	auth:true
	 }
  },
  {
  	path: '/cart',
  	name: 'cart',
  	component: Cart,
	meta:{
		protect:true
	}
  },
  {
  	path: '/mine',
  	name: 'mine',
  	component: Mine,
	meta:{
	   	auth:true
	   }
  },
  {
  	path: '/detail/:id',
  	name: 'detail',
  	component: Detail  
  },
  {
  	path: '/login',
  	name: 'login',
  	component: Login  
  },


]

const router = new VueRouter({
  routes
})

router.beforeEach(function(t,f,n){
	if(t.meta.protect){
		if(localStorage.getItem("islogin")){
			n()	
		}
		else{
			n('/login')
		}
		
	}
	else{
		n()
	}


	
})


export default router
