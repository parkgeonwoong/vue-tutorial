<!-- <script>
export default {
  props: ['friend'],
  data() {
    return {
      detailAreaVisible: false
    };
  },
  methods: {
    toggleDetailArea() {
      this.detailAreaVisible = !this.detailAreaVisible;
    }
  }
};
</script> -->

<!-- Composition API -->
<script setup>
import { ref } from 'vue';

const props = defineProps({
  friend: {
    type: Object,
    required: true
  }
});
const detailAreaVisible = ref(false);

const toggleDetailArea = () => {
  detailAreaVisible.value = !detailAreaVisible.value;
};
</script>

<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetailArea">{{ detailAreaVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailAreaVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>
