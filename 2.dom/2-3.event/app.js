const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increase() {
      return this.counter++;
    },
    decrease() {
      return this.counter--;
    },
  },
});

app.mount("#events");
