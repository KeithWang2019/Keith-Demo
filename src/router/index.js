// import Router from "./impl";
import { Router } from "@keithwang/keith-core";

const Index = () => import(/* webpackChunkName:"Index" */ "src/view/Index");
const Index2 = () => import(/* webpackChunkName:"Index2" */ "src/view/Index2");
const Index3 = () => import(/* webpackChunkName:"Index3" */ "src/view/Index3");

const router = new Router({
  routes: [
    {
      path: "#/Index",
      name: "Index",
      component: Index,
      containerId: "app",
    },
    {
      path: "#/Index2",
      name: "Index2",
      component: Index2,
      containerId: "app",
      default: true,
    },
    {
      path: "#/Index3",
      name: "Index3",
      component: Index3,
      containerId: "app",
    },
  ],
});

export default router;
