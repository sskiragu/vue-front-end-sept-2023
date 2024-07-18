<script setup>
import { useUserStore } from '@/stores/user'
import { reactive, ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()

const userStore = useUserStore()

const user = reactive({
    email: 'john@gmail.com',
    password: '12345'
})

const login = async () => {
    try {
        axios.post('http://127.0.0.1:8000/api/login', user);
        userStore.isLoggedIn = true
        router.push('/dashboard');
    } catch (error) {
        
    }
}

</script>

<template>
  <v-sheet 
    class="mx-auto pa-12 mt-5" 
    max-width="500"
    elevation="12">
    <v-form
        @submit.prevent="login">
        <v-text-field
            label="Enter email"
            variant="outlined"
            v-model="user.email">
            
        </v-text-field>
        <v-text-field
            label="Enter password"
            variant="outlined"
            v-model="user.password">
            
        </v-text-field>
        <v-btn
            density="comfortable"
            rounded="sm"
            elevation="4"
            color="green"
            type="submit">Login</v-btn>
    </v-form>
  </v-sheet>
</template>