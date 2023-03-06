<template>
  <NuxtLink v-if="isLocal" :to="path" class="text-link">
    <slot />
    {{title}}
  </NuxtLink>
  <a v-else :href="path" class="text-link">
    <slot />
    {{title}}
  </a>
</template>

<script setup>
defineProps({
  isLocal: { type: boolean, default: true },
  path: { type: String, required: true },
  path: { type: String, default: "" },
});
script>

<style scoped>
</style>
