<template>
  <Section>
    <SectionHeader class="mb-6" title="Welcome to my sample Nuxt.js 3 app!"/>
    <v-alert
    class="mb-6"
      variant="outlined"
      type="warning"
      prominent
      border="top"
    >
      This website is under construction, the content may not be accurate!
    </v-alert>
    <p class="mb-4">Select section from the nav:</p>
    <v-container class="pa-0" fluid>
      <v-layout wrap >
        <v-card
          v-for="(item, i) in menu"
          :key="`index-item-${i}`"
          outlined
          class="mr-5 mb-5"
        >
          <v-list-item three-line>
            <v-list-item-title class="headline mb-1">
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.description }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-card-actions>
            <v-btn color="primary" :to="item.to">Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </Section>
</template>

<script setup lang="ts">
import { navigation } from "../data/navigation";
useHead({title: 'Main page'})

const menu = navigation?.filter((item) => item.to !== "/") || [];
</script>

<style></style>
