const state = {
    brands: [],
  };
  
  const getters = {
    getBrands(state) {
      return state.brands;
    },
  };
  const mutations = {
    setBrands: (state, brands) => (state.brands = brands),
  };
  const actions = {
    fetchBrands({ commit }, ) {
      let brands = [
        {
          id: 1 ,
          Name: "All Day Supermarket",
          img: "/images/brands/AllDay_Supermarket.png"
        },
        {
          id: 2 ,
          Name: "Zara",
          img: "/images/brands/Zara.png"
        },
        {
          id: 3 ,
          Name: "Apple",
          img: "/images/brands/Apple.png"
        },
        {
          id: 4 ,
          Name: "KMarket",
          img: "/images/brands/KMarket.png"
        },
        {
          id: 5 ,
          Name: "Joy Mart",
          img: "/images/brands/JoyMart.png"
        },
        {
          id: 6 ,
          Name: "Bruno's",
          img: "/images/brands/Bruno's.png"
        },
        {
          id: 7 ,
          Name: "Prada",
          img: "/images/brands/Prada.png"
        },
        {
          id: 8 ,
          Name: "Hashesho",
          img: "/images/brands/Hashesho.png"
        },
        {
          id: 9 ,
          Name: "Al Kenz",
          img: "/images/brands/AlKenz.png"
        },
        {
          id: 10 ,
          Name: "Al Fath",
          img: "/images/brands/AlFath.png"
        },
        {
            id: 11 ,
            Name: "Al Magd",
            img: "/images/brands/AlMagd.png"
          },
        
      ];
      commit("setBrands", brands);
    },
  };
  
  export default {
    namespaced: true,
    name: "brands",
    state,
    getters,
    actions,
    mutations,
  };
  