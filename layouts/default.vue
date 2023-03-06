<template>
  <v-app class="app">
    <v-app-bar class="app-bar" fixed app>
      <v-app-bar-nav-icon
        @click.stop="updateState(!navOpen)"
      />
      <NuxtLink to="/" class="mx-6" style="text-decoration: none">
        <h3 class="logo">My Sample App</h3>
        <!--<img alt="logo" /> -->
      </NuxtLink>
      <v-spacer />
      <div class="mr-4">
        <v-btn
          v-for="(item, i) in media"
          :key="`media-${i}`"
          icon
          color="primary"
          :href="item.url"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-if="navOpen">
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
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="ml-0 px-8">
        <Breadcrumbs v-if="route.path !== '/'" />
        <slot />
      </v-container>
    </v-main>
    <Footer class="footer" :media="media" />
  </v-app>
</template>

<script setup lang="ts">
import { media, navigation } from "../data/navigation";
import { useRoute } from "vue-router";

const route = useRoute();


const {
  sharedState: { state, updateState },
} = useSharedState();

const navOpen = computed(() => state.value.navOpen);

</script>

<style>
.app-bar {
  width: 100%;
}

.logo {
  font-family: "RalewayMedium";
}

.footer {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
</style>
