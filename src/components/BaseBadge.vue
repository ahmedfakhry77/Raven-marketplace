<template>
  <div 
  :class="[ badgeType == 'New' ? 'bg-schemeSecondary-green' : 'bg-schemeSecondary-sky']"
  class="w-12 h-12 rounded-full flex justify-center items-center text-white">
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
