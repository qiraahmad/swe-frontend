<template>
    <div>
    <router-link class="home" active-class="active"  to="/" exact>
       <img style="margin-left:410px;" src="../../../public/img/logo.jpeg"  class="center">
</router-link>

      <div style="text-align:center">
       <router-link class="home" active-class="active"  to="/" exact>
                <h3 >East Coast Pret</h3>
                  </router-link>
      <hr class="hr">
      <h8>Where contemporary fashion meets tradition🌷✨</h8>
     
       <br><br>
       <router-link class="home" active-class="active"  to="/collections" exact>
      <h1 class="women">ALL COLLECTIONS</h1>
       </router-link>
     </div>
    
   <transition  class="tran"
                enter-active-class="animated bounceInRight"
                mode="out-in">
                    <router-view></router-view>
                </transition>


    <br> <br> <br> 
<div>
  <hr>
      <nav class="nav nav-pills nav-justified mt-2 mb-4">
     <a class="nav-item nav-link"><span><strong>© 2020 East Coast Pret</strong></span></a>
     <a class="nav-item nav-link"><span><strong>eastcoastpret@gmail.com</strong> </span></a>
     <a class="nav-item nav-link"><span><strong>+92 333 3421213</strong></span></a>
     <a class="nav-item nav-link"><span><strong>Lahore, Pakistan</strong></span></a> 
   </nav>
</div>
   </div>
</template>

<script>
export default {
  
    methods:{
        navigateToWomen(){
           this.$router.push({path:'/women'})
        }
    },
  
}
</script>

<style  scoped>
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
    color: black;
}
.women{
   text-decoration: line-through; text-decoration-color:#C6A8A2;
    font-size: 35px
}

.women:hover{
    opacity: 1;
    font-size: 35px
}
</style>