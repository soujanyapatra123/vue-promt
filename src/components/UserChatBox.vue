<script setup lang="ts">
import { nextTick, ref } from "vue";
import { sendAllMessages } from "../services";
import { CHATS } from "../store/chat";

// data
const message = ref<string>("");
const refTextArea = ref<HTMLElement| null>()

// methods
const sendChats = async () => {
  const userMessage = {
    role: "user",
    content: message.value,
  };
  CHATS.value.push(userMessage);

  let chatGPTMessage = await sendAllMessages(CHATS.value);
  CHATS.value.push(chatGPTMessage);
};

const check = async (event: any) => {
  if (!event.shiftKey) {
    sendChats()
    nextTick(() => {
      message.value = ''
      refTextArea.value?.scrollTo(0, refTextArea.value.scrollHeight);
    })
  }
};
</script>
<template>
  <div class="flex gap-1">
    <div class="flex-1 relative border-2 border-gray-300 p-3 rounded-lg flex">
      <textarea
        ref="refTextArea"
        v-model="message"
        type="text"
        placeholder="Message ChatGPT..."
        class="w-full outline-none"
        @keyup.enter="check"
      />
      <div class="flex gap-2">
        <button @click="sendChats">➤</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>
