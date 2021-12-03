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
      <div class="mt-4">
        <BaseTextarea
          name="sampleTexarea"
          v-model="form.sampleTextarea"
          label="Sample Textarea"
        />

        <div v-html="form.sampleTextarea"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import BaseInput from "./components/BaseInput.vue"
import BaseTextarea from "./components/BaseTextarea.vue";

const form = reactive({
  sampleInput: '',
  sampleTextarea: ''
})
</script>