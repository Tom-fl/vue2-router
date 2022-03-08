/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-04 16:49:05
 * @LastEditTime: 2022-03-07 11:48:46
 * @Email: str-liang@outlook.com
 * @FilePath: \cscscs\src\router\index.js
 * @Environment: Win 10
 * @Description:
 */
import Vue from "vue"
import VueRouter from "vue-router"
import data from "@/data/data2"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/cs",
        name: "cs",
        component: resolve => {
          require(["@/views/modules/cs.vue"], resolve)
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: resolve => {
      require(["../views/About.vue"], resolve)
    },
  },
]

export const asyncRotes = [
  {
    path: "/",
    name: "page1",
    component: Home,
    children: [
      {
        path: "page1",
        name: "page1",
        component: resolve => {
          require(["../views/modules/page1.vue"], resolve)
        },
      },
    ],
  },
  {
    path: "/page2",
    name: "page2",
    component: resolve => {
      require(["../views/modules/page2.vue"], resolve)
    },
  },
  {
    path: "/page3",
    name: "page3",
    component: resolve => {
      require(["../views/modules/page3.vue"], resolve)
    },
  },
]

const router = new VueRouter({
  routes,
})

function flterRoutes(arrVal) {
  return arrVal.map(item => {
    let component = ""
    if (item.pid == 0) {
      component = Home
    } else {
      component = resolve => {
        require([`@/views/modules/${item.url}.vue`], resolve)
      }
    }
    let routeObj = {
      path: item.url,
      name: item.name,
      meta: {
        title: item.name,
      },
      component,
    }
    if (item.children.length > 0) {
      routeObj.children = flterRoutes(item.children)
    }
    return routeObj
  })
}
let resData = flterRoutes(data)
console.log(resData)

router.addRoutes(resData)

// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
