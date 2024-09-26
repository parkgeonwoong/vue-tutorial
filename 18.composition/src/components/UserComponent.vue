<template>
  <section class="container">
    <h2>{{ user.userName }}</h2>
    <h2>{{ user.age }}</h2>

    <h2>{{ user2.userName }}</h2>
    <h2>{{ user2.age }}</h2>

    <button @click="updateUser">Change age</button>
  </section>
</template>

<script setup>
import { reactive, ref, isRef, isReactive, toRefs } from 'vue';

const user = ref({
  userName: 'ref hello',
  age: 30
});
const user2 = reactive({
  userName: 'reactive hello',
  age: 31
});

function updateUser() {
  user.value.age++;
}

console.log(isRef(user.value));
console.log(isReactive(user2.age));
console.log(toRefs(user2));

setTimeout(() => {
  user.value.userName = 'ref world';
  user.value.age = 40;

  user2.userName = 'reactive world';
  user2.age = 41;
}, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
