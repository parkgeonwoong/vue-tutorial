const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Vue를 배우기",
      courseGoalB: "Vue를 마스터하기",
      vueLink: "https://ko.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
