<template>
  <div class="modal">
    <p>Hello! It's awesome frog-modal</p>
    <p>Custom text from prop: {{ text }}</p>
    <button @click="emit('customEmit')">
      Click for custom emit
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ text: string }>();
const emit = defineEmits(['customEmit']);
</script>

<style scoped>
.modal {
  min-height: 250px;
  min-width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #888;
}
</style>
