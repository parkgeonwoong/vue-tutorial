<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, contexts) {
    const fullName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
    console.log('contexts: ', contexts);

    onBeforeMount(() => {
      console.log('onBeforeMount: ');
    });
    onMounted(() => {
      console.log('onMounted: ');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate: ');
    });
    onUpdated(() => {
      console.log('onUpdated: ');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount: ');
    });
    onUnmounted(() => {
      console.log('onUnmounted: ');
    });

    const age = inject('userAge');

    return {
      fullName,
      age
    };
  }
};
</script>
