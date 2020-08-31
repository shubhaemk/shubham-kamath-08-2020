<template>
  <div class="h-screen min-h-50 relative">
    <div class="h-70per absolute left-0 bottom-0">
      <div class="w-1 h-full bg-home" />
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
