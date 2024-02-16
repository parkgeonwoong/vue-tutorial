const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
      name: "",
    };
  },
  computed: {
    fullName() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Woong";
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
