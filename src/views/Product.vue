<template>
  <div id="product">
    <div @click="handleBackButtonClick">
      Back
    </div>
    <div v-if="selectedProduct">
      {{ selectedProduct.ItemName }}
    </div>
    <div v-else>
      No product found
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Product',

  data() {
    return {
      selectedProduct: null,
    }
  },

  computed: {
    ...mapState([
      'products',
    ]),

    productId() {
      return this.$route.params.id;
    },
  },

  methods: {
    ...mapActions([
      'fetchProduct',
    ]),

    async loadProduct() {
      this.selectedProduct = await this.fetchProduct(this.productId);
    },

    handleBackButtonClick() {
      this.$router.push({path: '/products'});
    },
  },

  created() {
    this.loadProduct();
  },
}
</script>
