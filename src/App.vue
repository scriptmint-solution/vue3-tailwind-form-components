<template>
  <div class="flex justify-center space-y-6 h-screen bg-gray-200 dark:bg-gray-800">
    <div class="my-6 space-y-4 sm:w-3/4 lg:w-1/2 w-full px-4">
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

      <div class="space-y-4">
        <BaseCheckbox
          name="sampleCheckbox"
          v-model="form.sampleCheckbox"
          label="Sample Checkbox"
          error="You should accept the terms!"
        />
        <BaseCheckbox
          name="sampleSuccessCheckbox"
          v-model="form.sampleSuccessCheckbox"
          label="Sample Success Checkbox"
          success
        />
        <BaseCheckbox
          name="sampleErrorCheckbox"
          v-model="form.sampleErrorCheckbox"
          label="Sample Error Checkbox"
          error
        />
        <BaseCheckbox
          name="sampleInfoCheckbox"
          v-model="form.sampleInfoCheckbox"
          label="Sample Info Checkbox"
          info
        />
        <BaseCheckbox
          name="sampleWarningCheckbox"
          v-model="form.sampleWarningCheckbox"
          label="Sample Warning Checkbox"
          warning
        />
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
  sampleTextarea: '',
  sampleCheckbox: false,
  sampleSuccessCheckbox: true,
  sampleErrorCheckbox: false,
  sampleInfoCheckbox: true,
  sampleWarningCheckbox: false,
})
</script>