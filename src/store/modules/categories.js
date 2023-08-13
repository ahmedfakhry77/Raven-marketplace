const state = {
  categories: [],
};

const getters = {
  getCategories(state) {
    return state.categories;
  },
};
const mutations = {
  setCategories: (state, categories) => (state.categories = categories),
};
const actions = {
  fetchCategories({ commit }, ) {
    let categories = [
      {
        id: 1 ,
        Name: "Computers",
        img: "/images/categories/Computer.png"
      },
      {
        id: 2 ,
        Name: "Women Watches",
        img: "/images/categories/womenWatches.png"
      },
      {
        id: 3 ,
        Name: "Men Watches",
        img: "/images/categories/menWatches.png"
      },
      {
        id: 4 ,
        Name: "Electronics",
        img: "/images/categories/electronics.png"
      },
      {
        id: 5 ,
        Name: "Shoes",
        img: "/images/categories/shoes.png"
      },
      {
        id: 6 ,
        Name: "Mobile Phones",
        img: "/images/categories/phone.png"
      },
      {
        id: 7 ,
        Name: "Laundry Detergent",
        img: "/images/categories/LaundryDetergent.png"
      },
      {
        id: 8 ,
        Name: "Televisions",
        img: "/images/categories/Televisions.png"
      },
      {
        id: 9 ,
        Name: "Groceries",
        img: "/images/categories/Groceries.png"
      },
      {
        id: 10 ,
        Name: "Cameras",
        img: "/images/categories/cameras.png"
      },
      
    ];
    commit("setCategories", categories);
  },
};

export default {
  namespaced: true,
  name: "categories",
  state,
  getters,
  actions,
  mutations,
};
