<template>
    <Header/>
    <MvInfoCard v-for="(vm, index) in mvStore.allMvs" :key="index" :state="vm.state" :name="vm.name" :type_name="vm.type_name"/>
</template>
<script setup>
import { useMvStore } from '../stores/mvStore'

import Header from '../components/layout/Header.vue'
import MvInfoCard from '../components/ui/MvInfoCard.vue'
import { onMounted } from 'vue'

const mvStore = useMvStore()

onMounted( async()=>{
    await mvStore.getAllVms()
})
</script>