const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
    <p>{{ eat }}</p>
  `,
  data() {
    return {
      eat: "apple",
    };
  },
});
app2.mount("#app2");

// Vue 내부 반응성 시스템 -> JS Proxy 사용
const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};
const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);
proxy.message = "HELLO !!!!!!";
console.log(proxy.longMessage);
