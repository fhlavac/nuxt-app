import { ref } from "vue";
import { useStateEffect } from "vue-use-state-effect";

const sharedState = () => {
  const state = ref({
    navOpen: true,
  });
  const updateState: (navOpen: boolean) => void = (navOpen) => {
    state.value = { navOpen };
  };
  return {
    state,
    updateState,
  };
};

export const useSharedState = useStateEffect(sharedState, {
  name: "sharedState",
  debug: true,
  destroy: false,
});
