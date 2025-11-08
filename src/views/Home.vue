<template>
    <Header />
    <div class="flex flex-col justify-center items-center h-screen" v-if="mvStore.loading">
        <Loading class="h-50"/>
    </div>
    <h1 class="text-4xl text-gray-700 font-medium mt-5 ml-5">Mis máquinas</h1>
    <Button class="mt-12 ml-5" @click="handleCreate">Crear Máquina Virtual</Button>
    <div class="flex mt-20 gap-5 justify-center md:justify-start md:ml-5 flex-row flex-wrap" v-if="!mvStore.loading">
        <MvCard v-for="(vm, index) in mvStore.mvs" :key="index" class=" mb-5 p-6" :state="vm.state" :name="vm.name" :type_name="vm.type_name" />
        <p class="mx-10" v-if="mvStore.mvs.length === 0"> No existen máquinas creadas aún</p>

        <Popup v-model="showWindow" >
            <h2 class="text-center font-bold text-2xl font-serif mb-10">CREAR MÁQUINA</h2>
            <form @submit.prevent="handleSubmit"> 
                <!-- <div class="flex gap-1 items-center mb-3 flex-col md:flex-row">
                    <LabelForm >Nombre:</LabelForm>
                    <InputForm v-model="v$.name.$model" type="text" placeholder="Nombre de tu máquina" required />
                </div> 
                <div v-if="v$.name.$error && v$.name.$dirty">
                    <MessageError v-if="v$.name.required.$invalid">el nombre es requerido.</MessageError>
                    <MessageError v-if="v$.name.minLength.$invalid">el nombre debe tener al menos 4 caracteres.</MessageError>
                </div> -->

                <div class="flex gap-1 items-center mb-3 flex-col md:flex-row">
                    <LabelForm >OS:</LabelForm>
                    <SelectForm v-model="v$.type.$model" :options="typeStore.types?.map((c) => ({ label: c.name, value: c.id, image: c.image }))" placeholder="selecciona un tipo"/>
                </div>
                <div v-if="v$.type.$error && v$.type.$dirty">
                    <MessageError v-if="v$.type.required.$invalid">el tipo de máquina es requerido.</MessageError>
                </div>

                <Button class="h-13 w-50 mt-10" type="submit">Crear Máquina</Button>
            </form>
        </Popup>

        <Popup v-model="mvStore.provisionLoading" :close-to-click="false">
        <div class="flex flex-col items-center">
            <Loading class="h-20"/>
            <h3>Por favor espere un momento mientras creamos su máquina...</h3>
        </div>
        </Popup>

        <Popup v-model="hasError" :close-to-click="false">
            <div class="flex flex-col items-center">
                <h3>Lo sentimos tenemos un error:</h3>
                <p>{{ mvStore.error }}</p>
                <img src="/images/error.png" alt="" class="h-10 my-5"/>
                <Button @click="mvStore.error = null">Ok</Button>
            </div>
        </Popup>
            
    </div>
</template>
<script setup>
    import { onMounted, ref, reactive, computed} from 'vue'
    import useVuelidate from '@vuelidate/core'
    import { required, minLength } from '@vuelidate/validators'
    import { useMvStore } from '../stores/mvStore'
    // import { useNovncStore } from '../stores/novncStore'
    import { useAuthStore } from '../stores/authStore'
    import { useTypeStore } from '../stores/typeStore'

    import MessageError from '../components/form/MessageError.vue'
    import Header from '../components/layout/Header.vue'
    import MvCard from '../components/ui/MvCard.vue'
    import Button from '../components/ui/Button.vue'
    import Popup from '../components/ui/Popup.vue'
    import LabelForm from '../components/form/LabelForm.vue'
    import Loading from '../components/ui/Loading.vue'
    // import InputForm from '../components/form/InputForm.vue'
    import SelectForm from '../components/form/SelectForm.vue'

    const mvStore = useMvStore()
    // const novncStore = useNovncStore()
    const authStore = useAuthStore()
    const typeStore = useTypeStore()
    
    const showWindow = ref(false)
        const hasError = computed(() => !!mvStore.error)
    const userId = ref(null)
    // const websocketUrl = ref("")

    const formData = reactive({
        // name: '',
        type: '',
    })

    const rules = computed(() => ({
        // name: {
        //     required,
        //     minLength: minLength(4)
        // },
        type: {
            required,
        },
    }));

    const v$ = useVuelidate(rules, formData)

    const handleSubmit = async ( ) => {
        v$.value.$touch()
        if (v$.value.$invalid) return
        await mvStore.provisionVm(userId.value, String(formData.type) )
        showWindow.value = false
    }

    const handleCreate = () => {
        showWindow.value = true
        typeStore.getAllTypes()
    }

    onMounted( async () => {
        userId.value = authStore.current_user?.id
        await mvStore.getVmsUser(userId.value)
    })
</script>