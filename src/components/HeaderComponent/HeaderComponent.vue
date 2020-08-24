<template>
  <transition name="nav-slide">
    <nav class="nav-container" :class="{'h-screen' : isMenuOpen}" v-if="SCROLL_DIRECTION === 'UP'">
      <MaxWidthComponent class="nav-container-header">
        <div class="nav-item">
          <span class="angle-bracket" v-html="'<'" />
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
      </MaxWidthComponent>
      <div class="nav-container-menu w-screen flex flex-col-reverse md:flex-row" v-if="isMenuOpen">
        <div class="h-full w-full md:h-full md:w-1/2">
          <transition name="fade4">
            <div
              v-if="isMenuOpenDelayed"
              class="h-full w-full project-bg -translate-x-full flex items-center justify-center"
            >
              <p class="text-white text-6xl">Projects</p>
            </div>
          </transition>
        </div>
        <div class="h-full w-full md:h-full md:w-1/2">
          <div class="h-full w-full flex flex-col relative md:h-full">
            <div class="h-1/2 w-full flex">
              <div class="h-full w-1/2 flex flex-col">
                <transition name="fade2">
                  <div
                    v-if="isMenuOpenDelayed"
                    class="h-full w-full blog-bg -translate-x-full flex items-center justify-center"
                  >
                    <p class="text-white text-6xl">Blogs</p>
                  </div>
                </transition>
              </div>

              <div class="h-full w-1/2 flex flex-col relative">
                <div class="h-auto min-h-1/2 w-full">
                  <transition name="fade">
                    <div
                      v-if="isMenuOpenDelayed"
                      class="h-full w-full -translate-x-full home-bg flex items-center justify-center"
                    >
                      <p class="text-white text-6xl">Home</p>
                    </div>
                  </transition>
                </div>
                <div class="h-auto min-h-1/2 w-full">
                  <transition name="fade1">
                    <div
                      v-if="isMenuOpenDelayed"
                      class="h-full w-full translate-y-full contact-bg flex items-center justify-center"
                    >
                      <p class="text-white text-6xl">Contact</p>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            <div class="h-1/2 w-full">
              <transition name="fade3">
                <div
                  v-if="isMenuOpenDelayed"
                  class="h-full w-full about-bg -translate-y-full flex items-center justify-center"
                >
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
import MaxWidthComponent from "../MaxWidthComponent/MaxWidthComponent";
import { mapState } from "vuex";

const TITLE_TEXT = "SK";

export default {
  name: "HeaderComponent",
  components: {
    MaxWidthComponent,
  },
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
        }, 1500);
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

<style>
@import "./HeaderComponent.css";

.fade-enter-active {
  transition: all 0.3s 0.2s;
}

.fade-leave-active {
  transition: all 0.3s 1.3s;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade1-enter-active {
  transition: all 0.3s 0.5s;
}

.fade1-leave-active {
  transition: all 0.3s 1s;
}

.fade1-enter,
.fade1-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: all 0.3s 0.7s;
}
.fade2-enter,
.fade2-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade3-enter-active {
  transition: all 0.3s 1s;
}

.fade3-leave-active {
  transition: all 0.3s 0.5s;
}

.fade3-enter,
.fade3-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.fade4-enter-active {
  transition: all 0.3s 1.3s;
}

.fade4-leave-active {
  transition: all 0.3s 0.2s;
}

.fade4-enter,
.fade4-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.project-bg {
  background-color: #08d9d6;
}

.about-bg {
  background-color: #252a34;
}

.blog-bg {
  background-color: #ff2e63;
}

.contact-bg {
  background-color: #eaeaea;
}

.home-bg {
  background-color: #08d9d6;
}
</style>
