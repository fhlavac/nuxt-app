<template>
  <v-app class="app">
    <v-app-bar fixed app class="bar">
      <!--<v-app-bar-nav-icon /> -->
      <NuxtLink to="/" class="mx-6" style="text-decoration: none">
        My Hackathon app<!--<img alt="logo" /> -->
      </NuxtLink>
      <v-spacer />
      <div class="mr-4">
        <v-btn
          v-for="(item, i) in media"
          :key="`media-${i}`"
          icon
          :href="item.url"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer>
      <v-list>
        <v-list-item
          v-for="(item, i) in navigation"
          :key="`menu-item-${i}`"
          class="py-3"
          :to="item.to"
          router
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="ml-0 px-8">
        <Breadcrumbs v-if="route.path == '/'" />
        <Nuxt />
      </v-container>
    </v-main>
    <Footer :media="media" />
  </v-app>
</template>

<script setup lang="ts">
import { media, navigation } from "../data/navigation";
// import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// const {
//   sharedState: { state, updateState },
// } = useSharedState();
// const {
//   sharedFetch: { loading, getCharacters },
// } = useSharedFetch();

// const testState = computed(() => state.value.test);

// const goTo = (name: "destroy" | "keep") => {
//   return router.push(`/${name}`);
// };
</script>

<style>
.app {
  background-color: #f7f1e5;
}

.bar {
  width: 100%;
  background-color: #e7b10a;
}
</style>
