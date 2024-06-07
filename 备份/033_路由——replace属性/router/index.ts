//创建一个路由器并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
//引入要呈现的组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

//第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器工作模式
  routes: [
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "xiangqing",
          path: "detail",
          component: Detail,
          //第一种写法，将路由收到的所有params参数作为props传到路由组件
          //props: true,

          //第二种写法：函数写法可以自己决定把什么作为props传给路由组件
          props(route) {
            return route.query;
          },

          //第三种写法：对象写法以自己决定把什么作为props传给路由组件
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300,
          // },
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});

//暴露路由router
export default router;
