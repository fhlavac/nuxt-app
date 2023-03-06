<template>
  <div>
    <v-breadcrumbs
      v-if="items.length > 0"
      :items="items"
      class="px-0 pt-2 pb-2"
    >
      <template v-slot:title="{ item }">
        <div class="px-1">
          <v-icon v-if="item.icon" class="pb-1" color="primary">{{ item.icon }}</v-icon>
          <div v-else class="breadcrumbs-text">{{ item.title }}</div>
        </div>
      </template>

      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-divider/>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp()

const getCrumbs = () => {
  const params = route.fullPath
      .substring(1)
      .split("/")
      .filter((p) => p.length > 0);
    let crumbs = [
      {
        icon: "mdi-home",
        style: "text-decoration: none",
        disabled: false,
        href: "/",
      },
    ];
    let path = "";

    params.forEach((param, index, { length }) => {
      path = `${path}/${param}`;
      const match = router.getRoutes().find(route => route.name === param);
      if (match?.name !== "index") {
        if (index === length - 1) {
          crumbs.push({
            title: match.meta?.title || param,
            disabled: true,
          });
        } else {
          crumbs.push({
            title: match.meta?.title || param,
            disabled: false,
            href: path,
          });
        }
      }
    });

    return crumbs;
}


const items = computed(() => getCrumbs());
</script>

<style scoped>
.breadcrumbs a {
  text-decoration: none;
}
.breadcrumbs-text {
  margin-bottom: -2px;
}
</style>
