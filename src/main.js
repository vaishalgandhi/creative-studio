import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Meta from "vue-meta";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@/plugins/vee-validate";

import routes from "./routes";
import modules from "./store";

Vue.use(VueRouter);
Vue.use(Meta);
Vue.use(Vuex);
Vue.use(Vuetify);

const store = new Vuex.Store(modules);

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes
});

// Below code will act as middleware
// Verify if user alredy logged in or not
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const isLoggedIn = store.getters.isAuthenticated;

  /**
   * If authentication is required and user is not logged in
   * Redirect to login
   */
  if (requiresAuth && !isLoggedIn) {
    next({ name: "auth.login" });
    return;
  }

  /**
   * If route doesn't require authentication and user is logged in
   * Redirect to profile page
   */
  if (requiresAuth !== true && isLoggedIn) {
    next({ name: "user.profile" });
    return;
  }

  next();
});

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#ff6c62"
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
};

new Vue({
  router,
  store,
  vuetify: new Vuetify(opts),
  render: (h) => h(App)
}).$mount("#app");
