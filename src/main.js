// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import  VueResource  from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../theme/index.css'
import utils from './utils'

Vue.use(VueResource) 
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$utils=utils
Vue.http.interceptors.push((request, next) => {
	let token = localStorage.getItem("ticket");
	if (token) {
		request.headers.set('Access-Token', token);
	}
	next((res)=>{
		if (res['body']['code']=="4050") {
			localStorage.clear()
//			this.$router.push({path: '/login'})
		}
	})
});
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (localStorage.getItem("ticket")) { 
            next();
        }
        else {
        	alert("登录超时，请重新登录。")
            next({
                path: '/loginPage',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
