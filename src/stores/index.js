import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    products: [
      { id: 1, name: 'Product 1', price: 10, quantity: 1, imageUrl: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 2, name: 'Product 2', price: 15, quantity: 1, imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 3, name: 'Product 3', price: 20, quantity: 1, imageUrl: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      // Add more products as needed
    ],
    cart: [],
  }),

  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    cartItemCount(state) {
      return state.cart.reduce((total, product) => total + product.quantity, 0);
    },
  },

  actions: {
    addToCart(product) {
      const cartItem = this.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        const item = this.cart[index];
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.cart.splice(index, 1);
        }
      }
    },

    clearCart() {
      this.cart = [];
    },
  },
});

