<template>
  <div>
    <v-breadcrumbs
      v-if="items.length > 0"
      :items="items"
      class="px-0 pt-2 pb-2"
    >
      <template #item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
          nuxt
          ripple
        >
          <div class="px-1">
            <v-icon v-if="item.icon" color="primary">{{ item.icon }}</v-icon>
            <div v-else class="breadcrumbs-text">{{ item.text }}</div>
          </div>
        </v-breadcrumbs-item>
      </template>
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { $crumbs } = useNuxtApp();
const items = computed(() => $crumbs(route.fullPath));
</script>

<style scoped>
.breadcrumbs-text {
  margin-bottom: -2px;
}
</style>
