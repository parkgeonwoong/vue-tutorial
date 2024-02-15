const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
      name: "",
    };
  },

  methods: {
    outputFullName() {
      // FIXME: 메서드는 페이지 렌더링마다 실행됨
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Woong";
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
