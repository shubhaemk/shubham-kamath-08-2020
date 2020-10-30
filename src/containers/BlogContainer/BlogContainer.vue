<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-full w-full relative">
      <span class="absolute left-0 bottom-0 h-full w-2 bg-blog" />
      <div class="absolute left-0 top-15per flex flex-col w-full">
        <span
          class="px-20 py-10 w-fit-content bg-blog text-6xl text-white font-medium"
          >Blogs</span
        >
        <div class="px-20 flex flex-col">
          <span class="py-10">
            <span class="text-6xl text-white font-hairline">
              I write about things I want to discover more about.
            </span>
          </span>
          <span class="py-5">
            <span class="text-4-5xl text-gray-300 font-hairline">
              Dev.to and Twitter is where I write. <span class="text-4-5xl text-blog font-hairline">¯\_(ツ)_/¯</span>
            </span>
          </span>
          <span class="py-5">
            <span class="text-4-5xl text-gray-300 font-hairline">
              Read my Blogs Below.
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogContainer",
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

<style></style>
