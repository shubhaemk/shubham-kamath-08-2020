import Vue from "vue";
import VScrollLock from "v-scroll-lock";

import App from "./App.vue";
import store from "./store";
import "./styles/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VScrollLock);

const VueApp = new Vue({
  render: (createApp) => createApp(App),
  store,
});

VueApp.$mount("#portfolio");

//data is of type observer
//console.log(vm.$data.item);

//v-bind is used to set elements attributes

//slots in vue is nothing but props.children in react

//<Test1 :firstName="firstName" /> Dynamic props, firstName changes with given variable
//<Test1 firstName="firstName" /> static props, firstName value is firstName in string, good for string on button
//Even though`42` is static, we need v - bind to tell Vue that-- >
//< !--this is a JavaScript expression rather than a string.       -- >
//<blog-post v-bind: likes="42"></blog-post>

/** Lifecycles
 data: function() {
    return { item: "Hello" };
  },
  beforeCreated: function() {
    //console.log("Before created");
  },
  created: function() {
    //console.log(this.item);
  },
  beforeMount: function() {
    //console.log("Before Mount");
  },
  mounted: function() {
    //console.log("Mounted");
  },
  beforeUpdate: function() {
    //console.log("Called before update");
  },
  updated: function() {
    //console.group("Updated");
  },
  destroyed: function () {
    console.log("I AM DESTROYED");
  },
 */
