<template>
  <div>
    <h1>Home Page</h1>
    <div v-for="product in products" :key="product.id" class="cards">
      <ProductLayout :product="product" />
    </div>
  </div>
</template>
<script>
import { getProducts } from "@/services/ProductService";
import ProductLayout from "@/components/ProductLayout.vue";

export default {
  async created() {
    const response = await getProducts();
    this.products = response;
  },
  data() {
    return {
      products: [],
    };
  },
  components: { ProductLayout },
};
</script>
<style>
.cards {
  display: flex;
}
</style>
