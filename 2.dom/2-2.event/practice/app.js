const app = Vue.createApp({
  data() {
    return {
      keydownInput: "",
      enterInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello World!");
    },
    saveInput(event) {
      this.keydownInput = event.target.value;
    },
    enterOutput() {
      this.enterInput = this.keydownInput;
    },
  },
});

app.mount("#assignment");
