<template>
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Load icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">



      <div class="navbar navbar-expand-lg">
         <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-lg-0">


       
            <li v-if="!auth" class="nav-item">
             <router-link class="home" active-class="active"  to="/login" exact>
              <a style="color:#212529" class="nav-link active"  ><span>Log in <i class="fa fa-sign-in" style="font-size:18px"></i></span></a>
             </router-link>
          </li>
           <li v-if="!auth" class="nav-item">
             <router-link class="home" active-class="active"  to="/register" exact>
                <a style="color:#212529" class="nav-link active"><span>Register <i class="fa fa-registered" style="font-size:18px"></i></span></a>
             </router-link>
          </li>

           <li v-if="!auth" class="nav-item">
             <router-link class="home" active-class="active"  to="/account" exact>
                <a style="color:#212529" class="nav-link active"><span>Account <i class="fa fa-user" style="font-size:18px"></i></span></a>
             </router-link>
          </li>


        <li v-if="!auth" class="nav-item">
             <router-link class="home" active-class="active"  to="/About-Us" exact>
                <a style="color:#212529" class="nav-link active"><span>About Us <i class="fa fa-heart" style="font-size:18px"></i></span></a>
             </router-link>
          </li>

            <li v-if="!auth" class="nav-item">
             <router-link class="home" active-class="active"  to="/" exact>
                <a style="color:#212529" class="nav-link active"><span>Home <i class="fa fa-home" style="font-size:18px"></i></span></a>
             </router-link>
          </li>

        <li v-if="!auth" class="nav-item" style="margin-top:5px; margin-left:5px">
        <!-- The form -->
        <form class="example" action="action_page.php">
        <input type="text" placeholder="Search Products.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        </li>
       
       

          </ul>
        </div>
     </div>
      </div>

      <transition 
                class="tran"
                enter-active-class="animated bounceInRight"
                mode="out-in">
                    <router-view :name="name"></router-view>
                </transition>
    </div>
        
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import {mapActions } from "vuex";
Vue.use(VueRouter)
    export default {
     ...mapActions("storeAuth", ["AutoLogin"]),
        mounted(){
        this.mountedFin("Mounted")
        },

        destroyed(){
        this.destroyedFin()
        },

        methods: {
          mountedFin(arg){
            console.log(arg)
        },
        destroyedFin(arg){
            console.log(arg)
        },
        },
    }
</script>

<style>

#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tran{
  opacity: 3;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-family: 'Oswald', sans-serif;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

hr{
  margin-top: 0rem;
}

</style>
