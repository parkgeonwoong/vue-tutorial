<template>
  <section>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3 v-if="!courseData.isHide">{{ courseData.goal }}</h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggleGoal">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </section>
</template>

<script>
// import { ref } from 'vue';

export default {
  data() {
    return {
      courseData: {
        goal: 'Learn Vue!',
        isHide: false
      }
    };
  },
  methods: {
    toggleGoal() {
      this.courseData.isHide = !this.courseData.isHide;
    }
  }

  //   setup() {
  //     const courseData = ref({
  //       goal: 'Learn Vue!',
  //       isHide: false
  //     });

  //     function toggleGoal() {
  //       courseData.value.isHide = !courseData.value.isHide;
  //     }

  //     return { courseData, toggleGoal };
  //   }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
