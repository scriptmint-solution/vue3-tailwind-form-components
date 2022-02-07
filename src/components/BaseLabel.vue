<template>
    <label :for="for" class="block text-sm font-medium text-label text-gray-800 dark:text-gray-300 truncate">
        <slot></slot>
    </label>
</template>

<script>
export default {
    name: 'BaseLabel'
}
</script>

<script setup>
const props = defineProps({
    for: {
        type: String,
        default: ''
    }
})
</script>