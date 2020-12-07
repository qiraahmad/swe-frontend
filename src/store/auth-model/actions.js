import axios from '../../axios-auth.js'
import router from '../../router'
import globalAxios from 'axios'
import 'firebase'//
require('dotenv').config()
const api=process.env.VUE_APP_API
const actions={
    register ({commit, dispatch}, userData) {
        axios.post(`/accounts:signUp?key=${api}`, {
          email:userData.email,
          password:userData.password,
          returnSecureToken:true
       })
          .then(res => {
            router.push({path:'/'})
            console.log(res)
            commit('logUser', userData)
            const date=new Date()
            const expire= new Date(date.getTime()+ res.data.expiresIn * 1000)
            localStorage.setItem('token',res.data.idToken)
            localStorage.setItem('userId',res.data.localId)
            localStorage.setItem('email',res.data.email)
            localStorage.setItem('expire',expire) 
            dispatch('storeUser',userData) // thats right after the user has created we want to store it in our database
            dispatch('storeUser',userData)
          })
          .catch(error => {
            const message=error.response.data.error.message
            const ero=message
            console.log(ero)
            commit('errorMessage',ero)
          })
      },
  

      storeUser ({commit, state}, userData) { // for store our user in our own database 
        if (!state.idToken) {
          return
        }
        globalAxios.post('/users.json' + '?auth=' + state.idToken, userData) // the ?auth= is for sending the token in backend
          .then(res => console.log(res))
          .catch(error => console.log(error))
        
      },
  

      
      login ({commit,dispatch},userData) {
        axios.post(`/accounts:signInWithPassword?key=${api}`, {
          email:userData.email,
          password:userData.password,
          returnSecureToken:true
      })
      .then(res => {
        router.push({path:'/'})
        console.log(res)
        commit('logUser', userData)
        const date=new Date()
        const expire= new Date(date.getTime()+ res.data.expiresIn*1000)
        localStorage.setItem('token',res.data.idToken)
        localStorage.setItem('userId',res.data.localId)
        localStorage.setItem('email',res.data.email)
        localStorage.setItem('expire',expire) 
        dispatch('storeUser',userData)
        
      })
        .catch(error => {
          console.log(error.message)
          commit('errorShow',error)
        })
      },
      
      AutoLogin({commit}){
        const token=localStorage.getItem('token')
        if(!token){
          return
        }
        const expire=localStorage.getItem('expire')
        const date=new Date() // now we need to check if const expire is still valid
        if(date >= expire){
          return
        }
        const email=localStorage.getItem('email')
        const userId= localStorage.getItem('userId')
        commit('logUser',{
          token:token,
          userId:userId,
          email:email
        })
      },


      logout({commit},userData ){
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('expire')
        commit('clearAuthUser')
        router.push('/login')
      },
  
  
}
export default actions