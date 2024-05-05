<script setup lang="ts">
import { onMounted, ref } from "vue";
import Message from "./Message.vue";
import { CHATS } from "../store/chat";

// Data
const refChat = ref<HTMLElement | null>(null);

// hooks
onMounted(() => {
  refChat.value?.scrollTo(0, refChat.value.scrollHeight);
});
</script>
<template>
  <div ref="refChat">
    <Message
      v-for="(chat, index) of CHATS"
      :key="index"
      :content="chat.content"
      :role="chat.role"
    />
  </div>
</template>


