<template>
  <div class="mine">
	
	<div>
		<van-tabs v-model="active">

		
			<van-tab title="登录">
				<div class="login">
					<p> 登录 用户 </p>
					<van-cell-group>
					  <!-- <van-field
						v-model="loginusername"
						required
						clearable
						label="用户名"
						placeholder="请输入用户名/邮箱"
					  /> -->
					
					  <van-field 
						center placeholder="请输入手机号或着用户名" 
						left-icon="img/login-user.png" 
						v-model="loginusername"
						clearable
					  />
					  <van-field
						center clearable 
						v-model="loginpassword"
						type="password"
						left-icon="img/login-pwd.png" 
						placeholder="请输入密码" 
					  />
					
					 <!-- <van-field
						v-model="loginpassword"
						type="password"
						label="密码"
						placeholder="请输入密码"
						required
					  /> -->
					</van-cell-group>
					<div style="margin: 16px;" @click="login">
					    <van-button round block type="info" native-type="submit">
					      登录
					    </van-button>
					  </div>
					<!-- <van-button type="primary" @click="login">登录</van-button> -->
				</div>
			</van-tab>
			<van-tab title="注册">
				<div class="regist">
					<p> 注册 用户 </p>
					
					<van-cell-group>
					  <!-- <van-field
						v-model="username"
						required
						clearable
						label="用户名"
						placeholder="请输入用户名"
					  /> -->
					  <van-field
						center placeholder="请输入手机号或着用户名" 
						left-icon="img/login-user.png" 
						v-model="username"
						clearable
					  />
					 
					  <!-- <van-field
						v-model="password"
						type="password"
						label="密码"
						placeholder="请输入密码"
						required
					  /> -->
					  <van-field
						center 
						clearable 
						v-model="password"
						type="password"
						left-icon="img/login-pwd.png" 
						placeholder="请输入密码" 
					  />
					  <!-- <van-field
						v-model="password2"
						type="password"
						label="重复密码"
						placeholder="请再次输入密码"
						required
					  /> -->
					  <van-field
						center 
						clearable 
						v-model="password2"
						type="password"
						left-icon="img/login-pwd.png" 
						placeholder="重复密码" 
					  />
					  <van-field
						v-model="email"
						type="email"
						left-icon="envelop-o"
						placeholder="请输入邮箱"
					  />
					  <van-field
						v-model="telephone"
						left-icon="phone-circle-o"
						placeholder="请输入手机号"
					  />
					</van-cell-group>
					<div style="margin: 16px;" @click="regist">
					    <van-button round block type="info" native-type="submit">
					      注册
					    </van-button>
					  </div>
					<!-- <van-button type="primary" @click="regist">注册</van-button> -->
				</div>
			</van-tab>
		</van-tabs>
	</div>
  </div>
</template>

<script>
	// 在当前页面引入cookie
	// import Cookie from 'js-cookie'
	
	export default {
		data(){
			return{
				username:"py191101",
				password:"123456789",
				password2:"123456789",
				email:"496575233@qq.com",
				loginusername:"",
				loginpassword:"",
				telephone:"",
				userinfo:[],
				active:0
				
			}
		},
		created() {
			// this.initUser();
		},
		
		
		methods:{
			// initUser(){
			// 	this.$http({
			// 		url:`http://www.520mg.com/member/ajax_login.php`,
			// 		method:"get",
			// 		// 强制上传cookie信息
			// 		withCredentials:true
			// 		
			// 	}).then(res=>{
			// 		console.log(res.data);
			// 		this.userinfo = res.data
			// 	})
			// },
			loginout(){
				// this.$http({
				// 	url:`http://www.520mg.com/member/index_login.php?dopost=exit`,
				// 	method:'post',
				// 	withCredentials:true
				// }).then(res=>{
				// 	if(res.data.status==1){
				// 		this.$toast("退出成功");
				// 		this.userinfo=null;
				// 		Cookie.remove("islog")
				// 	}
				// 	else{
				// 		this.$toast("退出失败");
				// 	}
				// })
			},
			login(){
				
				let canlogin=0
				this.$store.getters.get_user.forEach((obj,index)=>{
					if(obj.username==this.loginusername&obj.password==this.loginpassword){
						// console.log("11")
						 canlogin=true
					}
					else{
						 canlogin=false
					}
					
				})
				
				if(this.loginusername.length<=0||this.loginpassword<=0){
					this.$toast("输入不能为空")
				}
				else{
					
					if(canlogin){
						this.$store.commit("nowUser",this.loginusername)
						this.$toast("登录成功")
						this.$router.push("/mine")
						localStorage.setItem("islogin",false)
					}
					else{
						this.$toast("用户名或密码错误")
					}
					
					// this.userinfo.forEach((obj,index)=>{
					// 	// console.log(obj)
					// 	let user={
					// 			username:this.username,
					// 			password:this.password,
					// 			// email:this.email
					// 			}
					// 	if(user==obj){
					// 		// console.log(obj,typeof(obj))
					// 		// console.log(user,typeof(user))
					// 		console.log("++")
					// 		this.$toast("用户名或密码错误")
					// 	}
					// 	else{
					// 		console.log("登陆成功")
					// 		}
					// 	
					// 	
					// })
				}
				// if(this.loginusername.length<=0||this.loginpassword.length<=0){
				// 	this.$toast("必填项目不能为空");
				// }
				// else{
				// 	this.$http({
				// 		url:`http://www.520mg.com/member/index_login.php?fmdo=login&dopost=login&userid=${this.loginusername}&pwd=${this.loginpassword}`,
				// 		method:"post",
				// 		withCredentials:true
				// 		
				// 	}).then(res=>{
				// 		console.log(res);
				// 		if(res.data.status==1){
				// 			this.$toast("登录成功")
				// 			Cookie.set("islog",true,{ expires: 7 })
				// 			this.initUser();
				// 		}
				// 		else{
				// 			this.$toast(res.data.msg)
				// 		}
				// 	})
				// }
				
			},
			regist(){
				if(this.email.length<=0||this.username<=0||this.password.length<=0||this.password2.length<=0){
					this.$toast("必填项不可为空");
				}
				else if(this.password!=this.password2){
					this.$toast("密码输入不一致")
				}
				else{
					
					this.$toast("注册成功,添加客户对象数据跳转登录界面")
					// let initinfo=
					// 	{
					// 		username:this.username,
					// 		password:this.password,
					// 		email:this.email
					// 	}
					this.$store.commit("addUser",{
							username:this.username,
							password:this.password,
							email:this.email
						})
					
						
				// 添加用户数据对象
					// this.userinfo.push(inntinfo)
					// console.log(userinfo)
					
				}
				// if(this.email.length<=0||this.username.length<=0||this.password.length<=0||this.password2.length<=0){
				// 	this.$toast("必填项目不能为空");
				// }
				// else if(this.password!=this.password2)
				// {
				// 	this.$toast("密码必须一致");
				// }
				// else 
				// {
				// 	this.$toast("注册成功")
				// 	this.$http({
				// 		url:`http://www.520mg.com/member/reg_new2.php`,
				// 		 将post参数以get的形式携带
				// 		url:`http://www.520mg.com/member/reg_new2.php?userid=${this.username}&userpwd=${this.password}&email=${this.email}`,
				// 		method:"post",
				// 		data:{
				// 			"userid":this.username,
				// 			"userpwd":this.password,
				// 			"email":this.email
				// 		}
				// 	}).then(res=>{
				// 		if(res.data.status==1){
				// 			this.$toast("注册成功")
				// 		}
				// 		else{
				// 			this.$toast(res.data.msg)
				// 		}
				// 	}).catch(err=>{
				// 		console.log("请求出错",err);
				// 	})
				// 	
				// }
			}
		}
	}
	
</script>
<!-- 
跨域： 从一个网站请求另一个网站资源   域名 端口都必须一致
 服务端： 
 客户端：get  jsonp
		post 不支持jsonp   
 
 

localStory 本地存储 没有有效期 永久存储 localStory.setItem(key,value) localStory.get(key) localStory.removeItem(key)

存储cookit  可以设置有效期  每次请求服务器 都会携带cookie信息


 -->
