import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Login from "../pages/Login"
import Register from "../pages/Register"
import Release from "../pages/Release"
import GoodsList from "../pages/GoodsList"
import GoodsDetail from "../pages/GoodsDetail"
import Personal from "../pages/Personal"
import Idel from "../pages/Idel/Idel"
import Published from "../pages/Idel/Published"
import Sold from "../pages/Idel/Sold"
import Removed from "../pages/Idel/Removed"
import Order from "../pages/Order/Order"
import Find_pwd from "../pages/Find_pwd"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      mata: {
        keepAlive: true
      }
    }, {
      path: "/login",
      name: "Login",
      component: Login,
      mata: {
        keepAlive: false
      }
    }, {
      path: "/register",
      name: "Register",
      component: Register,
      mata: {
        keepAlive: false
      }
    }, {
      path: "/release",
      name: "Release",
      component: Release,
      mata: {
        keepAlive: false
      }
    }, {
      path: "/goodslist/:type",
      name: "GoodsList",
      component: GoodsList,
      mata: {
        keepAlive: true
      }
    }, {
      path: "/goodsdetail/:gId",
      name: "GoodsDetail",
      component: GoodsDetail,
      mata: {
        keepAlive: false
      }
    }, {
      path: "/personal",
      name: "Personal",
      component: Personal,

      meta: {
        keepAlive: true
      },
      children: [
        {
          path: "/personal/",
          component: Idel,
          children: [
            {path: "/personal/", component: Published},
            {path: "/personal/sold", component: Sold},
            {path: "/personal/removed", component: Removed},
          ]
        },
        {
          path: '/personal/order',
          component: Order
        }, {
          path: "/personal/find_pwd",
          component: Find_pwd
        }
      ]

    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/release") {
    let vue = this.a.app;
    if (vue.$store && !vue.$store.state.isLogin) {
      vue.$message({
        showClose: true,
        message: '您未登录, 请先登录',
        type: 'warning',
        duration: 1500
      });
    } else {
      next()
    }
  } else {
    next()
  }
})



export default router;
