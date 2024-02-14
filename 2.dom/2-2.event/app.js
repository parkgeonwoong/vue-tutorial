const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
      name: "",
      confirmedName: "",
    };
  },

  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      return (this.counter += num);
    },
    Subtract(num) {
      return (this.counter -= num);
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
