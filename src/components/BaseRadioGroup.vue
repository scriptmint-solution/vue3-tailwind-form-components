<template>
    <div class="flex space-x-4">
        <BaseRadio
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :name="name"
            v-model="modelValue"
            @update:modelValue="updateInput"
        />
    </div>
</template>

<script>
export default {
    name: 'BaseRadioGroup',
    inheritAttrs: false
}
</script>

<script setup>
import { onMounted, reactive } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    options: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number],
        required: true
    }
})

const updateInput = ($event) => {
    emit('update:modelValue', $event)
}
</script>