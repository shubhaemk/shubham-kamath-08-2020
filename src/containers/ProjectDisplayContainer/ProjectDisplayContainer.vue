<template>
  <div class="h-full min-h-50 relative" :screen-name="screenName">
    <span class="absolute left-0 bottom-0 h-full w-2 bg-project" />
    <div class="px-20 flex flex-col">
      <div class="w-full h-50vh fourk:h-30vh fourk:h-30vh -mt-20 flex mb-20">
        <img class="h-full w-1/2" src="../../assets/Test.jpg" />
        <div class="h-full w-1/2 bg-white" />
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
      <div class="w-full h-50vh fourk:h-30vh flex justify-between mb-20">
        <img class="h-full w-1/2" src="../../assets/Test-5.jpg" />
        <div class="h-full w-1/2 bg-white" />
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
