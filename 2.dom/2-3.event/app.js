const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
    };
  },

  methods: {
    increase(num) {
      return (this.counter += num);
    },
    decrease(num) {
      return (this.counter -= num);
    },
  },
});

app.mount("#events");
