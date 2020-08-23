<template>
  <transition name="nav-slide">
    <nav class="nav-container" v-if="SCROLL_DIRECTION === 'UP'">
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
      <div class="nav-container-menu" v-if="isMenuOpen">
        <div class="h-screen w-screen flex flex-col-reverse md:flex-row overflow-hidden">
          <div class="h-full w-full md:h-full md:w-1/2">
            <transition name="fade4">
              <div v-if="isMenuOpenDelayed" class="h-full w-full bg-teal-500 -translate-x-full">
                <p class="text-white text-6xl">FADE 4</p>
              </div>
            </transition>
          </div>

          <div class="h-full w-full flex flex-col relative md:h-full md:w-1/2">
            <div class="h-auto min-h-1/2 w-full flex">
              <div class="h-full w-1/2 flex flex-col">
                <transition name="fade2">
                  <div v-if="isMenuOpenDelayed" class="h-full w-full bg-teal-300 -translate-x-full">
                    <p class="text-white text-6xl">FADE 2</p>
                  </div>
                </transition>
              </div>

              <div class="h-full w-1/2 flex flex-col relative">
                <div class="h-auto min-h-1/2 w-full">
                  <transition name="fade">
                    <div
                      v-if="isMenuOpenDelayed"
                      class="h-full w-full -translate-x-full bg-teal-100"
                    >
                      <p class="text-white text-6xl">FADE 0</p>
                    </div>
                  </transition>
                </div>
                <div class="h-auto min-h-1/2 w-full">
                  <transition name="fade1">
                    <div
                      v-if="isMenuOpenDelayed"
                      class="h-full w-full bg-teal-200 translate-y-full"
                    >
                      <p class="text-white text-6xl">FADE 1</p>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            <div class="h-auto min-h-1/2 w-full">
              <transition name="fade3">
                <div v-if="isMenuOpenDelayed" class="h-full w-full bg-teal-400 -translate-y-full">
                  <p class="text-white text-6xl">FADE 3</p>
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
</style>
