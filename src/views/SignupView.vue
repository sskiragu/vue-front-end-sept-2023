<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios';

const user = reactive({
    name: 'john',
    email: 'john@gmail.com',
    password: '12345'
})

const signup = async () => {
    try {
        axios.post('http://127.0.0.1:8000/api/signup', user);
        console.log("User successfully registred");
    } catch (error) {
        console.log("Failed");
    }
}

</script>

<template>
  <v-sheet 
    class="mx-auto pa-12 mt-5" 
    max-width="500"
    elevation="12">
    <v-form
        @submit.prevent="signup">
        <v-text-field
            label="Enter username"
            variant="outlined"
            v-model="user.name">
            
        </v-text-field>
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
            type="submit">Signup</v-btn>
    </v-form>
  </v-sheet>
</template>