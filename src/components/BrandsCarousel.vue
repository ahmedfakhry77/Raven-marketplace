<template>
  <div class="px-8 md:px-20 my-4">
    <carousel
      class="category_carousel w-full"
      :scrollPerPage="true"
      :paginationEnabled="false"
      :loop="true"
      :paginationActiveColor="'#021da5'"
      :perPage="itemsCategories"
      :touchDrag="true"
      :centerMode="true"
      :navigationEnabled="true"
      :navigationNextLabel="next"
      :navigationPrevLabel="prev"
      :speed="800"
    >
      <slide v-for="(brand, index) in getBrands" :key="index">
        <div
          class="rounded-xl  shadow my-2 p-2 py-4 flex flex-col z-10 justify-center mx-auto w-24 md:w-36 font-semibold cursor-pointer"
        >
          <div
            class="h-12 w-12 md:h-20 md:w-20 m-auto flex justify-center items-center"
          >
            <figure class="relative">
              <img
                :src="brand.img"
                class="max-h-12 max-w-12 md:max-h-20 md:max-w-20"
              />
            </figure>
          </div>
          <!-- <p class="text-xs md:text-xl truncate mt-1 text-center">
            {{ brand.Name }}
          </p> -->
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MarketPlaceBrandsCarousel",

  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      next: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>`,
      prev: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>`,
    };
  },

  mounted() {},
  created() {
    this.fetchBrands();
  },
  methods: {
    ...mapActions("brands", ["fetchBrands"]),
  },
  computed: {
    ...mapGetters("brands", ["getBrands"]),
    itemsCategories() {
      if (window.innerWidth < 768) {
        return (window.innerWidth / 100).toFixed(0) - 1;
      } else {
        return 8;
      }
    },
  },
};
</script>
