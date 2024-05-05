<script setup lang="ts">
import { computed } from "vue";

// props
const props = defineProps<{
  content: string;
  role: string;
}>();

// computed
const isUser = computed(() => {
  return props.role === "user";
});

const formattedContent = computed(() => {
  let formatted = props.content.replace(
    /```(\w+)([\s\S]*?)```/g,
    '<div class="code-block"><pre class="custom_code_block language-$1"><code>$2</code></pre></div>'
  );

  formatted = formatted.replace(
    /`([^`]+)`/g,
    "<span class='low_code_block'>$1</span>"
  );
  return formatted;
});
</script>

<template>
  <div class="flex gap-1 mt-3">
    <span v-if="isUser">&#128100;</span>
    <img
      v-else
      src="../assets/gptLogo.svg"
      alt="chatgpt logo"
      class="w-4 h-4 mt-1"
    />
    <div>
      <div v-if="isUser" class="font-bold ml-1">You</div>
      <div v-else class="font-bold ml-2">ChatGPT</div>
      <div v-html="formattedContent" class="text ml-1"></div>
    </div>
  </div>
</template>

<style>
.custom_code_block {
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 10px;
}
.low_code_block {
  background-color: lightgrey !important;
  border-radius: 5px;
  border: 0.5px solid white;
}

.text {
  margin: 3px 0 0 7px;
}

.button_text {
  margin-top: 10px;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 5px;
}
</style>
