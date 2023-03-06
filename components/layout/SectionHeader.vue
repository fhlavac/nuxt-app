<template>
  <div class="mb-2 mt-4">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
});
</script>

<style scoped></style>
