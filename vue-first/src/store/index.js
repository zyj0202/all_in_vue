import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// data
  state: {
	goodlist:[],
	userinfo:[],
	oneuser:'',
  },
  // computed
  getters:{
	  // 将返回的数据模型在cart视图进行显示
	  get_good(state){
		  return state.goodlist
	  },
	  get_user(state){
		  return state.userinfo
	  },
	  get_one(state){
		  return state.oneuser
	  }
  },
// methods
// 在detail中操作改变vuex的数据模型，再传到cart试图展示
  mutations: {
	  addUser(state,user){
		  state.userinfo.push(user)
		   
	  },
	  nowUser(state,oneuserName){
		  state.oneuser=oneuserName
	  },
	  addGood(state,good){
		  state.goodlist.push(good)
		  let canAdd=true;
		  let index = 0;
		  // 判断是不是同一商品
		  state.goodlist.forEach((item,i)=>{
			  if(item.id==good.id){
				  canAdd=false;
				  index= i;
			  }
		  })
		  if(canAdd){
			  state.goodlist.push(good)
		  }
		  else{
			  state.goodlist[index].num=good.num
		  }
		  
	  },
	  // 因为只有两个形参，后面需要传商品的索引才能对其对应的num属性进行修改
	  changeNumber(state,in_nu_list){
		  state.goodlist[in_nu_list[0]].num=in_nu_list[1];
	  }
  },
  // promise
  actions: {
  },
  modules: {
  }
})
