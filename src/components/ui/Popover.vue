<template>
    <div class="relative inline-block">
        <div @click="toggle" ref="trigger">
            <slot name="trigger" />
        </div>
        
        <transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0">
        <div v-if="isOpen" class="absolute right-5 h-full min-h-50 min-w-50 shadow-lg border-gray-300">
            <slot name="content" />
        </div>
        </transition>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const isOpen = ref(false);
const trigger = ref(null);

const toggle = () => {
    isOpen.value = !isOpen.value;
}

const handleClickOutside = (event) => {
    if(!trigger.value?.contains(event.target)){
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>