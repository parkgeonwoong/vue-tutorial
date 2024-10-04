<!-- Options API -->
<script>
import FriendContact from './components/FriendContact.vue';

export default {
  components: {
    FriendContact
  },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost'
        }
      ]
    };
  }
};
</script>

<!-- Composition API -->
<!-- <script setup></script> -->

<template>
  <header>
    <h1>FriendList</h1>
  </header>
  <section>
    <ul>
      <FriendContact v-for="friend in friends" :key="friend.id" :friend="friend" />
    </ul>
  </section>
</template>
