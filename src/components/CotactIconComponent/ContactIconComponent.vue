<template>
  <div class="flex justify-between cursor-pointer w-full py-5">
    <div class="w-20per flex justify-center items-center">
      <slot></slot>
    </div>
    <a :href="`${url}`" target="_blank" class="flex flex-col w-80per">
      <p class="text-white text-3xl font-semibold user-select-none">{{ title }}</p>
      <p class="text-white text-2xl font-hairline">{{ description }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "ContactIconComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-select-none {
  user-select: none;
}
</style>
