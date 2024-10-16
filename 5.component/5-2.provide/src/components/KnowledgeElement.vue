<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="activateTopic(id)">Learn More</button>
  </li>
</template>

<script setup>
import { inject } from 'vue';
const { id, topicName, description } = defineProps(['id', 'topicName', 'description']);
const { activateTopic } = inject('topics');
</script>
