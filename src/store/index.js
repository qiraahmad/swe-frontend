import Vue from 'vue'
import Vuex from 'vuex'
import storeAuth from './store-auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    itemsCart:[],
    totalPrice:0,
  },
  modules:{
    storeAuth
  },
  mutations: {
    'BuyItem'(state, {itemId, itemTitle, itemPrice,img,itemSize,itemCatg,itemGender}) {
          state.itemsCart.push({
              id: itemId,
              title:itemTitle,
              price:itemPrice,
              size:itemSize,
              catg:itemCatg,
              gender:itemGender,
              img:img
          });
          state.totalPrice=state.totalPrice+itemPrice
      //state.funds -= stockPrice * quantity;
    },

    'RemoveItem'(state,removeId){
      const itemsCart=state.itemsCart
      const itemFound = state.itemsCart.find(item => item.id === removeId)
      itemsCart.splice(itemsCart.indexOf(itemFound),1)
 
      if(state.itemsCart.length==0){
        state.totalPrice=0
      }
      else{
        state.totalPrice= state.totalPrice -itemFound.price 
      }
    }
  },
  actions: {
    buyItem: ({commit}, order) => {
      commit('BuyItem', order);
    },

    removeItem:({commit},removeId)=>{
      commit('RemoveItem',removeId)
    },
  },
  
  getters:{
        itemsCart (state, getters) {
          return state.itemsCart
    },

      totalPrice(state,getters){
        return state.totalPrice
      }
}
})
