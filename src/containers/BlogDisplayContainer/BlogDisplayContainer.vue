<template>
  <div class="h-full min-h-50 relative" :screen-name="screenName">
    <span class="absolute left-0 bottom-0 h-full w-2 bg-blog" />
    <div class="px-20 flex flex-col">
      <div class="w-full h-50vh fourk:h-30vh -mt-20 flex mb-20 relative">
        <img class="h-full w-1/2" src="../../assets/Test.jpg" />
        <div class="h-full w-1/2 custom-black flex flex-col">
          <div class="flex justify-between mb-10 bg-blog px-8 py-5">
            <span class="text-4xl font-normal text-white text-left">Recoil - Introduction</span>
            <span class="text-4xl font-normal text-white text-left">00</span>
          </div>

          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Tried the new Recoil, A state management library. In the article, I have explained its terms, features and basic syntax of Recoil.
          </span>
          <div class="flex px-8 py-5 justify-end align-middle mt-auto">
            <a href="https://dev.to/shubhamk/recoil-facebook-s-own-state-management-library-26pb" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-blog mr-5 font-title">Read More</span>
              <VisitLogo class="item-logo"/>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between mb-20">
        <div class="h-full w-1/2 custom-black flex flex-col">
          <div class="flex justify-between mb-10 bg-blog px-8 py-5">
            <span class="text-4xl font-normal text-white text-left">Recoil - Asynchronous</span>
            <span class="text-4xl font-normal text-white text-left">01</span>
          </div>

          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            In this article, I have explained how Recoil can be used asynchronously with React Suspense and without it. 
          </span>
          <div class="flex px-8 py-5 justify-end align-middle mt-auto">
            <a href="https://dev.to/shubhamk/recoil-the-asynchronous-way-to-manage-state-part-1-18kk" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-blog mr-5 font-title">Read More</span>
              <VisitLogo class="item-logo"/>
            </a>
          </div>
        </div>
        <img class="h-full w-1/2" src="../../assets/Test-2.jpg" />
      </div>
      <div class="py-20 flex justify-end">
        <span class="text-4-5xl text-gray-300 font-hairline mr-5"
          >Read more on 
        </span>
        <a href="https://dev.to/shubhamk" target="_blank" class="text-4-5xl text-gray-300 font-hairline cursor-pointer">
          Dev.to &rarr;
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VisitLogo from '../../assets/visit.svg';

export default {
  name: "BlogDisplayContainer",
  components: {
   VisitLogo
  },
  data: function () {
    return {
      progressLineClass: "bg-project",
    };
  },
  computed: {
    ...mapState({
      SCREEN_NAME: (state) => state.appBehavior.SCREEN_NAME,
    }),
  },
  watch: {
    SCREEN_NAME: function (value) {
      if (value === this.screenName) {
        this.progressLineClass = "bg-blog";
      }
    },
  },
  props: {
    screenName: {
      type: String,
      required: true,
    },
    observer: {
      type: IntersectionObserver,
      required: true,
      default: function () {},
      validator: function (value) {
        return !!value;
      },
    },
  },
};
</script>

<style scoped>
.custom-black {
  background-color: #12151b;
}

.item-logo {
  fill: #848ccf;
  width: 2rem;
}

</style>
