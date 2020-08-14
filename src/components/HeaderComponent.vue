<template>
  <transition name="nav-slide">
    <nav
      class="nav-container lg:nav-container md:nav-container sm:nav-container"
      v-if="SCROLL_DIRECTION === 'UP'"
    >
      <div
        @mouseenter="updateTitleDelay"
        @mouseleave="title='SK'"
        :class="[isTitle ? 'title-container' : 'title-container title-container-hover' ]"
      >
        <span class="angle-bracket" v-html="'<'" />
        <span class="title-text">{{title}}</span>
        <span class="front-slash" v-html="'/'" />
        <span class="angle-bracket" v-html="'>'" />
      </div>
    </nav>
  </transition>
</template>


<script>
import { mapState } from "vuex";

const TITLE_TEXT = "SK";
const ALT_TTILE_TEXT = "Shubham Kamath";

export default {
  name: "HeaderComponent",
  computed: {
    ...mapState({
      SCROLL_DIRECTION: (state) => state.appBehavior.SCROLL_DIRECTION,
      SCROLL_POSITION: (state) => state.appBehavior.SCROLL_POSITION,
    }),
    isTitle: function () {
      return this.title === TITLE_TEXT;
    },
  },
  data: function () {
    return {
      title: TITLE_TEXT,
    };
  },
  methods: {
    updateTitleDelay: function () {
      this.title = ALT_TTILE_TEXT;
      setTimeout(() => {
        this.title = TITLE_TEXT;
      }, 1000);
    },
  },
};
</script>

<style>
@import "./HeaderComponent.css";
</style>
