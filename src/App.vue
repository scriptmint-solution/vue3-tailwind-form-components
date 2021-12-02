<template>
  <div class="flex justify-center h-screen">
    <div>
      <img src="https://scriptmint.com/images/logo.png" class="w-64" />
      <h2 class="text-center">Form Input Components</h2>

      <div class="mt-4">
        <BaseInput
          name="sampleInput"
          v-model="form.sampleInput"
          label="Sample Text Input"
        />

        {{form.sampleInput}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import BaseInput from "./components/BaseInput.vue"

const form = reactive({
  sampleInput: ''
})
</script>