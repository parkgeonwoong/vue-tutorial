const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
      name: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
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
