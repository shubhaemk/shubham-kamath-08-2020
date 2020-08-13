<template>
  <div class="h-screen min-h-50 home">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "HomeContainer",
};
</script>

<style scoped>
.home {
  background-color: #0f0f1f;
}
</style>
