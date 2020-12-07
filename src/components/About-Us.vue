<template>

  <div class="home">
  	<router-link active-class="active" to="/" exact>
    <img style="margin-left:410px;" src="../../public/img/logo.jpeg" class="center">
  	</router-link>
    <br>
     <div style="text-align:center">
      <h2>East Coast Pret</h2>
      <hr class="hr">
      <h5>Where contemporary fashion meets tradition🌷✨</h5>
      <br>
      <br>
     </div>

    <br>
      <br>
           
    <div class="jumbotron text-center  m-0">
          <h2>About Us</h2>
     <p>A high-street brand introduced by one of the largest names in the textile industry, Sapphire is celebrated for combining 100% pure fabric with unprecedented design aesthetic to create designer wear at an affordable price. </p>
         <p>
         Our range of clothing has something for everyone: Daily wear, party wear, formal wear, silk tunics, scarves and unstitched fabric. The overarching theme of the collections is providing affordable designer clothes to the masses.</p>
         <p>
         This meld of exquisite design and high class fabric has resulted in the breakthrough of this one of a kind retail brand. Sapphire’s commitment to quality fabric over the years has made it a household name, synonymous with excellence.
         </p>
         <p>
         We hope you enjoy wearing them as much we love making them for you! 
         </p>
          <router-link class="home" active-class="active"  to="/" exact>
          <button style="background-color:pink">
                <a style="background-color:pink" class="btn btn-lg" href="#" role="button" >Back to Home</a>
          </button>
         </router-link>
      </div>


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
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default {
  data () {
  return {
    publicPath: '/dist'
  }
  },


  
}

</script>

<style lang="scss">
@import '../../src/assets/css/home.css';


p {
  text-indent: 0px;
  text-transform: uppercase;
    text-align: left;

}

</style>
