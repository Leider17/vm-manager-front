<template>
    <div class="relative">
    <div @mouseenter="visible = true" @mouseleave="visible = false">
        <slot />
    </div>
    <div class="absolute w-40 text-center p-2 border-1 border-gray-300 rounded-xl bg-white shadow-md left-1/2 translate-x-[1px] mb-2 transition-all" v-if="visible">
        <span class="">{{ text }}</span>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    text:{
        type: String
    }
})

const visible = ref(false)

</script>