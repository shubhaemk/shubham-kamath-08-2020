import Vue from "vue";
import Vuex from "vuex";

import AppBehavior from "./modules/app-behavior";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    appBehavior: AppBehavior,
  },
  strict: debug,
});
