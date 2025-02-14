<template>
  <div class="pt-4">
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="flex items-center mb-4 cursor-pointer" @click="$emit('select-contact', contact)">
        <img :src="contact.avatar" alt="Avatar" class="w-8 h-8 rounded-full" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {getContacts} from '../../services/mockApi';

const contacts = ref([]);

onMounted(() => {
  contacts.value = getContacts();
});
</script>
