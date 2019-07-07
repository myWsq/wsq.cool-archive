import Vue from "vue";
import Router from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";

const RouterLayout = createRouterLayout(layout => {
  return import(`@/layouts/${layout}.vue`);
});

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes
    }
  ]
});
