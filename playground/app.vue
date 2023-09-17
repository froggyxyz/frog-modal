<template>
  <div>
    <FrogModal />
    <button @click="setFrogModal(TestModal)">
      Open modal
    </button>
  </div>
</template>

<script lang="ts" setup>
import {FrogModal} from "../src/runtime/components/FrogModal";
import {useFrogModal} from "../src/runtime/composables/useFrogModal";
import TestModal from "~/components/TestModal.vue";

const [setFrogModal] = useFrogModal();
</script>

<style>
:root {
    --frog-modal-overlay-background: red;
}
</style>
