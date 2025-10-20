<template>
    <div ref="screen" class="w-screen h-screen"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import RFB from "../static/noVNC/core/rfb.js";

const route = useRoute()

const screen = ref(null)

onMounted(() => {
    if (!route.params.websocketUrl) {
        console.error("No websocketUrl provided")
        return
    }
    const websocketUrl = route.params.websocketUrl

    const rfb = new RFB(screen.value, websocketUrl)
    rfb.scaleViewport = true
    rfb.clipViewport = true
    
})
</script>