<!-- Options API -->
<!-- <script>
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
          email: 'manuel@localhost',
          isFavorite: true
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost',
          isFavorite: false
        }
      ]
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find((friend) => friend.id === friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    }
  }
};
</script> -->

<!-- Composition API -->
<script setup>
import { ref } from 'vue';
import FriendContact from './components/FriendContact.vue';

const friends = ref([
  {
    id: 'manuel',
    name: 'Manuel Lorenz',
    phone: '01234 5678 991',
    email: 'manuel@localhost',
    isFavorite: true
  },
  {
    id: 'julie',
    name: 'Julie Jones',
    phone: '09876 543 221',
    email: 'julie@localhost'
  }
]);

const toggleFavoriteStatus = (friendId) => {
  const identifiedFriend = friends.value.find((friend) => friend.id === friendId);
  identifiedFriend.isFavorite = !identifiedFriend.isFavorite;

  // console.log('friends: ', JSON.stringify(friends.value, null, 2));
  // console.log(
  //   'friends: ',
  //   friends.value.forEach((friend) => console.table(friend))
  // );
};
</script>

<template>
  <header>
    <h1>FriendList</h1>
  </header>
  <section>
    <ul>
      <FriendContact
        v-for="friend in friends"
        :key="friend.id"
        :friend="friend"
        @toggleFavorite="toggleFavoriteStatus"
      />
    </ul>
  </section>
</template>
