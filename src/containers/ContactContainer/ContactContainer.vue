<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-full w-full relative">
      <span class="absolute left-0 bottom-0 h-full w-2 bg-contact" />
      <div class="absolute left-0 top-15per flex flex-col w-full">
        <span
          class="px-20 py-10 w-fit-content bg-contact text-6xl text-white font-medium"
        >
          Contact
        </span>
        <div class="px-20 flex flex-col">
          <span class="text-4-5xl py-10 text-gray-300 font-hairline">
            Hi, I am Shubham Kamath born and brought up in Pune, India and
            currently working in Bengaluru, India. I have a Masters Degree in
            Computer Science and specializes in Frontend Technologies.
          </span>
          <span class="text-4-5xl py-5 text-gray-300 font-hairline">
            Besides developing Web Apps, I'm a hobbiest photographer, clicking
            subjects I find intriguing,
          </span>
          <span class="text-4-5xl py-5 text-gray-300 font-hairline">
            I leverage my visual skills to create better looking softwares.
          </span>
          <span class="text-4-5xl py-5 text-gray-300 font-hairline">
            Connect with me if you have any opportunity or just want to say Hi
            &darr;
          </span>
        </div>
      </div>
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
      default: function() {},
      validator: function(value) {
        return !!value;
      },
    },
  },
};
</script>

<style></style>
