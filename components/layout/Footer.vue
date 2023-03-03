<template>
  <v-footer padless class="footer">
    <v-card width="100%" flat tile class="grey-dark-2 white--text text-right">
      <v-card-text>
        <v-btn
          v-for="(item, i) in media"
          :key="`media-footer-${i}`"
          class="mx-2"
          icon
          :href="item.url"
        >
          <v-icon color="primary">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="grey-dark-2 white--text pt-0">
        <em>This is just a Nuxt.js demo app build during the Hackathon...</em>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="ctu-grey-dark-3 white--text">
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
  z-index: 5;
}
</style>
