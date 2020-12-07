<template>
   <div>
      <div style="text-align:center">
    <router-link class="home" active-class="active"  to="/" exact>
       <img style="margin-left:410px;" src="../../public/img/logo.jpeg"  class="center">
</router-link>

      <div style="text-align:center">
       <router-link class="home" active-class="active"  to="/" exact>
                <h3 >East Coast Pret</h3>
                  </router-link>
      <hr class="hr">
      <h8>Where contemporary fashion meets tradition🌷✨</h8>
      <br><br>
       <router-link class="home" active-class="active"  to="/cart" exact>
      <h1 class="men">CART </h1><img class="supericon" height="34px" src="../../public/img/shopping-cart.png">
       </router-link>
     </div>

     <div class="container">
         <div class="row">
             
             <div class="col-sm-6 col-12">
                 <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Size</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr v-for="item in items" :key="item">
                        <th scope="row">{{item.size}}</th>
                        <td>{{item.title}}</td>
                        <td>{{item.price}} ILS</td>
                        <td><img height="120px" class="img-fluid rounded" width="170px" :src="require(`../../public/img/${item.gender}/${item.catg}/${item.id}.jpg`)" alt="Responsive image"></td>
                        <td><i  @click="removeItem(item.id)" class="far fa-trash-alt iconbtn"></i></td>
                        </tr>
                       
                    </tbody>
                    </table>
             </div>
             <div class="col-sm-2"><br><br><br></div>

        <div class="col-sm-4 col-12">
            <h5>Total cost: {{totalPrice}} ILS </h5><hr>
            <h5>Number of Items: {{items.length}}</h5><hr>
            <br>
           <div id="check"><button class="btn check">Check out</button></div>
        </div>

         </div>

     </div>

   </div>
   </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed:mapGetters({
        items:'itemsCart',
        totalPrice:'totalPrice'
    }
    ),
  data(){
      return {
         
      }
  },

    methods:{
       removeItem(id){
         this.$store.dispatch('removeItem',id);
          console.log(id)
       }
    },
  
}
</script>


<style scoped src="../../src/assets/css/cart.css">

</style>