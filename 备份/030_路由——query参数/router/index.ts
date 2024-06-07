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
