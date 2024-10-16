<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />

    <CourseGoal #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
    </CourseGoal>

    <hr />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/CourseGoal.vue';

const activeUser = ref({
  name: 'Maximilian Schwarzmüller',
  description: 'Site owner and admin',
  role: 'admin',
});
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
