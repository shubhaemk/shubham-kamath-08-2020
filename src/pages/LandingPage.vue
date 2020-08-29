<template>
  <div class="flex flex-initial justify-center items-center flex-col w-screen h-auto bg-dark">
    <HeaderComponent :isMenuOpen="isMenuOpen" :menuText="menuText" @toggle-menu="toggleMenu" />
    <div class="w-full max-w-almostFull md:max-w-3/4 4k:max-w-1/2" v-scroll-lock="isMenuOpen">
      <HomeContainer>
        <h1 style="padding-top: 200px; font-size: 20px; color: white;">{{ SCROLL_POSITION }}</h1>
      </HomeContainer>
      <HomeContainer>
        <h1 style="padding-top: 200px; font-size: 20px; color: white;">{{ SCROLL_POSITION }}</h1>
      </HomeContainer>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import HomeContainer from "../containers/HomeContainer";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

const MENU_TEXT = "MENU";
const OTHER_MENU_TEXT = "BACK";

export default {
  name: "LandingPage",
  components: {
    HomeContainer,
    HeaderComponent,
  },
  created: function () {
    window.addEventListener(
      "scroll",
      () => {
        const scrolledTo =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrolledTo > 60 && scrolledTo > this.SCROLL_POSITION) {
          this.setScrollDirection("DOWN");
        } else {
          this.setScrollDirection("UP");
        }

        this.setScrollPosition(scrolledTo <= 0 ? 0 : scrolledTo);
      },
      false
    );
  },

  computed: {
    ...mapState({
      SCROLL_POSITION: (state) => state.appBehavior.SCROLL_POSITION,
    }),
    isMenuOpen: function () {
      return this.menuText === OTHER_MENU_TEXT;
    },
  },
  data: function () {
    return {
      menuText: MENU_TEXT,
    };
  },
  methods: {
    setScrollDirection: function (direction) {
      this.$store.dispatch("appBehavior/setScrollDirection", direction);
    },
    setScrollPosition: function (position) {
      this.$store.dispatch("appBehavior/setScrollPosition", position);
    },
    toggleMenu: function () {
      this.menuText = this.menuText === MENU_TEXT ? OTHER_MENU_TEXT : MENU_TEXT;
    },
  },
};
</script>

<style>
</style>
