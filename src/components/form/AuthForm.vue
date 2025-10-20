<template>
    <div class="border border-gray-300 px-7 py-4 rounded-2xl shadow-2xl md:w-6/12 lg:w-4/12 md:h-100">
        <h2 class="text-center font-bold text-2xl font-serif mb-10">{{ mode === 'register' ? 'REGISTRAR SU CUENTA' : 'INICIAR SESIÓN' }}</h2>
        <form class ="flex flex-col gap-4 items-center h-full" @submit.prevent="handleSubmit">

            <div class="flex gap-1 items-center mb-3 flex-col md:flex-row" v-if="mode === 'register'">
                <LabelForm for="email">Nombre:</LabelForm>
                <InputForm type="text" id="nombre" v-model="v$.name.$model" placeholder="Ingrese su nombre" required />
            </div>
            <div v-if="v$.name.$error && v$.name.$dirty">
                <MessageError v-if="v$.name.required.$invalid">el nombre es requerido.</MessageError>
                <MessageError v-if="v$.name.minLength.$invalid">el nombre debe tener al menos 3 caracteres.</MessageError>
            </div>

            <div class="flex gap-1 items-center mb-3 flex-col md:flex-row">
                <LabelForm for="email">Correo:</LabelForm>
                <InputForm type="email" id="email" v-model="v$.email.$model" placeholder="Ingrese su correo electrónico" required />
            </div>
            <div v-if="v$.email.$error && v$.email.$dirty">
                <MessageError v-if="v$.email.required.$invalid">el correo es requerido.</MessageError>
                <MessageError v-if="v$.email.emailValidator.$invalid">el correo no es válido.</MessageError>
            </div>

            <div class="flex gap-1 items-center flex-col md:flex-row">
                <LabelForm for="password">Contraseña:</LabelForm>
                <InputForm type="password" id="password" v-model="v$.password.$model" placeholder="Ingrese su contraseña" required />
            </div>
            <div v-if="v$.password.$error && v$.password.$dirty">
                <MessageError v-if="v$.password.required.$invalid">la contraseña es requerida.</MessageError>
                <MessageError v-if="v$.password.minLength.$invalid">la contraseña debe tener al menos 6 caracteres.</MessageError>
            </div>
            
            <div class=" w-full flex flex-col items-center">
                <Button type="submit" :class="'h-13 mt-10 '">{{ mode === 'register' ? 'REGISTRATE' : 'INGRESAR' }}</Button>
            </div>
        </form>
        <p class="mt-4 text-center">
            {{ mode === 'register' ? '¿ya tienes una cuenta?' : '¿no tienes una cuenta?' }}
            <router-link :to="mode === 'register' ? '/login' : '/register'" class="text-primary font-bold hover:underline" >{{ mode === 'register' ? 'Inicia sesión' : 'Regístrate' }}</router-link>
        </p>
    </div>

</template>

<script setup>
    import useVuelidate from '@vuelidate/core'
    import { required, minLength, email as emailValidator } from '@vuelidate/validators'

    import { reactive, watch, computed } from 'vue'

    import InputForm from './InputForm.vue'
    import LabelForm from './LabelForm.vue'
    import Button from '../ui/Button.vue'
    import MessageError from './MessageError.vue'
    
    const props = defineProps({
        mode:{
            type: String,
            required: true,
            default: "login"
        },
        messageError:{
            type: String,
            required: false,
            default: null
        }
    })

    const emit = defineEmits(["submit"])


    const formData = reactive({
        name: '',
        email: '',
        password: ''
    })

    const rules = computed(() => ({
        name: props.mode === 'register' ? { required, minLength: minLength(3) } : {},
        email: {
            required,
            emailValidator,
        },
        password: {
            required,
            minLength: minLength(6),
        },
    }));

    const v$ = useVuelidate(rules, formData)

    const handleSubmit = async () => {
        const isFormCorrect = await v$.value.$validate()
        if (!isFormCorrect) {
            return
        }

        if (props.mode === "register") {
            emit("submit", { name: formData.name, email: formData.email, password: formData.password })
        } else {
            emit("submit", { email: formData.email, password: formData.password })
        }
    }


    watch(() => props.mode, () => {
        formData.name = ''
        formData.email = ''
        formData.password = ''
        v$.value.$reset()
    });

</script>