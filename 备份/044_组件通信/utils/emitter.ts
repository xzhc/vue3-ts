//引入mitt
import mitt from "mitt";
//调用mitt得到emitter,emitter能：绑定事件，触发事件
const emiter = mitt();
// //绑定事件
// emiter.on("test1", () => {
//   console.log("test1被调用了");
// });

// emiter.on("test2", () => {
//   console.log("test2被调用了");
// });
// //触发事件
// setInterval(() => {
//   emiter.emit("test1");
//   emiter.emit("test2");
// }, 1000);

// setTimeout(() => {
//   // emiter.off("test1");
//   // emiter.off("test2");
//   emiter.all.clear();
// }, 3000);

//暴露emitter
export default emiter;
