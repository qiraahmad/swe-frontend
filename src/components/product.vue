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

      <!-- Left Column / Headphones Image -->
  <div class="left-column" style="margin-left:600px">
    <img data-image="red" class="active" src="../../public/img/item-3.jpg" alt="" style="width:60%; height:110%; margin-left:-400px">
 
 
  <!-- Right Column -->
  <div class="right-column" style="margin-left:200px">
 
    <!-- Product Description -->
    <div class="product-description">
      <span>Formals</span>
      <h1>Moonlight</h1>
      <p>Feeling unsure about what to wear to the upcoming intimate wedding reception? This gorgeously adorned jacquard ensemble encrusted in green hue will be a perfect choice.</p>
    </div>
 
    <!-- Product Configuration -->
    <div class="product-configuration">
 
      <!-- Product Color -->
      <div class="cable-choose">
        <span>Color     </span><br>
  <input type="button" style="background-color: #661f45; width:55px; margin-top:10px" data-hex="#661f45">
  &nbsp;&nbsp;&nbsp;
    <input type="button" style="background-color: #008000; width:55px; margin-top:10px" data-hex="#008000">

      </div>
 
      <!-- Cable Configuration -->
      <div class="cable-config">
        <span>Sizes Available</span>
 
        <div class="cable-choose">
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>Custom Size</button>
        </div>
       </div>

      <a class="cart-btn" href="/" role="button">Add To Wishlist</a>
      

          <br><br>
    </div>
 
    <!-- Product Pricing -->
    <div class="product-price">
      <span>Rs 4799</span>
      <a href="#" class="cart-btn">Add to cart</a>
    </div>
  </div>
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

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
 
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}

/* Columns */
.left-column {
  width: 65%;
  position: relative;
}
 
.right-column {
  width: 35%;
  margin-top: 60px;
}

/* Left Column */
.left-column img {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
}
 
.left-column img.active {
  opacity: 1;
}

/* Product Description */
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}

/* Product Color */
.product-color {
  margin-bottom: 30px;
}
 
.color-choose div {
  display: inline-block;
}
 
.color-choose {
  display: none;
}
 
.color-choose + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
}
 
.color-choose + label span {
  border: 2px solid #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.33);
}
 
.color-choose  + label span {
  background-color: #C91524;
}
.color-choose + label span {
  background-color: #314780;
}
.color-choose  + label span {
  background-color: #323232;
}
 
.color-choose input:checked + label span {
  background-repeat: no-repeat;
  background-position: center;
}

/* Cable Configuration */
.cable-choose {
  margin-bottom: 20px;
}
 
.cable-choose button {
  border: 2px solid #E1E8EE;
  border-radius: 6px;
  padding: 13px 20px;
  font-size: 14px;
  color: #5E6977;
  background-color: #fff;
  cursor: pointer;
  transition: all .5s;
}
 
.cable-choose button:hover,
.cable-choose button:active,
.cable-choose button:focus {
  border: 2px solid #86939E;
  outline: none;
}
 
.cable-config {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
 
.cable-config a {
  color: #358ED7;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  margin: 10px 0;
  display: inline-block;
}
.cable-config a:before {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid rgba(53, 142, 215, 0.5);
  display: inline-block;
  text-align: center;
  line-height: 16px;
  opacity: 0.5;
  margin-right: 5px;
}

/* Product Price */
.product-price {
  display: flex;
  align-items: center;
}
 
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
 
.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}

.foo {
  float: left;
  width: 20px;
  height: 20px;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, .2);
}

.blue {
  background: #13b4ff;
}

.purple {
  background: #ab3fdd;
}

.wine {
  background: #ae163e;
}

/* Responsive */
@media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }
 
  .left-column,
  .right-column {
    width: 100%;
  }
 
  .left-column img {
    width: 300px;
    right: 0;
    top: -65px;
    left: initial;
  }
}
 
@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    top: -85px;
  }
}



</style>
