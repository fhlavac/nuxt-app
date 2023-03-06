<template>
  <SectionHeader title="About" />
    <SectionText>
      <Par>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas lorem. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Etiam egestas wisi a erat. Aliquam ante. Fusce consectetuer risus a nunc. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. In enim a arcu imperdiet malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Morbi scelerisque luctus velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pulvinar eleifend sem. Etiam egestas wisi a erat. Et harum quidem rerum facilis est et expedita distinctio. In convallis. Nulla pulvinar eleifend sem. Phasellus faucibus molestie nisl. Phasellus rhoncus. Duis risus.</Par>
      <v-timeline align="start">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :dot-color="year.color"
          size="small"
        >
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold text-${year.color}`"
              v-text="year.year"
            ></div>
          </template>
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
              Milestone
            </h2>
            <div>
              Now...
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
      <Par class="mt-4">Praesent vitae arcu tempor neque lacinia pretium. Integer tempor. Mauris metus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Pellentesque pretium lectus id turpis. Donec vitae arcu. Quisque tincidunt scelerisque libero. Nullam at arcu a est sollicitudin euismod. Nulla non lectus sed nisl molestie malesuada. Proin mattis lacinia justo. Aliquam erat volutpat. Praesent in mauris eu tortor porttitor accumsan. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam quis quam.</Par>
      <Par class="text-right"><i>Thank you!</i></Par>
    </SectionText>
</template>

<script setup lang="ts">
definePageMeta({ title: 'About' });
useHead({
  title: 'About'
})

const years = [
  {
    color: 'pink',
    year: '1980',
  },
  {
    color: 'amber',
    year: '1990',
  },
  {
    color: 'orange',
    year: '2000',
  },
];
</script>