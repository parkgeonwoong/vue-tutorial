<template>
  <div>
    <UserComponent />
    <CourseGoalComponent />
  </div>
</template>

<script>
import UserComponent from './components/UserComponent.vue';
import CourseGoalComponent from './components/CourseGoalComponent.vue';

export default {
  components: {
    UserComponent,
    CourseGoalComponent
  }
};
</script>
