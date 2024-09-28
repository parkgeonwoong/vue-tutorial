<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">Sort Ascending</button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">Sort Descending</button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import { computed, ref, watch } from 'vue';
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  props: ['users'],
  emits: ['list-projects'],
  setup(props) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');
    const sorting = ref(null);

    const availableUsers = computed(() => {
      let usersList = [];
      if (activeSearchTerm.value) {
        usersList = props.users.filter((usr) => usr.fullName.includes(activeSearchTerm.value));
      } else if (props.users) {
        usersList = props.users;
      }
      return usersList;
    });

    const displayedUsers = computed(() => {
      if (!sorting.value) {
        return availableUsers.value;
      }
      return availableUsers.value.slice().sort((u1, u2) => {
        if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
          return 1;
        } else if (sorting.value === 'asc') {
          return -1;
        } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
          return -1;
        } else {
          return 1;
        }
      });
    });

    const updateSearch = (val) => {
      enteredSearchTerm.value = val;
    };
    const sort = (mode) => {
      sorting.value = mode;
    };

    watch(enteredSearchTerm, (newValue) => {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    watch([() => enteredSearchTerm, activeSearchTerm, sorting], () => {
      console.log('enteredSearchTerm: ', enteredSearchTerm.value);
      console.log('activeSearchTerm: ', activeSearchTerm.value);
      console.log('availableUsers: ', availableUsers.value);
      console.log('displayedUsers: ', displayedUsers.value);
    });

    return { enteredSearchTerm, sorting, displayedUsers, updateSearch, sort };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
