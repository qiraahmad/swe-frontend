<template>
<div>
     <br><div class="container">
     <div class="row sibling-fade">
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/shirts1.jpg" alt="Card image cap">    
            <div class="card-body">
                <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/collections/Summer2020" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Spring Collection</button>
                  </router-link>
                  </h4>
            </div>
            </div>

        </div>

   
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/shirts1.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/collections/Summer2020" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Summer Collection</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
       
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/shirts1.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/collections/Summer2020" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Winter Collection</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>

     
   
     </div>

    </div>

</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  
 data () {
  return {
    publicPath: '/dist'
  }
}
}
</script>

<style lang="scss" scoped>
@import '../../../src/assets/css/mainpage.css';

</style>