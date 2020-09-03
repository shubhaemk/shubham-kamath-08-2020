<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-full flex justify-center absolute left-0">
      <div class="w-1 h-full bg-contact" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactContainer",
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
