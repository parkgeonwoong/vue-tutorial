const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
      name: "",
    };
  },

  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      return (this.counter += num);
    },
    Subtract(num) {
      return (this.counter -= num);
    },
  },
});

app.mount("#events");
