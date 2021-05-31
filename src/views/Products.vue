<template>
  <div id="products-list">
    <div v-if="products">
      <div
        v-for="product in products"
        :key="product.ItemID"
        class="product-wrapper"
        @click="handleProductClick(product.ItemID)"
      >
        {{ product.ItemName }}
      </div>
    </div>

    <div v-else>
      Loading Products...
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Products',

  created() {
    this.fetchProducts();
  },

  computed: {
    ...mapState([
      'products',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchProducts',
    ]),

    handleProductClick(productId) {
      this.$router.push({ path: `/products/${productId}`});
    },
  },
}
</script>
