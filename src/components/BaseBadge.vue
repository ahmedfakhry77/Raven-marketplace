<template>
  <div 
  :class="[ badgeType == 'New' ? 'bg-schemeSecondary-green' : 'bg-schemeSecondary-sky']"
  class=" w-9 h-9 md:w-12 md:h-12 rounded-full flex justify-center items-center text-white text-xs md:text-base z-10">
    {{ badgeType }}
  </div>
</template>

<script>
export default {
  name: "MarketPlaceBaseBadge",
  props: {
    badgeType: {
      type: String,
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
