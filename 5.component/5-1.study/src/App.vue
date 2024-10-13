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
import NewFriend from './components/NewFriend.vue';

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
const removeFriend = (friendId) => {
  friends.value = friends.value.filter((friend) => friend.id !== friendId);
};

const addFriend = (info) => {
  const newFriend = {
    id: new Date().toISOString(),
    ...info
  };
  friends.value = [newFriend, ...friends.value];
};
</script>

<template>
  <header>
    <h1>FriendList</h1>
  </header>

  <NewFriend @addFriend="addFriend" />

  <section>
    <ul>
      <FriendContact
        v-for="friend in friends"
        :key="friend.id"
        :friend="friend"
        @toggleFavorite="toggleFavoriteStatus"
        @removeFriend="removeFriend"
      />
    </ul>
  </section>
</template>
