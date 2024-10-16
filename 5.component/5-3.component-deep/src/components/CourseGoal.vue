<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal"></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const goals = ref(['Learn Vue', 'Learn React']);
</script>
