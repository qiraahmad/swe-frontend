<template>
 <div class="home">
  	<router-link active-class="active" to="/" exact>
    <img style="margin-left:410px;" src="../../../public/img/logo.jpeg" class="center">
  	</router-link>
    <br>
     <div style="text-align:center">
      <h2>East Coast Pret</h2>
      <hr class="hr">
      <h5>Where contemporary fashion meets tradition🌷✨</h5>
      <br>
      <br>
     </div>

       <router-link class="home" active-class="active"  to="/login" exact>
      <h1 style="margin-left:600px" class="menl">LOG IN </h1>
       </router-link>

     <div class="container" id="cont" style="margin-left:430px">
        <form @submit.prevent="login">
           
             <div class="form-group row" style="left:200px">
            <label for="staticEmail" class="col-sm-2 col-form-label"><h5>Email</h5></label>
                <div class="col-sm-6">
                <input style="width:300px" type="text" class="form-control" v-model="email"  placeholder="email@example.com">
                </div>
            </div>
             <div class="form-group row" style="left:200px">
                <label for="staticEmail" class="col-sm-2 col-form-label"><h5>Password  </h5></label>
                <div class="col-sm-6">
                <input style="width:300px; margin-left:4px" type="text" class="form-control" v-model="password"  placeholder="password">
                </div>
            </div>
            <button style="margin-left:20px" type="submit" class="btn mb-2">Login</button>
      </form>
        
     </div>

<br> <br> <br> <br> <br> <br>
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
import firebase from 'firebase'
import axios from '../../axios-auth';
import { mapState, mapActions } from "vuex";

export default {
    data() {
      return {
        email: '',
        password: ''
      }
  },
    methods:{
      ...mapActions("storeAuth", ["login","storeUser"]),
       login(){
         const userData = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('login', {email:userData.email, name:userData.name, password:userData.password})
       }
    },
  
}
</script>

<style lang="scss">
@import '../../../src/assets/css/home.css';

.menl{
    text-decoration: line-through; text-decoration-color:#C6A8A2;
    font-size: 35px;
    margin-top: 10px;
    display:inline-block;
}
.home{
    text-decoration: none;
    color: black
}


</style>