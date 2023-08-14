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
      <slide v-for="(category, index) in getCategories" :key="index">
        <div
          class="rounded-xl bg-white shadow my-2 p-2 py-4 flex flex-col z-10 justify-center mx-auto w-24 md:w-36 font-semibold cursor-pointer"
        >
          <div
            class="h-12 w-12 md:h-20 md:w-20 m-auto flex justify-center items-center"
          >
            <figure class="relative">
              <img
                :src="category.img"
                class="max-h-12 max-w-12 md:max-h-20 md:max-w-20"
              />
            </figure>
          </div>
          <p class="text-xs md:text-xl truncate mt-1 text-center">
            {{ category.Name }}
          </p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MarketPlaceCategoriesCarousel",
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
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["fetchCategories"]),
  },
  computed: {
    ...mapGetters("categories", ["getCategories"]),
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

<style>
.category_carousel .VueCarousel-dot:first-of-type {
  border-top-left-radius: 15px !important;
  border-bottom-left-radius: 15px !important;
}
.category_carousel .VueCarousel-dot:last-of-type {
  border-top-right-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
}
.VueCarousel-dot {
  border-radius: 0px !important;
  margin: 0 !important;
  margin-top: 25px !important;
  width: 25px !important;
}
.VueCarousel-dot--active {
  border-radius: 15px !important;
  margin: 0 !important;
  margin-top: 25px !important;
  width: 25px !important;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  position: absolute;
  top: 47% !important;
  transform: translateY(-50%) !important;
  border-radius: 50%;
  padding: 15px !important;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.55),
    rgba(255, 255, 255, 0.75)
  ) !important;
  background-color: rgba(255, 255, 255, 0.55) !important;
  backdrop-filter: blur(10px);
  color: #021da5 !important;
  transition-duration: 0.5s;
}
.VueCarousel-navigation-button[data-v-453ad8cd]:hover {
  background-color: #021da5 !important;

  background-image: none !important;
  color: #ffffff !important;
}
.VueCarousel-navigation-next[data-v-453ad8cd] {
  right: -10px !important;
}
.VueCarousel-navigation-next[data-v-453ad8cd]:hover {
  right: -20px !important;
}
.VueCarousel-navigation-prev[data-v-453ad8cd] {
  left: -10px !important;
}
.VueCarousel-navigation-prev[data-v-453ad8cd]:hover {
  left: -20px !important;
}
.headerSection {
  flex: 0 1 auto;
}
.content {
  flex: 1 1 40px;
}
.categoriesHeight {
  min-height: 100px !important;
}
.scrollbar::-webkit-scrollbar {
  width: 12px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #fcfcfc;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #dce2f9;
}
</style>
