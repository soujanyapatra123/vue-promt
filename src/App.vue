<script setup lang="ts">
import MessageContainer from "./components/MessageContainer.vue";
import UserChatBox from "./components/UserChatBox.vue";
</script>

<template>
  <div
    class="h-screen w-full max-w-4xl mx-auto p-4 flex flex-col justify-between"
  >
    <MessageContainer class="flex-1 p-2 overflow-auto" />
    <UserChatBox />
  </div>
</template>
