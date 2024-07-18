<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue'; // Assuming you create a separate component for the card
import { useStore } from '@/stores';

const store = useStore();
const products = ref(store.products);
</script>
