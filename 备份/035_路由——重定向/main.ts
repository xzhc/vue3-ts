/**
 * 导入 createApp 函数
 * 从 "vue" 模块中导入 createApp 函数，该函数用于创建一个新的 Vue 应用实例。
 *
 * @returns 无返回值，仅为导入操作。
 */
import { createApp } from "vue";
// 导入 App 组件
import App from "./App.vue";
//引入路由器
import router from "./router";

// 创建Vue 应用实例
const app = createApp(App);
//使用路由器
app.use(router);
//挂载 Vue 应用实例
app.mount("#app");
