<template>
    <div>
        <div class="flex items-center">
            <input
                :id="state.uniqueId"
                v-bind="$attrs"
                :checked="modelValue"
                @change="updateInput"
                type="checkbox"
                class="
                    h-4
                    w-4
                    focus:ring-0
                    cursor-pointer
                    rounded
                "
                :class="{
                    'accent-red-600': danger,
                    'accent-green-600': success,
                    'accent-blue-600': info,
                    'accent-yellow-400 text-white': warning,
                }"
            />
            <label :for="state.uniqueId" class="ml-2 block text-sm text-gray-900 cursor-pointer">
                {{label}}
            </label>
        </div>
        <FormError>{{error}}</FormError>
    </div>
</template>

<script>
export default {
    name: 'BaseCheckbox',
    inheritAttrs: false
}
</script>

<script setup>
import { onMounted, reactive } from 'vue'

const emit = defineEmits(['update:modelValue', 'update:error'])

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: Boolean,
        default: false
    },
    error: {
        type: String,
        default: ''
    },
    danger: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
})

const state = reactive({
    uniqueId: ''
})

const updateInput = ($event) => {
    emit('update:modelValue', $event.target.checked)
}

onMounted(() => {
    state.uniqueId = props.id || Math.random()
            .toString(16)
            .slice(2)
})
</script>
