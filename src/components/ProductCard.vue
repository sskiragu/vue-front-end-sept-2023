<template>
    <v-card>
      <v-img :src="product.imageUrl" height="200" contain></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-text>
        Price: ${{ product.price }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="addToCart">Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useStore } from '@/stores';
  
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  
  const store = useStore();
  
  const addToCart = () => {
    store.addToCart(props.product);
  };
  </script>
  