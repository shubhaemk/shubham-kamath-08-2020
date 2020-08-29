<template>
  <transition name="nav-slide">
    <nav class="nav-container" :class="{'h-screen' : isMenuOpen}" v-if="SCROLL_DIRECTION === 'UP'">
      <div class="nav-container-header 4k:nav-container-header">
        <div class="nav-item">
          <span class="angle-bracket origin-center" v-html="'<'" />
          <span
            class="title-text md:title-text lg:title-text xl:title-text 4k:title-text"
          >{{ titleText }}</span>
          <span class="front-slash" v-html="'/'" />
          <span class="angle-bracket" v-html="'>'" />
        </div>
        <div class="nav-item" @click="toggleMenu">
          <span class="angle-bracket" v-html="'<'" />
          <span
            class="title-text md:title-text lg:title-text xl:title-text 4k:title-text"
          >{{menuText}}</span>
          <span class="front-slash" v-html="'/'" />
          <span class="angle-bracket" v-html="'>'" />
        </div>
      </div>
      <div class="menu-container md:menu-container" v-if="isMenuOpen">
        <div class="menu-container-1-2">
          <transition name="project-cover-animation">
            <div
              v-if="isMenuOpenDelayed"
              class="project-container md:project-container absolute top-0 z-negative-10 bg-black"
            />
          </transition>
          <transition name="project-animation">
            <div v-if="isMenuOpenDelayed" class="project-container md:project-container">
              <p class="text-white text-6xl">Projects</p>
            </div>
          </transition>
        </div>
        <div class="menu-container-1-2">
          <div class="menu-container-1-2-extended md:menu-container-1-2-extended">
            <div class="menu-container-1-8-extended">
              <div class="menu-container-1-16">
                <transition name="blog-cover-animation">
                  <div
                    v-if="isMenuOpenDelayed"
                    class="blog-container absolute top-0 z-negative-10 bg-black"
                  />
                </transition>
                <transition name="blog-animation">
                  <div v-if="isMenuOpenDelayed" class="blog-container">
                    <p class="text-white text-6xl">Blogs</p>
                  </div>
                </transition>
              </div>

              <div class="menu-container-1-16-extended">
                <div class="menu-container-1-32">
                  <transition name="home-cover-animation">
                    <div
                      v-if="isMenuOpenDelayed"
                      class="home-container absolute top-0 z-negative-10 bg-black"
                    />
                  </transition>
                  <transition name="home-animation">
                    <div v-if="isMenuOpenDelayed" class="home-container">
                      <p class="text-white text-6xl">Home</p>
                    </div>
                  </transition>
                </div>
                <div class="menu-container-1-32">
                  <transition name="contact-cover-animation">
                    <div
                      v-if="isMenuOpenDelayed"
                      class="contact-container absolute top-0 z-negative-10 bg-black"
                    />
                  </transition>
                  <transition name="contact-animation">
                    <div v-if="isMenuOpenDelayed" class="contact-container">
                      <p class="text-white text-6xl">Contact</p>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            <div class="menu-container-1-8">
              <transition name="about-cover-animation">
                <div
                  v-if="isMenuOpenDelayed"
                  class="about-container absolute top-0 z-negative-10 bg-black"
                />
              </transition>
              <transition name="about-animation">
                <div v-if="isMenuOpenDelayed" class="about-container">
                  <p class="text-white text-6xl">About</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import { mapState } from "vuex";

const TITLE_TEXT = "SK";

export default {
  name: "HeaderComponent",

  methods: {
    toggleMenu: function () {
      if (!this.isClickable) return;

      this.isClickable = false;
      const isMenuOpen = this.isMenuOpen;
      if (!isMenuOpen) {
        this.$emit("toggle-menu");
        setTimeout(() => {
          this.isClickable = true;
          this.isMenuOpenDelayed = !isMenuOpen;
        }, 50);
      } else {
        this.isMenuOpenDelayed = !isMenuOpen;
        setTimeout(() => {
          this.isClickable = true;
          this.$emit("toggle-menu");
        }, 2500);
      }
    },
  },
  computed: {
    ...mapState({
      SCROLL_DIRECTION: (state) => state.appBehavior.SCROLL_DIRECTION,
      SCROLL_POSITION: (state) => state.appBehavior.SCROLL_POSITION,
    }),
  },

  data: function () {
    return {
      isClickable: true,
      isMenuOpenDelayed: false,
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

<style scoped>
@import "./HeaderComponent.css";
</style>
