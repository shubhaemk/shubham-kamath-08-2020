<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-full w-full relative">
      <span class="absolute left-0 bottom-0 h-70per w-2 bg-home" />
      <div class="absolute left-0 top-30per flex flex-col w-full">
        <span class="px-20 py-10 w-fit-content bg-home text-6xl text-white font-medium">Hi</span>
        <span class="px-20 py-10">
          <span class="text-6xl text-white mr-5 font-hairline">I'm</span>
          <span class="text-6xl text-white mr-5 text-home font-medium">Shubham Kamath</span>
          <span class="text-6xl text-white font-hairline">,</span>
        </span>
        <span class="px-20 py-5">
          <span class="text-4-5xl text-gray-300 mr-5 font-hairline">A</span>
          <span class="text-4-5xl text-gray-300 mr-5 font-hairline">Software Engineer</span>
          <span class="text-4-5xl text-gray-300 mr-5 font-hairline">and a hobbyist</span>
          <span class="text-4-5xl text-gray-300 mr-5 font-hairline">Photographer</span>
          <span class="text-4-5xl text-gray-300 mr-5 font-hairline">from Pune.</span>
        </span>
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
