<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-full w-full bg-project"></div>
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
