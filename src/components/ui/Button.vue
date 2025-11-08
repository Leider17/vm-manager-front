<template>
    <button :type="props.type" :disabled="props.disabled" :class="[props.customClass, 'bg-primary text-white font-bold py-2 px-4 rounded-2xl hover:scale-105 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed']">
        <slot></slot>
    </button>
</template>

<script setup>
    const props = defineProps({
        type: {
            type: String,
            required: false,
            default: "button"
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        customClass: {
            type: String,
            required: false,
            default: ""
        }
    })
</script>