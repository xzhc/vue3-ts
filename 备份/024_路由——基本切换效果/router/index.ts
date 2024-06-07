//创建一个路由器并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
//引入要呈现的组件
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";
import About from "@/components/About.vue";

//第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器工作模式
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

//暴露路由router
export default router;
