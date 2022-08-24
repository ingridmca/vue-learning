<template>
  <router-link
    class="event-link"
    :to="{ name: 'product-details', params: { id: product.id } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow"> {{ product.rating }}</span>
      <h4 class="title">{{ product.title }}</h4>
      <div class="flex-text-image">
        <img :src="product.mainImage" class="image" />
        <div class="text">{{ product.description }}</div>
      </div>

      <div></div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
  width: 800px;
}
.image {
  width: 150px;
  height: 180px;
}
.flex-text-image {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.text {
  width: 450px;
}
</style>
