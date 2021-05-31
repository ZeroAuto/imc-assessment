<template>
  <div id="products-list">
    <img src="" />
    <div class="title">Product List</div>
    <div>Click on a product to view it's details</div>
    <div 
      v-if="products"
      class="product-list-container"
    >
      <div
        v-for="product in products"
        :key="product.ItemID"
        class="product-wrapper"
        @click="handleProductClick(product.ItemID)"
      >
        <div>
          {{ product.ItemName }}
        </div>
        <div>
          <img :src="`${product.PhotoName}?width=100`" />
        </div>
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

<style>
.product-wrapper {
  margin-top: 15px;
  cursor: pointer;
  text-align: center;
}
.product-list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
