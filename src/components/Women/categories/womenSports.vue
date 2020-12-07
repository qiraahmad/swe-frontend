<template>
 <div id="home">
   <div class="container"><br>
      <div class="row">
    <div class="col-4 col-md-4"><h3 class="lin"><router-link  active-class="active"   to="/cart" exact>
                 <button type="button" id="cart" class="btn btn-light btn-lg" style="margin-left:530px">CART</button>
                  </router-link></h3></div>
  </div>
   </div>

   <div class="container">
    <div class="row">
       
       <div class="col-xs-12 col-sm-6" v-for="(item,index) in items.slice(0,6)">
         <div class="card box">
                <div class="row ">
                  
                      <div class=" col-sm-7" data-toggle="modal" :data-target="`#${item.img}`">
                       <img class="card-img img " :src="require(`../../../../public/img/${gender}/${catg}/${item.img}.jpg`)" width="320" height="420" alt="">
                    </div>
                  
                    <div class="card-body col-sm-5">
                      <div>
            <router-link  active-class="active"  to="/product" exact>
                         <h4 style="color: black" class="card-title">{{titles[index]}}</h4>
            </router-link>



                      <br>
                      <h5>Select a Size: </h5> <select v-model="item.size" class="old-select">
                         <option v-for="option in options">{{option}}</option>
                      </select>
                      <br><br>
                      <p class="card-text" style="margin-left:30px">   Rs {{prices[index]}} <img class="shekel" height="13px" src="../../../../public/img/shekel.png"></p>
                       <button class="btn" @click="buyItem(index)" data-target="#miniCart">Add to cart {{titles[index]}}</button>
                      
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
// <img :src="require(`../../../../public/img/men/shoes/${item.img}.jpg`)" alt="">
import db from '../../../firebase.js'
import modelCart from '../../modal/modelCart.vue'
import modelIMG from '../../modal/modelIMG.vue'
let items=[];
db.collection('/women-sports').get()
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
      catg:'sports',
      gender:'women',
      options:['S','M','L','XL'],
      titles:['Moonlight', 'Royalty', 'Radiant Sun', 'Lilac', 'Stargazing', 'Floral Galore'],
      prices:[3499, 5959, 6000, 4500, 5500, 3800]
    }
  },

  methods: {
    buyItem(index){
      if(!this.items[index].size){
        alert('PICK A SIZE')
        }
      else{
        const order = {
          itemId: this.items[index].id,
          itemTitle: this.titles[index],
          itemPrice: this.prices[index],
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
      alert(' PICK A SIZE')
    }
    
  }

  },
  
}
</script>

<style lang="scss">
@import '../../../../src/assets/css/miniCart.css';
@import '../../../../src/assets/css/catg.css';

.home{
    text-decoration: none;
    color: black
}

</style>