import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false

Vue.use(ElementUI)

//全局导航守卫
router.beforeEach((to,from,next)=>{
  // console.log(to.meta.needLogin)
  if(to.meta.needLogin){
    // 需要登录
    // 1) 已登录过了  2）没有登录
    // next("/login")
    if(store.state.userInfo.userName){
      // 已经登录了
      next();
    }else{
      // 没有登录
      next("/login")
    }
  }else{
    // 不需要登录
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
