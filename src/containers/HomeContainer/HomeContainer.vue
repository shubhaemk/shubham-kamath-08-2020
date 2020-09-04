<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-70per absolute left-0 bottom-0">
      <div class="w-1 h-full bg-home relative">
        <div
          class="absolute top-0 left-0 ml-1 weedth flex justify-center items-center py-12 bg-home"
        >
          <p class="text-7xl text-white">Hi</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeContainer",
  mounted() {
    this.observer.observe(this.$el);
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
.weedth {
  width: 20rem;
}
</style>
