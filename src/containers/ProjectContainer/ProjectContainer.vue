<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-full w-full relative">
      <span class="absolute left-0 bottom-0 h-full w-2 bg-project" />
      <div class="absolute left-0 top-15per flex flex-col w-full">
        <span class="px-20 py-10 w-fit-content bg-project text-6xl text-white font-medium">Projects</span>
        <div class="px-20 flex flex-col">
          <span class="py-10">
            <span
              class="text-6xl text-white font-hairline"
            >I like to build Web and CLI Applications useful for humans</span>
            <span class="text-6xl text-project font-hairline">*</span>
            <span class="text-6xl text-white font-hairline">.</span>
          </span>
          <span class="py-5">
            <span
              class="text-4-5xl text-gray-300 font-hairline"
            >My Tech stack includes React, React Native, Redux, Vue, Vuex, SCSS, Tailwind CSS, Webpack and Babel.</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ProjectContainer",
  mounted() {
    this.observer.observe(this.$el);
  },
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
.local {
  transition: background-color 1s 0.1s;
}

.weedth {
  width: 30rem;
}

.top-30 {
  top: 10%;
}
</style>
