<template>
    <div>
      <v-btn icon @click="dialog = true">
        <v-badge :content="cartItemCount" color="red">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
  
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            Cart
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="item in cart"
                :key="item.id"
              >
                <v-list-item-avatar>
                  <v-img :src="item.imageUrl"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>Price: ${{ item.price }}</v-list-item-subtitle>
                  <v-list-item-subtitle>Quantity: {{ item.quantity }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="removeFromCart(item.id)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-btn icon @click="addToCart(item)">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <p>Total: ${{ cartTotal }}</p>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="clearCart">Clear Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useStore } from '@/stores';
  
  const store = useStore();
  const dialog = ref(false);
  
  const cart = computed(() => store.cart);
  const cartItemCount = computed(() => store.cartItemCount);
  const cartTotal = computed(() => store.cartTotal);
  // const cartTotal = store.cartTotal;

  
  const addToCart = (product) => {
    store.addToCart(product);
  };
  
  const removeFromCart = (productId) => {
    store.removeFromCart(productId);
  };
  
  const clearCart = () => {
    store.clearCart();
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  