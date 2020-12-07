<template>
 <div id="home">
   <div class="container"><br>
      <div class="row">
    <div class="col-4 col-md-4"><h3 class="h3">MEN</h3></div>
    <div class="col-4 col-md-4"><h3 class="lin"><router-link  active-class="active"   to="/cart" exact>
                 <button type="button" id="cart" class="btn btn-light btn-lg">CART</button>
                  </router-link></h3></div>
    <div class="col-4 col-md-4"><h3 class="h3">shirts</h3></div>
  </div>
   </div>

   <div class="container">
    <div class="row">
       
       <div class="col-xs-12 col-sm-6" v-for="(item,index) in items" :key="item">
         <div class="card box">
                <div class="row ">
                  
                      <div class=" col-sm-7" data-toggle="modal" :data-target="`#${item.img}`">
                       <img class="card-img img " :src="require(`../../../../public/img/${gender}/${catg}/${item.img}.jpg`)" width="320" height="420" alt="">
                    </div>
                   
                    <div class="card-body col-sm-5">
                      <div>
                         <h4 class="card-title">{{item.title}}</h4>
                      <br>
                      <h5>Select a Size: </h5> <select v-model="item.size" class="old-select">
                         <option v-for="option in options" :key="option">{{option}}</option>
                      </select>
                      <br><br>
                      <p class="card-text">{{item.price}}<img class="shekel" height="13px" src="../../../../public/img/shekel.png"></p>
                       <button class="btn" @click="buyItem(index)" data-target="#miniCart">Add to cart {{item.title}}</button>
                      
                      </div>
                    </div>
                </div>
                
            </div>
             <!--IMG MODAL-->
              <modelimg :gender="gender" :catg="catg" :img="item.img" ></modelimg>
              <!---->
       </div>
      <!-- Modal -->
            <cart></cart>
      </div>
   </div>
      
  
    
 </div>
</template>

<script>
// @ is an alias to /src
// <img :src="require(`../../../../public/img/men/shirts/${item.img}.jpg`)" alt="">
import db from '../../../firebase.js'
import modelCart from '../../modal/modelCart.vue'
import modelIMG from '../../modal/modelIMG.vue'
let items=[];
db.collection('/men-shirts').get()
  .then(querySnapshot =>{
    querySnapshot.forEach(doc=>{
      console.log(doc.data())
      const data={
        id:doc.id,
        title:doc.data().title,
        price:doc.data().price,
        img:doc.data().img
      }
      console.log(data)
      items.push(data)
    })
  });
  

export default {
  name: 'home',
  components: {
    cart:modelCart,
    modelimg:modelIMG
    
  },
  data() {
    return {
      items:items,
      catg:'shirts',
      gender:'men',
      options:['S','M','L','XL']
    }
  },

  methods: {
    buyItem(index){
      if(!this.items[index].size){
        alert('WOW PICK A SIZE')
        }
      else{
        const order = {
          itemId: this.items[index].id,
          itemTitle: this.items[index].title,
          itemPrice: this.items[index].price,
          itemSize:this.items[index].size,
          itemCatg:this.catg,
          itemGender:this.gender
        }
        
       $('#miniCart').modal('show')
         this.$store.dispatch('buyItem', order);
         console.log(order)
      }
    },
    isDisabled:()=>{
      return !this.size;
    },

  message:()=>{
    if(!this.size){
      alert('WOW PICK A SIZE')
    }
    
  }

  },
  
}
</script>

<style lang="scss">
@import '../../../../src/assets/css/miniCart.css';
@import '../../../../src/assets/css/catg.css';



</style>