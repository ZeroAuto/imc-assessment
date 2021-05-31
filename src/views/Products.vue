<template>
  <div class="products">
    <div v-if="products">
      <div
        v-for="product in products"
        :key="product.ItemID"
      >
        {{ product.ItemName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',

  data() {
    return {
      products: null,
    }
  },

  created() {
    this.loadProducts();
  },

  methods: {
    async loadProducts() {
      this.products = await this.$store.dispatch('fetchProducts');
    },
  },
}
</script>
