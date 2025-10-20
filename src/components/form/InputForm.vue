<template>
    <input :type="type" :placeholder="placeholder" :value="modelValue" class="border rounded-2xl px-3 py-2" @input="emit('update:modelValue', ($event.target).value)"/>
</template>

<script setup>
    const props = defineProps({
        modelValue: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            required: false,
            default: "text"
        },
        placeholder: {
            type: String,
            required: false,
            default: ""
        }
    })

    const emit = defineEmits(["update:modelValue"])

    defineOptions({ inheritAttrs: false })

</script>