<template>
    <div class="flex items-center">
        <input
            :id="state.uniqueId"
            v-bind="$attrs"
            :checked="modelValue === value"
            @change="updateInput"
            :value="value"
            type="radio"
            class="focus:ring-0 h-4 w-4"
        />
        <label :for="state.uniqueId" class="ml-2 block text-sm text-gray-900">
            {{label}}
        </label>
    </div>
</template>

<script>
export default {
    name: 'BaseRadio',
    inheritAttrs: false
}
</script>

<script setup>
import { onMounted, reactive } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    value: {
        type: [String, Number],
        required: true,
    }
})

const state = reactive({
    uniqueId: ''
})

const updateInput = ($event) => {
    emit('update:modelValue', $event.target.value)
}

onMounted(() => {
    state.uniqueId = props.id || Math.random()
            .toString(16)
            .slice(2)
})
</script>