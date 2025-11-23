<template>
    <div ref="screen" class="w-screen h-screen"></div>
</template>

<script setup>
    import { onMounted, ref, } from 'vue'
    import { useRoute } from 'vue-router'

    import RFB from "../../noVnc/core/rfb";

    const route = useRoute()

    const screen = ref(null)

    onMounted(() => {
        if (!route.params.websocketUrl) {
            console.error("No websocketUrl provided")
            return
        }
        document.title = route.query.name
        const token = route.params.websocketUrl

        const rfb = new RFB(screen.value, `ws://192.99.37.28:8000/vnc-proxy/${token}`,{
            compressionLevel: 3,
            qualityLevel: 1,
            enableWebP: true
        })
        rfb.scaleViewport = true
        rfb.clipViewport = true
        
        rfb.addEventListener('disconnect', () => {
            window.close()
        })
    })
</script>