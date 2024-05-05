import OpenAI from "openai";
import type { CHAT } from "./types";

const openAI = new OpenAI({
  apiKey: import.meta.env.VITE_VUE_PROMT_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendAllMessages(chats: unknown) {
  const response = await openAI.chat.completions.create({
    messages: chats as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
    model: "gpt-3.5-turbo",
  });

  let chatGptMessage: CHAT = {
    role: response.choices[0].message.role,
    content: response.choices[0].message.content!,
  };

  return chatGptMessage;
}
