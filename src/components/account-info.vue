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

      <div class="row" style="margin-left:200px; width:2000px">
  <div class="column">
    <div class="card">
<h1>Account Information</h1>

  <label for="username">Full Name:</label>
  <input type="text" id="username" name="username" required>
    <label for="username">Date of Birth: </label>
  <input type="date" id="username" name="username" required>
<br>
     <label for="g">Gender:</label>
  <select name="g" id="g">
    <option value="M">Male</option>
    <option value="F">Female</option>
    <option value="NA">Not specified </option>
  </select>
<br>
    <input type="checkbox" id="e1" name="e1">
  <label for="e1" style="margin-left:-300px; margin-top:-20px"> Change Email </label><br>
  <input type="checkbox" id="p2" name="p2">
  <label for="password" style="margin-left:-285px; margin-top:-20px"> Change Password </label>
  
  <br>
     <button style="background-color:pink;">
                <a style="background-color:pink; margin-left:20px" class="btn btn-lg" href="/" role="button" >Save Information</a>
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
