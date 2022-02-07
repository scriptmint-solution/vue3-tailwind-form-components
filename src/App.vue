<template>
  <div class="fixed flex items-center justify-center inset-0 z-40 h-16 bg-black">
      <div class="text-white text-center px-10 py-2">
          <a href="https://scriptmint.com/vana-admin" target="_blank" class="">
              <span class="bg-red-600 px-4 py-1 rounded-full">Pro Version</span>
              Checkout our Advanced Feature Admin Template built with Laravel, Vue.js 3 & Tailwind CSS 3 here.
          </a>
      </div>
  </div>
  <div class="flex justify-center h-screen mt-16 bg-gray-200 dark:bg-gray-800">
    <div class="my-6 space-y-4 sm:w-1/2">
      <div class="flex justify-center">
        <img src="/images/icon.png" class="h-16" />
      </div>
      <h2 class="text-center text-xl font-bold text-gray-700 dark:text-gray-300">Form Input Components</h2>

      <div>
        <BaseInput
          name="sampleInputWithHelp"
          v-model="form.sampleInputWithHelp"
          label="Sample Input with Help"
          autofocus
        />
        <HelpBlock><i class="fas fa-question-circle"></i> This is a help block!</HelpBlock>
        <ShowInput>{{form.sampleInputWithHelp}}</ShowInput>
      </div>

      <div>
        <BaseInput
          name="sampleInputWithError"
          v-model="form.sampleInputWithError"
          label="Sample Text Input with Error"
          error="This is form error message."
        />
        <ShowInput>{{form.sampleInputWithError}}</ShowInput>
      </div>

      <div>
        <BaseInput
          name="sampleSuccessInput"
          v-model="form.sampleSuccessInput"
          label="Sample Success Input"
          success
        />
        <ShowInput>{{form.sampleSuccessInput}}</ShowInput>
      </div>

      <div>
        <BaseInput
          name="sampleInfoInput"
          v-model="form.sampleInfoInput"
          label="Sample Info Input"
          info
        />
        <ShowInput>{{form.sampleInfoInput}}</ShowInput>
      </div>

      <div>
        <BaseInput
          name="sampleWarningInput"
          v-model="form.sampleWarningInput"
          label="Sample Warning Input"
          warning
        />
        <ShowInput>{{form.sampleWarningInput}}</ShowInput>
      </div>

      <div>
        <BaseTextarea
          name="sampleTexarea"
          v-model="form.sampleTextarea"
          label="Sample Textarea"
        />
        <ShowInput>{{form.sampleTextarea}}</ShowInput>
      </div>

      <div class="mt-4">
          <p class="text-center text-sm text-gray-900 dark:text-gray-400 space-x-2">
              <span>Version 1.0.0 Designed with ❤️ by <a href="https://scriptmint.com">ScriptMint</a></span>
          </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"

const form = reactive({
  sampleInputWithHelp: '',
  sampleInputWithError: '',
  sampleSuccessInput: '',
  sampleInfoInput: '',
  sampleWarningInput: '',
  sampleTextarea: ''
})
</script>