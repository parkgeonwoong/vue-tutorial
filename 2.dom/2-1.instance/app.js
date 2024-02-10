const app = Vue.createApp({
  data() {
    return {
      courseGoal: "뷰를 배우기",
      vueLink: "https://ko.vuejs.org/",
    };
  },
});

app.mount("#user-goal");
