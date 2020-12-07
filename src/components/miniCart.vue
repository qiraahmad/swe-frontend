<template>
   <div>
       
      <div style="text-align:center">
                <h3 class="home" >East Coast Pret</h3>
      <hr class="hr">
      <h6>Where contemporary fashion meets tradition🌷✨</h6>
      <br><br>
      <h1 class="home men">CART </h1><img class="supericon" height="34px" src="../../public/img/shopping-cart.png">
     </div>

     <div class="container" style="margin-left:-270px">
         <div class="row">
             
             <div class="col-12">
                 <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Size</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                         <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr v-for="(item,index) in items" :key="index">
                        <th  style="width:20px" scope="row">{{item.size}}</th>
                        <td  style="width:20px">{{item.title}}</td>
                        <td  style="width:20px">Rs{{item.price}}</td>
                        <td style="width:50px"><img height="60%" class="img-fluid rounded" width="60%" :src="require(`../../public/img/${item.gender}/${item.catg}/${item.id}.jpg`)" alt="Responsive image"></td>
                        <td  style="width:20px"><i  @click="removeItem(item.id)" class="far fa-trash-alt iconbtn"></i></td>
                        </tr>
                       
                    </tbody>
                    </table>
             </div>
             <div class="col-sm-2"><br><br><br></div>

        <div class="col-12" style="margin-left:200px">
            <h5>Total cost: Rs {{totalPrice}} </h5><hr>
            <h5>Number of Items: {{items.length}}</h5><hr>
            
        </div>
        <div class="col-12"  style="margin-left:200px">
            <div ><a class="times" data-dismiss="modal">&times;</a></div>
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

<style scoped>
.home{
    text-decoration: none;
    color: black
}
th,h5,td,tr{
    font-family: 'Oswald', sans-serif;
}
td,th{
    font-size: 17px
}
.men{
    text-decoration: line-through; text-decoration-color:#C6A8A2;
    font-size: 35px;
    display:inline-block;
}
.supericon{
    margin-bottom: 16px;
    margin-left: 12px;
    display:inline-block;
}
.container{
    margin-top: 20px;
}
.check{
    text-align: center;
    margin-bottom: 15px;
    font-size: 20px;
    background: #C6A8A2;
    color: white;
    font-family: 'Oswald', sans-serif;
}
#check{
    text-align: center;
}
.times{
    font-size: 50px;
    cursor: pointer;
    padding: 0rem; 
    
    
}
.check:hover{
  opacity: 2;
  color: black;
}
.iconbtn{
    font-size: 23px
}
.iconbtn:hover{
  opacity: 3;
  color: rgb(177, 160, 160); 
}
</style>