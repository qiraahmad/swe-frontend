<template>
    <nav class="navbar navbar-expand-lg navbar-light ">
     <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-lg-0">


       
            <li v-if="!auth" class="nav-item">
             <router-link class="home" active-class="active"  to="/login" exact>
              <a class="nav-link active" ><span>Log in<img class="iconl" height="15px" src="../../public/img/login.jpg"></span></a>
             </router-link>
          </li>
           <li v-if="!auth" class="nav-item">
             <router-link class="home" active-class="active"  to="/register" exact>
                <a class="nav-link active"><span>Register <img class="icon" height="15px" src="../../public/img/register.jpg"></span></a>
             </router-link>
          </li>
       
            <li v-if="auth">
              <a class="nav-link active">Welcome {{user}} </a>
            </li>
            <li v-if="auth">
              <a class="nav-link active" @click="logOut">Log Out</a>
            </li>

          </ul>
        </div>
     </div>
   </nav>
   
</template>

<script>
import { mapGetters,mapActions } from "vuex";
export default {
    computed: {
      ...mapGetters("storeAuth", ["isAuthenticate","user"]),
      ...mapGetters("storeAuth", ["logout"]),
      auth(){
        return this.$store.getters.isAuthenticate
      },
      user(){
        return this.$store.getters.user
      },
     
    },

    methods: {
      logOut(){
        this.$store.dispatch('logout')
      }
    },
}
</script>

<style>
.navbar{
  font-family: 'Oswald', sans-serif;
}
.icon{
    margin-bottom: 2.5px;
    margin-left: 0px;
    display:inline-block;
}
.iconl{
    margin-bottom: 2.5px;
    margin-left: 2px;
    display:inline-block;
}
</style>