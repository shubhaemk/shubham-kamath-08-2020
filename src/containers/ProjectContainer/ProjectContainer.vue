<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-full flex justify-center absolute left-0">
      <div class="w-1 h-full local" :class="progressLineClass" />
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

<style>
.local {
  transition: background-color 0.5s 0.4s;
}
</style>
