const { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } =
  Vue;

const app = Vue.createApp({
  setup() {
    const currentUserInput = ref("");
    const message = ref("Vue is great!");
    const userText = ref(null);

    const saveInput = (event) => {
      currentUserInput.value = event.target.value;
    };
    const setText = () => {
      message.value = userText.value.value;
    };

    onBeforeMount(() => {
      console.log("beforeMount");
    });
    onMounted(() => {
      console.log("mounted");
    });
    onBeforeUpdate(() => {
      console.log("beforeUpdate");
    });
    onUpdated(() => {
      console.log("updated");
    });
    onBeforeUnmount(() => {
      console.log("beforeUnmount");
    });
    onUnmounted(() => {
      console.log("unmounted");
    });

    return {
      currentUserInput,
      message,
      userText,
      saveInput,
      setText,
    };
  },
});

app.mount("#app");
