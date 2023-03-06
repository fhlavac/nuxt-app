<template>
  <SectionHeader title="Gallery" />
    <SectionText>
      <Par class="mb-4">This is a sample gallery...</Par>
      <v-row>
        <v-col
          v-for="n in 9"
          :key="n"
          class="d-flex child-flex"
          cols="2"
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            cover
            class="bg-grey-lighten-2"
          />
        </v-col>
      </v-row>
    </SectionText>
</template>

<script setup lang="ts">
definePageMeta({ title: 'Gallery' });
useHead({
  title: 'Gallery'
})
</script>

<style scoped>
</style>