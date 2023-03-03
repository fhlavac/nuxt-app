<template>
  <v-app class="ma-12">
    <h1 class="my-4">...And that's how the fallback error page looks like.</h1>
    <h1 class="mb-12">Sorry :-(</h1>
    <NuxtLink to="/">Back to the main page</NuxtLink>
  </v-app>
</template>

<script setup lang="ts">
// const pageNotFound = "Sorry, page not found.";
const otherError = "An error occured.";
// const error = {};
</script>

<style>
h1 {
  font-size: 20px;
}
</style>
