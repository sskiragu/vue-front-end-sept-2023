<script setup>
import { useUserStore } from '@/stores/user'
import { RouterLink, RouterView, useRouter } from 'vue-router';
import CartIcon from './components/CartIcon.vue';
import { computed, ref } from 'vue';
import axios from 'axios';

const userStore = useUserStore()
const isLoggedIn = computed(() => userStore.isLoggedIn )

// Ref for controlling the drawer
const drawer = ref(false);

const router = useRouter()

const logout = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/api/logout');
    userStore.isLoggedIn = false
    router.push('/')
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <v-app>
    <v-app-bar app color="green" dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My E-commerce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-show="!isLoggedIn">
        <v-btn text :to="{ path: '/' }">Products</v-btn>
        <v-btn text :to="{ path: '/about' }">About</v-btn>
        <v-btn text :to="{ path: '/services' }">Services</v-btn>
        <v-btn text :to="{ path: '/contacts' }">Contacts</v-btn>
        <v-btn text :to="{ path: '/login' }">Login</v-btn>
        <v-btn text :to="{ path: '/signup' }">Signup</v-btn>
      </v-toolbar-items>
      <CartIcon v-show="!isLoggedIn"/>
      {{ isLoggedIn }}
      <v-btn text @click="logout" v-show="isLoggedIn">Logout</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item link :to="{ path: '/' }">
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/about' }">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/services' }">
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/contacts' }">
          <v-list-item-title>Contacts</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/login' }">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/signup' }">
          <v-list-item-title>Signup</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.hidden-sm-and-down {
  display: none;
}

@media (min-width: 960px) {
  .hidden-sm-and-down {
    display: flex;
  }
}
</style>
