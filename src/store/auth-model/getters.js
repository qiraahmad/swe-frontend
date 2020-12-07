const getters={
   user(state){
       return state.user
   },

   isAuthenticate(state){
    return state.idToken !==null
   },

   errorShow(state){
       return state.message
   }
}
export default getters