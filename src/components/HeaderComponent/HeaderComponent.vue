<template>
  <transition name="nav-slide">
    <nav class="nav-container" v-if="SCROLL_DIRECTION === 'UP'">
      <MaxWidthComponent class="nav-container-child">
        <div class="nav-item">
          <span class="angle-bracket" v-html="'<'" />
          <span
            class="title-text md:title-text lg:title-text xl:title-text 4k:title-text"
            >{{ titleText }}</span
          >
          <span class="front-slash" v-html="'/'" />
          <span class="angle-bracket" v-html="'>'" />
        </div>
        <div class="nav-item" @click="$emit('toggle-menu')">
          <span class="angle-bracket" v-html="'<'" />
          <span
            class="title-text md:title-text lg:title-text xl:title-text 4k:title-text"
            >{{ menuText }}</span
          >
          <span class="front-slash" v-html="'/'" />
          <span class="angle-bracket" v-html="'>'" />
        </div>
      </MaxWidthComponent>
      <MaxWidthComponent class="nav-container-child" v-if="isMenuOpen">
        <div class="h-screen w-screen flex flex-col-reverse md:flex-row">
          <div class="h-full w-full bg-teal-200 md:h-full md:w-1/2" />
          <div
            class="h-full w-full bg-teal-400 flex flex-col relative md:h-full md:w-1/2"
          >
            <div class="h-auto min-h-1/2 w-full bg-red-500 flex">
              <div class="h-full w-1/2 bg-teal-400 flex flex-col relative" />
              <div class="h-full w-1/2 bg-teal-700 flex flex-col relative">
                <div class="h-auto min-h-1/2 w-full bg-red-600"></div>
                <div class="h-auto min-h-1/2 w-full bg-red-900"></div>
              </div>
            </div>
            <div class="h-auto min-h-1/2 w-full bg-red-600"></div>
          </div>
        </div>
      </MaxWidthComponent>
    </nav>
  </transition>
</template>

<script>
import MaxWidthComponent from "../MaxWidthComponent/MaxWidthComponent";
import { mapState } from "vuex";

const TITLE_TEXT = "SK";

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
  },
  data: function() {
    return {
      titleText: TITLE_TEXT,
    };
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
    menuText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
@import "./HeaderComponent.css";
</style>
