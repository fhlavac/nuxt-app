<template>
  <v-footer class="footer">
    <v-card width="100%" flat tile class="text-right text-white footer-card">
      <v-card-text>
        <v-btn
          v-for="(item, i) in media"
          :key="`media-footer-${i}`"
          class="mx-2"
          icon
          :href="item.url"
        >
          <v-icon color="#4c4b16">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>
        <em>This is just a Nuxt.js demo app build during the Hackathon...</em>
      </v-card-text>

      <v-divider />

      <v-card-text>
        &copy; {{ new Date().getFullYear() }}&nbsp;&nbsp;|&nbsp;&nbsp;<strong
          >ConsoleDot Hackathon Q1-23</strong
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script setup>
defineProps({
  media: { type: Array, reqired: false, default: () => [] },
});
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
}
.footer-card {
  border-radius: 0;
  background-color: #4c4b16;
}
</style>
