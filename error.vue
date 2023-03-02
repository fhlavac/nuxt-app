<template>
  <v-app dark>
    <!-- <h1 v-if="error.statusCode === 404" class="my-4">
      {{ pageNotFound }}
    </h1> -->
    <h1 class="my-4">
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Main page </NuxtLink>
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
