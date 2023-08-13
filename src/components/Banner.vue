<template>
  <div class="pt-20 md:pt-28 pb-2 px-4 md:px-14 grid grid-cols-2 banner">
    <div
      class="capitalize col-span-1 flex flex-col justify-center italic pl-10 md:pl-28"
    >
      <span> everything </span>
      <span> in </span>
      <span> one place </span>
    </div>
    <div class="col-span-1 flex justify-center md:justify-end px-2 md:px-8">
      <img
        class="cursor-pointer h-28 md:h-80"
        src="../../public/images/how-ecommerce-works.png"
        alt="logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketPlaceBanner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.banner {
    color: #fff;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    font-family: "Playfair Display", sans-serif;
    font-size: 48px;
  }
  @media screen and (max-width: 500px) {
    .banner {
      font-size: 18px;
    }
  }
</style>
