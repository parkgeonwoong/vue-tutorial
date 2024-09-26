<template>
  <div>
    <UserComponent />
    <CourseGoalComponent />
    <ExpenseTracker />
  </div>
</template>

<script>
import UserComponent from './components/UserComponent.vue';
import CourseGoalComponent from './components/CourseGoalComponent.vue';
import ExpenseTracker from './components/ExpenseTracker.vue';

export default {
  components: {
    UserComponent,
    CourseGoalComponent,
    ExpenseTracker
  }
};
</script>
