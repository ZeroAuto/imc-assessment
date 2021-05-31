import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: Product,
  }
]

const router = new VueRouter({
  routes
})

export default router;
