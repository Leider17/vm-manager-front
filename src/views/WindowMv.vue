<template>
    <div ref="screen" class="w-screen h-screen"></div>
</template>

<script setup>
    import { onMounted, ref, } from 'vue'
    import { useRoute } from 'vue-router'

    import RFB from "../static/noVNC/core/rfb.js";

    const route = useRoute()

    const screen = ref(null)

    onMounted(() => {
        if (!route.params.websocketUrl) {
            console.error("No websocketUrl provided")
            return
        }
        document.title = route.query.name
        const websocketUrl = route.params.websocketUrl

        const rfb = new RFB(screen.value, websocketUrl,{
            compressionLevel: 5,
            qualityLevel: 2,
            enableWebP: true
        })
        rfb.scaleViewport = true
        rfb.clipViewport = true
        
        rfb.addEventListener('disconnect', () => {
            window.close()
        })
    })
</script>