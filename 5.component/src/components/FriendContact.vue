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
    id: String,
    name: String,
    phone: String,
    email: String,
    isFavorite: {
      type: Boolean,
      default: false
    }
  }
});
const detailAreaVisible = ref(false);
const friendIsFavorite = ref(props.friend.isFavorite);

const toggleDetailArea = () => {
  detailAreaVisible.value = !detailAreaVisible.value;
};
const toogleFavorite = () => {
  friendIsFavorite.value = !friendIsFavorite.value;
};
</script>

<template>
  <li>
    <h2>{{ friend.name }} {{ friendIsFavorite ? '(*)' : '' }}</h2>
    <button @click="toogleFavorite">Favorite</button>
    <button @click="toggleDetailArea">{{ detailAreaVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailAreaVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>
