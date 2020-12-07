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
           
<div class="sidenav">
<br>
<br>
<br>
<br> <br>
   <a href="/orders">My Orders</a>
  <a href="/address">My Addresses</a>
  <a href="/account-info">Account Information</a>
  <a href="/wishlist">My Wishlist</a>
</div>  

      <div class="row" style="margin-left:100px; width:2800px">
  <div class="column">
    <div class="card">
<h1>Contact Information</h1>

  <label for="username">Full Name:</label>
  <input type="text" id="username" name="username" required>
    <label for="username">Mobile Number: </label>
  <input type="text" id="username" name="username" required>
<br>
  <h1>Address</h1>
    <label for="username">Street Address: </label>
  <input type="text" id="username" name="username" required>
      <label for="username">Country: </label>
  <input type="text" id="username" name="username" required>
      <label for="username">State/Province: </label>
  <input type="text" id="username" name="username" required>
        <label for="username">City  </label>
  <input type="text" id="username" name="username" required>
  <br>
     <button style="background-color:pink;">
                <a style="background-color:pink; margin-left:20px" class="btn btn-lg" href="/" role="button" >Save Address</a>
          </button>

       </div>
  </div>
  </div>
  <br>


          <button style="background-color:pink; margin-left:580px">
                <a style="background-color:pink;" class="btn btn-lg" href="/" role="button" >Back to Home</a>
          </button>


    <br> <br> <br> 
<div>
  <hr>
      <nav class="nav nav-pills nav-justified mt-2 mb-4">
     <a class="nav-item nav-link" style="margin-left:120px"><span><strong>© 2020 East Coast Pret</strong></span></a>
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
