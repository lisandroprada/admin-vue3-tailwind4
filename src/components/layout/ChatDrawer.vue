<template>
  <div class="fixed top-0 right-0 h-full bg-white dark:bg-[#1A202C] shadow-lg z-40 flex">
    <div class="w-16 bg-gray-100 dark:bg-[#2D3748] flex flex-col items-center">
      <div class="h-[64px] flex items-center justify-center">
        <ChatBubbleBottomCenterIcon class="w-8 h-8 text-gray-500 dark:text-gray-400" />
      </div>
      <div class="w-full">
        <hr class="border-t border-gray-200 dark:border-gray-700" />
      </div>
      <ContactList @select-contact="selectContact" />
    </div>
    <div v-if="selectedContact" class="w-80 flex flex-col p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">{{ selectedContact.name }}</h2>
        <button @click="closeChat" class="text-gray-500 dark:text-gray-400">X</button>
      </div>
      <ChatModule :contact="selectedContact" class="flex-1" />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {ChatBubbleBottomCenterIcon} from '@heroicons/vue/24/outline';
import ChatModule from '../chat/ChatModule.vue';
import ContactList from '../chat/ContactList.vue';

const selectedContact = ref(null);

const selectContact = (contact) => {
  selectedContact.value = contact;
};

const closeChat = () => {
  selectedContact.value = null;
};
</script>
