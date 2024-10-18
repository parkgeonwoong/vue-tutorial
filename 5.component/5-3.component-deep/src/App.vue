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
    <button @click="setActiveComponent(ActiveGoals)">Active Goals</button>
    <button @click="setActiveComponent(ManageGoals)">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/CourseGoal.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

const activeUser = ref({
  name: 'Maximilian Schwarzmüller',
  description: 'Site owner and admin',
  role: 'admin',
});
const selectedComponent = shallowRef(ActiveGoals);

const setActiveComponent = component => {
  selectedComponent.value = component;
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
