import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [
        {id: 1, name: 'Bakso', price: '10000', img: require('@/assets/images/foods/bakso.jpg')},
        {id: 2, name: 'Mie Goreng', price: '8000', img: require('@/assets/images/foods/mie-goreng.jpg')},
        {id: 3, name: 'Sate Ayam', price: '15000', img: require('@/assets/images/foods/sate-ayam.jpg')}
    ],
    FoodOrder: [],
    FoodCart: []
  },
  getters: {
    getFoodOrder (state) {
      return state.FoodOrder
    },
    getFoodCart (state) {
      return state.FoodCart
    }
  },
  mutations: {
    saveFoodById (state, payload) {
      state.FoodOrder.push(payload)
    },
    saveOrder (state, payload) {
      state.FoodCart.push(payload)
    },
    deleteCart(state, payload) {
      for(let i = 0; state.FoodCart.length; i++) {
        if(state.FoodCart[i].id === payload) {
          state.FoodCart.splice(i, 1);
          break;
        }
      }
    },
  },
  actions: {
    selectFoodById ({commit}, payload) {
      commit('saveFoodById', payload)
      router.push({ path: `/food-detail/${payload.id}` });
    },
    setOrder({commit}, payload) {
      if (payload.order_quantity) {
        commit('saveOrder', payload)
        router.push( {path: '/food-cart'});
      } else {
        console.log('error')
      }
    },
    deleteCart(store,payload) {
      store.commit('deleteCart', payload)
    },
  },
  plugins: [createPersistedState({
    key: 'foods',
    paths: ['FoodOrder', 'FoodCart']
  })]
})
