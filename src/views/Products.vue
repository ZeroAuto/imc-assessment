<template>
  <div id="products-list">
    <div class="primary-header">
      <img :src="companyLogoUrl" />
      <span>{{ salesRep.CompanyName }}</span>
    </div>
    <div class="title">Product List</div>
    <div>Click on a product thumbnail view it's details</div>
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
          <img :src="`${product.PhotoName}?width=250&height=250`" />
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
      'manufacturerId',
      'products',
      'salesRep',
    ]),

    companyLogoUrl() {
      return `http://images.repzio.com/productimages/${this.manufacturerId}/logo${this.manufacturerId}_lg.jpg?width=100`
    },
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
}
.primary-header {
  display: flex;
  align-items: center;
}
</style>
