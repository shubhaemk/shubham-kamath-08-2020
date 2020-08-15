<template>
  <transition name="nav-slide">
    <nav
      class="nav-container lg:nav-container md:nav-container sm:nav-container"
      v-if="SCROLL_DIRECTION === 'UP'"
    >
      <MaxWidthComponent class="nav-container-child">
        <div class="nav-item nav-item:hover">
          <span class="angle-bracket" v-html="'<'" />
          <span class="title-text">{{titleText}}</span>
          <span class="front-slash" v-html="'/'" />
          <span class="angle-bracket" v-html="'>'" />
        </div>
        <div class="nav-item nav-item:hover" @click="toggleMenu">
          <span class="angle-bracket" v-html="'<'" />
          <span class="title-text">{{menuText}}</span>
          <span class="front-slash" v-html="'/'" />
          <span class="angle-bracket" v-html="'>'" />
        </div>
      </MaxWidthComponent>
    </nav>
  </transition>
</template>


<script>
import MaxWidthComponent from "../MaxWidthComponent/MaxWidthComponent";
import { mapState } from "vuex";

const TITLE_TEXT = "SK";
const MENU_TEXT = "MENU";
const OTHER_MENU_TEXT = "CLOSE";

export default {
  name: "HeaderComponent",
  components: {
    MaxWidthComponent,
  },
  computed: {
    ...mapState({
      SCROLL_DIRECTION: (state) => state.appBehavior.SCROLL_DIRECTION,
      SCROLL_POSITION: (state) => state.appBehavior.SCROLL_POSITION,
    }),
    isMenuOpen: function () {
      return this.menuText === OTHER_MENU_TEXT;
    },
  },
  data: function () {
    return {
      titleText: TITLE_TEXT,
      menuText: MENU_TEXT,
    };
  },
  methods: {
    toggleMenu: function () {
      this.menuText = this.menuText === MENU_TEXT ? OTHER_MENU_TEXT : MENU_TEXT;
    },
  },
};
</script>

<style>
@import "./HeaderComponent.css";
</style>
