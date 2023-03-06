<template>
  <v-tabs
    v-if="isDesktop()"
    :id="id"
    class="pb-1"
    grow
    show-arrows
    center-active
  >
    <v-tab
      v-for="(item, idx) in tabs"
      v-bind:key="`${item.value.split('/').reverse().find(id => id.length > 0)}-tab-${idx}`"
      :to="item.value"
      exact-path
    >
      {{item.text}}
    </v-tab>
  </v-tabs>
  <v-select
    v-else
    class="mt-4 mb-8"
    hide-details
    :items="tabs"
    label="Sekce"
    :value="tabs.find(item => item.value === route.path)"
    @change="(value) => router.push(value)"
    eager
    outlined
  ></v-select>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const isDesktop = () => true; // change that later into a plugin!

defineProps({
  tabs: { type: Array, required: true },
  id: { type: String, required: true },
});
</script>

<style scoped>
</style>
