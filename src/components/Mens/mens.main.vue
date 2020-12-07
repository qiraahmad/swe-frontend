<template>
<div class="menBack">
     <br><div class="container">
     <div class="row sibling-fade">
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top p-1" height="423px" width="100px" src="../../../public/img/men/pants.jpg" alt="Card image cap">    
            <div class="card-body">
                <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menPants" exact>
                 <button id="btn" class="btn ">Pants</button>
                  </router-link>
                  </h4>
            </div>
            </div>

        </div>

        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top p-1" height="423px" width="100px" src="../../../public/img/men/shirts.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menShirts" exact>
                 <button  id="btn" class="btn ">Shirts</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top p-1" height="423px" width="100px" src="../../../public/img/men/sweater.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menSweaters" exact>
                 <button  id="btn" class="btn ">Sweaters</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
 
        <div class="col-sm-4">

            <div class="card mt-3">
            <img class="card-img-top p-1" height="423px" width="100px" src="../../../public/img/men/shoes.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menShoes" exact>
                 <button  id="btn" class="btn ">Shoes</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>

        <div class="col-sm-4">

            <div class="card mt-3">
            <img class="card-img-top p-1" height="423px" width="100px" src="../../../public/img/men/sports.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menSports"  exact>
                 <button  id="btn" class="btn ">Sports</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
        <div class="col-sm-4">

            <div class="card mt-3">
            <img class="card-img-top p-1" height="423px" width="100px" src="../../../public/img/men/accessiores.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menAccessories" exact>
                 <button  id="btn" class="btn ">Accessories</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div><br>

          <!-- <div class="card">
            <img class="card-img-top p-1" height="423px" width="100px" src="../../../public/img/men/accessiores.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/:id"  exact>
                 <button  id="btn" class="btn ">Something</button>
                  </router-link>
            </h4>
            </div>
            </div> -->
        
     </div>

    </div>

</div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default {
  name: 'home',
  
 data () {
  return {
    publicPath: '/dist'
  }
}
}
</script>


<style lang="scss">
@import '../../../src/assets/css/mainpage.css';

</style>