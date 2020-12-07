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
           <div id="carouselExampleIndicators" class="carousel slide d-none d-lg-block d-xl-block" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../../public/img/cor1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block first">
                    <h1 style="color:#212529"><strong>Clothing that speaks</strong></h1>
                    <p style="margin-left:350px; color:#212529">Formals, Casuals</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../public/img/cor1.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h1 style="color:#212529"><strong>Our New Collection</strong></h1>
                    <p style="margin-left:140px; color:#212529">Made specially for you and your custom needs</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../public/img/cor1.jpg" alt="Third slide">
                   <div class="carousel-caption d-none d-md-block">
                    <h1 style="color:#212529"><strong>Tradition in its glory</strong></h1>
                    <p  style="margin-left:180px; color:#212529">Try us out, you won't be disappointed</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
   <div class="container-fluid">
         <div class="row text-center">
          <!--Grid column-->
     
          <div class="col-12 col-md-6 p-0">
            <div class="card text-center">
            <div class="hovereffect">
              <img class="card-img-top"  src="../../public/img/item-3.jpg" alt="Card image cap">
                <div class="overlay">
                  <h2>CASUALS</h2>

				          <router-link active-class="active" to="/collections" exact>
                  <a style="">Explore Casuals Collection</a>
                  </router-link>

               </div>
                
            </div>
          </div>
          </div> 
          
          <div class="col-12 col-md-6 p-0">
             <div class="card text-center">
               <div class="hovereffect">
               <img class="card-img-top"  src="../../public/img/item-4.jpg" alt="Card image cap">

                 <div class="overlay">
                   <h2>FORMALS</h2>
				            	 <router-link active-class="active" to="/collections" exact>
                       <a style="">Explore Formals Collection</a>
                       </router-link>
                  </div>

            </div>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      </div>

 <div class="jumbotron text-center  m-0">
        <h1 class="display-4">East Coast Pret</h1>
        <p class="lead">We are here you to make the simplest choice in the most complicated world which is fashion.</p>
        <hr class="my-4">
          <p>For more info about who we are and what we do...</p>
          <router-link class="home" active-class="active"  to="/About-Us" exact>
 <button style="background-color:pink">
                <a style="background-color:pink" class="btn btn-lg" href="#" role="button">Look For More</a>
 </button>
         </router-link>
      </div>
   

   <br><fot></fot>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import footer from './Footer.vue';
import header from './Header.vue';

export default {
  data () {
  return {
    publicPath: '/dist'
  }
  },
  components:{
            'fot':footer,
            'hod': header,
        }
  
}

</script>

<style lang="scss">
@import '../../src/assets/css/home.css';

</style>
