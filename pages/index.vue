<template>
  <div>
    <div>
      <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
        <v-card-text> When you see this inside a card, it worked! </v-card-text>
      </v-card>
    </div>

    <div class="m-4 p-4 border-2">
      <h5 class="mb-4 font-bold text-gray-400">Static data state demo</h5>
      <div class="text-lg color-black mb-4 font-black">{{ testState }}</div>
      <button class="p-3 bg-black mr-4 rounded text-white" @click="updateState">
        update state
      </button>
      <button
        class="p-3 bg-black mr-4 rounded text-white"
        @click="goTo('keep')"
      >
        go to keep state page
      </button>
    </div>
    <div class="m-4 p-4 pb-0 border-2">
      <h5 class="mb-4 font-bold text-gray-400">Fetched data state demo</h5>
      <characters />
      <button
        class="p-3 bg-black mr-4 mb-4 rounded text-white"
        @click="getCharacters"
      >
        {{ loading ? "loading" : "first fetch Rick & Morty characters" }}
      </button>
      <button
        class="p-3 bg-black mr-4 mb-4 rounded text-white"
        @click="goTo('destroy')"
      >
        then go to destroy state page
      </button>
      <button
        class="p-3 bg-black mr-4 mb-4 rounded text-white"
        @click="goTo('keep')"
      >
        or go to keep state page
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const {
  sharedState: { state, updateState },
} = useSharedState();
const {
  sharedFetch: { loading, getCharacters },
} = useSharedFetch();

const testState = computed(() => state.value.test);

const goTo = (name: "destroy" | "keep") => {
  return router.push(`/${name}`);
};
</script>
