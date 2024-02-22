const app = Vue.createApp({
  data() {
    return {
      taskList: [],
      inputValue: "",
      isToggle: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isToggle ? "Hide" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.taskList.push(this.inputValue);
      this.inputValue = "";
    },
    onToggle() {
      this.isToggle = !this.isToggle;
    },
  },
});

app.mount("#assignment");
