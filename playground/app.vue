<template>
  <div>
    <FrogModal />
    <button @click="setFrogModal(TestModal, { text: 'Hello World!', onCustomEmit: handleClick })">
      Open modal
    </button>
  </div>
</template>

<script lang="ts" setup>
import {FrogModal} from "../src/runtime/components/FrogModal";
import {useFrogModal} from "../src/runtime/composables/useFrogModal";
import TestModal from "~/components/TestModal.vue";

const [setFrogModal] = useFrogModal();

const handleClick = () => {
    alert('Custom emit works!');
}
</script>

<style>
:root {
    --frog-modal-overlay-background: red;
}
</style>
