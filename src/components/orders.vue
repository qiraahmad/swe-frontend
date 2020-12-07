<template>

  <div class="home">
  	<router-link active-class="active" to="/" exact>
    <img style="margin-left:410px;" src="../../public/img/logo.jpeg" class="center">
  	</router-link>
    <br>
     <div style="text-align:center">
     <br>
      <h2>East Coast Pret</h2>
      <hr class="hr">
      <h5>Where contemporary fashion meets tradition🌷✨</h5>
      <br>
      <br>
     </div>
    
    <h1 style="margin-left:520px" class="menl">ACCOUNT INFORMATION</h1>
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
  
  <h2>HTML Table</h2>

<table>
  <tr>
    <th>Order ID</th>
    <th>Date of Order</th>
    <th>Products Ordered</th>
  </tr>
  <tr>
    <td>2333432</td>
    <td>23/12/2020</td>
    <td><a href="/cart">Generate Invoice</a></td>
  </tr>
 <tr>
    <td>2333432</td>
    <td>23/12/2020</td>
    <td><a href="/">Generate Invoice</a></td>
  </tr>
<tr>
    <td>2333432</td>
    <td>23/12/2020</td>
    <td><a href="/">Generate Invoice</a></td>
  </tr>
 <tr>
    <td>2333432</td>
    <td>23/12/2020</td>
    <td><a href="/">Generate Invoice</a></td>
  </tr>
  <tr>
    <td>2333432</td>
    <td>23/12/2020</td>
    <td><a href="/">Generate Invoice</a></td>
  </tr>
  <tr>
    <td>2333432</td>
    <td>23/12/2020</td>
    <td><a href="/">Generate Invoice</a></td>
  </tr>
</table>

    <br> <br> <br> <br> <br>
<div>
  <hr>
      <nav class="nav nav-pills nav-justified mt-2 mb-4">
     <a class="nav-item nav-link" style="margin-left:120px"><span><strong> © 2020 East Coast Pret</strong></span></a>
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

body {
  font-family: "Lato", sans-serif;
}

table {
  border-collapse: collapse;
  width: 70%;
  margin-left:250px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.sidenav {
  height: 200%;
  width: 190px;
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0;
  background-color:white;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
  
}

.sidenav a:hover {
  color: grey;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  margin-left: 200px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
