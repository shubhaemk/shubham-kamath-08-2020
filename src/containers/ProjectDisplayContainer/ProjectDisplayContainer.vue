<template>
  <div class="h-full min-h-50 relative" :screen-name="screenName">
    <span class="absolute left-0 bottom-0 h-full w-2 bg-project" />
    <div class="px-20 flex flex-col">
      <div
        class="w-full h-50vh fourk:h-30vh fourk:h-30vh -mt-20 flex mb-20 relative"
      >
        <div class="absolute top-0 px-8 py-5 bg-project w-1/2 bg-opacity-25">
          <span class="text-white text-4xl">Web</span>
        </div>
        <img class="h-full w-1/2" src="../../assets/Test.jpg" />
        <div class="h-full w-1/2 bg-project flex flex-col py-10 px-16">
          <div class="flex justify-between mb-10">
            <span class="text-5xl font-semibold text-white text-left"
              >GitCard</span
            >
            <span class="text-5xl font-semibold text-white text-left">00</span>
          </div>

          <span class="text-2xl font-medium text-gray-400 mb-5 text-left"
            >Generate GitHub Profile Cards, and download it to share.</span
          >
        </div>
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between mb-20">
        <div class="h-full w-1/2 bg-white" />
        <img class="h-full w-1/2" src="../../assets/Test-2.jpg" />
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between mb-20">
        <img class="h-full w-1/2" src="../../assets/Test-3.jpg" />
        <div class="h-full w-1/2 bg-white" />
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between mb-20">
        <div class="h-full w-1/2 bg-white" />
        <img class="h-full w-1/2" src="../../assets/Test-4.jpg" />
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between">
        <img class="h-full w-1/2" src="../../assets/Test-5.jpg" />
        <div class="h-full w-1/2 bg-white" />
      </div>
      <div class="py-20 flex justify-end">
        <span class="text-4-5xl text-gray-300 font-hairline mr-5"
          >Check more on my
        </span>
        <span class="text-4-5xl text-gray-300 font-hairline cursor-pointer"
          >GitHub &rarr;</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ProjectDisplayContainer",
  data: function () {
    return {
      progressLineClass: "bg-home",
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
        this.progressLineClass = "bg-project";
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
</style>
