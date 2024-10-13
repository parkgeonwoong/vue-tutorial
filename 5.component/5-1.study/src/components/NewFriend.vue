<script setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['addFriend']);

const newFriend = ref({ name: '', phone: '', email: '' });

const handleSubmit = () => {
  emits('addFriend', newFriend.value);
};

// watch(
//   newFriend,
//   (newValue) => {
//     console.log(newValue);
//   },
//   { deep: true }
// );
</script>

<template>
  <form action="">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="newFriend.name" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" v-model="newFriend.phone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" v-model="newFriend.email" />
    </div>
    <div>
      <button @click.prevent="handleSubmit">Add Contact</button>
    </div>
  </form>
</template>

<style scoped>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
