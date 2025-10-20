<template>
    <select v-model="internalValue" :class="['rounded-xl px-2 py-1 w-full border border-gray-400 bg-gray-100  shadow-xl/10', ...props.customClass,]" v-bind="$attrs" >
        <option value="">{{ props.placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }} 
        </option>
    </select>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
    modelValue: [String, Number],
    customClass: {
        type: Array,
        default: [],
    },
    options: {
        type: Array,
        default: () => [],
    },

    placeholder: {
        type: String,
        default: "Seleccione una opción",
    },
})

const emit = defineEmits(["update:modelValue"])

const internalValue = computed({ get: () => props.modelValue, set: (val) => emit("update:modelValue", val),})
</script>


