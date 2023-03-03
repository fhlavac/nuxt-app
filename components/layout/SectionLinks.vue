<template>
  <div class="mb-4">
    <h5>{{ title }}</h5>
    <div v-for="(link, idx) in links" :key="`section-link-${idx}`">
      <Link class="section-link" :path="link.path" :is-local="link.isLocal">{{
        link.name
      }}</Link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, reqired: true, default: "" },
  links: { type: Array, reqired: true, default: () => [] },
});
</script>

<style scoped>
.section-link {
  font-size: 13px;
}
</style>
