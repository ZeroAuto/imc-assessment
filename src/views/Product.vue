<template>
  <div id="product">
    <a
      class="back-button"
      @click="handleBackButtonClick"
    >
      Back to Products
    </a>
    <div
      v-if="selectedProduct"
      class="product-container"
    >
      <div class="product-row">
        <span>Name: </span>
        <span class="product-name">
          {{ selectedProduct.ItemName }}
        </span>
      </div>
      <div class="product-row">
        <span>ID: </span>
        <span class="product-id">
          {{ selectedProduct.ItemID }}
        </span>
      </div>
      <div class="product-row">
        <span>Dimensions: </span>
        <span class="product-dimensions">
          {{ selectedProduct.Dimensions }}
        </span>
      </div>
      <div class="product-row">
        <span>Description: </span>
        <span class="product-description">
          {{ selectedProduct.Description }}
        </span>
      </div>
      <div class="product-row">
        <span>Base Price: </span>
        <span>
          ${{ selectedProduct.BasePrice }}
        </span>
      </div>
      <img
        class="product-photo"
        :src="imageUrl"
      />
    </div>
    <div v-else>
      No product found
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Product',

  data() {
    return {
      innerWidth: window.innerWidth,
      selectedProduct: null,
    }
  },

  computed: {
    imageUrl() {
      return `${this.selectedProduct.PhotoName}?width=${this.maxImageWidth}`
    },

    maxImageWidth() {
      return this.innerWidth > 500 ? 500 : this.innerWidth;
    },

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

    resizeHandler() {
      this.innerWidth = window.innerWidth;
    },
  },

  created() {
    window.addEventListener('resize', this.resizeHandler);
    this.loadProduct();
  },

  destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
  },
}
</script>

<style>
.back-button {
  cursor: pointer;
}

.product-container {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
}

.product-row {
  display: flex;
  flex-direction: row;
}

.product-photo {
  max-width: 500px;
}
</style>
