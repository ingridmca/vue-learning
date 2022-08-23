<template>
  <div class="about">
    <h1>This is an about page</h1>
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
