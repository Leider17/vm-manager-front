<template>
<section v-if="modelValue"  class="fixed inset-0 z-[2] w-full h-full flex flex-col items-center justify-center backdrop-blur-[2px] p-4">
    <div class="relative bg-white rounded-lg border border-gray-300 shadow-xl p-6 max-w-lg w-10/12">
        <slot></slot>
    </div>
</section>
</template>

<script setup >
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue", "close"]); 

</script>