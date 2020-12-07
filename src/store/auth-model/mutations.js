const mutations={
    logUser (state, userData) {
        state.idToken = userData.token
        state.userId = userData.userId
        state.user=userData.email
      },
    clearAuthUser(state){
      state.idToken=null,
      state.userId=null
    },

    storeUser (state, userData) {
      state.user = userData.email
    },

    errorMessage(state,ero){
      state.message=ero
    }
}
export default mutations