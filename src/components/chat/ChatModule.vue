<template>
  <div class="flex flex-col h-full text-sm">
    <div class="flex-1 overflow-y-auto mb-4">
      <div v-for="message in conversations" :key="message.message" class="mb-2">
        <div :class="message.from === 'me' ? 'text-right' : 'text-left'">
          <span :class="message.from === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'" class="inline-block p-2 rounded-lg">
            {{ message.message }}
            <span class="block text-xs text-gray-500">{{ message.time }}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 flex">
      <input v-model="newMessage" type="text" class="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Type a message..." />
      <button @click="sendMessage" class="ml-2 p-2 bg-blue-500 text-white rounded-lg">
        <PaperAirplaneIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import {getConversations} from '../../services/mockApi';
import {PaperAirplaneIcon} from '@heroicons/vue/24/outline';

const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
});

const conversations = ref([]);
const newMessage = ref('');

watch(
  () => props.contact,
  (newContact) => {
    conversations.value = getConversations(newContact.id);
  },
  {immediate: true}
);

const sendMessage = () => {
  if (newMessage.value.trim()) {
    conversations.value.push({message: newMessage.value, from: 'me', time: new Date().toLocaleTimeString()});
    newMessage.value = '';
  }
};
</script>
