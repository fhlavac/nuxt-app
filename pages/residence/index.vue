<template>
  <Tabs :tabs="tabs" id="residence-tabs" />
  <SectionHeader title="Residence - intro" />
  <SectionText>
    <Par class="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas lorem. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Etiam egestas wisi a erat. Aliquam ante. Fusce consectetuer risus a nunc. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. In enim a arcu imperdiet malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Morbi scelerisque luctus velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pulvinar eleifend sem. Etiam egestas wisi a erat. Et harum quidem rerum facilis est et expedita distinctio. In convallis. Nulla pulvinar eleifend sem. Phasellus faucibus molestie nisl. Phasellus rhoncus. Duis risus....</Par>
  </SectionText>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({ title: 'Residence' });
useHead({
  title: 'Residence'
});

const tabs = [
  {
    text: 'Location',
    value: '/residence/location',
  },
  {
    text: 'Area',
    value: '/residence/area',
  },
  {
    text: 'Availability',
    value: '/residence/availability',
  },
  {
    text: 'Fun',
    value: '/resitence/fun',
  },
  {
    text: 'Tips',
    value: '/residence/tips',
  }
]
</script>