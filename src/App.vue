<template>
  <div id="app">
    
    <navbar></navbar>
  
  <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <inventory @newItemAdded="addCartItem" :items="items"></inventory>
      </div>
      <div class="col-sm-3">
        <cart :items="cart"></cart>
      </div>
  </div>
  </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Inventory from './components/Inventory'
import data from './data.js'

export default {
  components:{
    Navbar,
    Cart,
    Inventory
  },
  data (){
    return{
      items: [],
      cart: []
    }
  },
  mounted (){
    this.items = data
  },
  methods:{
    addCartItem(item){
      //console.log(item.price);
      this.cart.push(item)
    }
  }
}
</script>

<style>
.container {
  padding-top: 10px;
}
</style>
