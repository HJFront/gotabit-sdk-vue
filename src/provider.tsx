import { defineComponent, PropType, computed, ComputedRef, provide, inject, ref, ExtractPropTypes } from 'vue'

const STATE_PROVIDER_KEY = Symbol()

const GotabitVueProvider = defineComponent({
  name: 'GotabitVueProvider',
  props: {
    state: {
      type: Object as PropType<any>,
      required: true
    }
  },
  setup(props, { slots }) {
    const context = computed(() => props.state)
    provide(STATE_PROVIDER_KEY, context)

    return () => slots.default?.()
  }
})

export default GotabitVueProvider

// import React, { ReactNode, useContext } from "react";

// import { useSelectedGotabitStore } from "./store";
// import { GotabitContext, GotabitContextType } from "./context";

// interface GotabitProviderProps {
//   children: ReactNode;
// }

// export function GotabitProvider({ children }: GotabitProviderProps) {
//   const state = useSelectedGotabitStore();

//   return (
//     <GotabitContext.Provider
//       value={{
//         ...state,
//       }}
//     >
//       {children}
//     </GotabitContext.Provider>
//   );
// }

// export function useGotabitReact(): GotabitContextType {
//   return useContext(GotabitContext);
// }
