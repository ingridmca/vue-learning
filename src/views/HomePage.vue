<template>
  <div class="about">
    <h1>Home Page</h1>
    <div>{{ products }}</div>
  </div>
</template>
<script>
import { getProducts } from "@/services/ProductService";

export default {
  created() {
    getProducts().then((response) => (this.products = response));
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>
