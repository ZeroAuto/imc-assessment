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
    this.loadProducts();
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

    loadProducts() {
      this.fetchProducts();
    },
  },
}
</script>
