const app = Vue.createApp({
  data() {
    return {
      name: "Park GunWoong",
      age: 30,
      url: "https://picsum.photos/200/300",
    };
  },

  methods: {
    randomNum() {
      return Math.random().toFixed(4);
    },
  },
});

app.mount("#assignment");
