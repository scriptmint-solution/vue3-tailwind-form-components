<template>
    <div>
        <label :for="state.uniqueId" v-if="label" class="block text-sm font-medium text-label truncate">
            {{ label }}
        </label>
        <div class="mt-1">
            <input
                :id="state.uniqueId"
                v-bind="$attrs"
                :placeholder="placeholder || label"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                :value="modelValue"
                @input="updateInput"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
    inheritAttrs: false
}
</script>

<script setup>
import { onMounted, reactive } from 'vue'

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
})

const emit = defineEmits(['update:modelValue'])

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

