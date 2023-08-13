<template>
  <div class="home pb-20">
    <Banner />
    <div class="w-full text-xl md:text-4xl text-center my-8 font-semibold">
      Explore Popular Categories
    </div>
    <CategoriesCarousel />
    <div class="w-full text-xl md:text-4xl text-center my-8 font-semibold">
      New Arrivals
    </div>
    <div class="px-8 md:px-20 my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import CategoriesCarousel from '@/components/CategoriesCarousel.vue';
import ProductCard from '@/components/ProductCard.vue';
export default {
  name: "HomeView",
  components: {
    Banner,
    CategoriesCarousel,
    ProductCard,
  },
};
</script>
<style>

</style>
