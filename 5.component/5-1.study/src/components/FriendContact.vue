<!-- <script>
export default {
  props: {
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
  },
  data() {
    return {
      detailAreaVisible: false
    };
  },
  methods: {
    toggleDetailArea() {
      this.detailAreaVisible = !this.detailAreaVisible;
    },
    toggleFavorite() {
      this.$emit('toggleFavorite', this.friend.id);
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
const emits = defineEmits({
  toggleFavorite: (id) => {
    if (id) {
      return true;
    } else {
      console.warn('Id is missing');
      return false;
    }
  },
  removeFriend: (id) => {
    if (id) return true;
    else return false;
  }
});
const detailAreaVisible = ref(false);

const toggleDetailArea = () => {
  detailAreaVisible.value = !detailAreaVisible.value;
};
const toggleFavorite = () => {
  emits('toggleFavorite', props.friend.id);
};
</script>

<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavorite ? '(*)' : '' }}</h2>
    <button @click="toggleFavorite">toggle Favorite</button>
    <button @click="toggleDetailArea">{{ detailAreaVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailAreaVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
    <button @click="$emit('removeFriend', friend.id)">Remove</button>
  </li>
</template>
