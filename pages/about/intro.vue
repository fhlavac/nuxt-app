<template>
  <!-- <h1 v-if="error.statusCode === 404" class="my-4">
      {{ pageNotFound }}
    </h1>
    <h1 v-else class="my-4">
      {{ otherError }}
    </h1> -->
  <NuxtLink to="/"> Main page </NuxtLink>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const {
  sharedState: { state },
} = useSharedState();

const testState = ref<any>(state.value.test);

/* Called just to show destroyed state effect */
onMounted(() => {
  const {
    sharedState: { state },
  } = useSharedState();
  testState.value = state.value.test;
});
watch([() => state.value], ([newState]) => {
  testState.value = newState.test;
});
const goToHome = () => {
  return router.push("/");
};
</script>
