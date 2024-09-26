<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props) {
    const fullName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    return {
      fullName,
      age
    };
  }
};
</script>
