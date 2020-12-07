<template>
   <div>
      <div style="text-align:center">
       <router-link class="home" active-class="active"  to="/" exact>
                <h3 >ClothMe</h3>
                  </router-link>
      <hr class="hr">
      <h6>The Simplest Place For You</h6>
      
       <router-link class="home" active-class="active"  to="/men" exact>
      <h1 class="men">MEN</h1>
       </router-link>
     </div>
    
   <transition  class="tran"
                enter-active-class="animated bounceInRight"
                mode="out-in">
                    <router-view></router-view>
                </transition>
   </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default {
  
    methods:{
        navigateToMen(){
           this.$router.push({path:'/men'})
        }
    },
  
}
</script>

<style scoped>
.tran{
  opacity: 3;
}
h3{
    font-family: 'Oswald', sans-serif;
}
h6{
font-family: 'Oswald', sans-serif;
}
.home{
    text-decoration: none;
    color: black
}
.men{
    text-decoration: line-through; text-decoration-color:#C6A8A2;
    font-size: 35px
}
</style>