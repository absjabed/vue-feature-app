<template>
  <div id="app">
    
    <navbar @search="searchKeyword"></navbar>
  
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <inventory @newItemAdded="addCartItem" :items="items"></inventory>
        </div>
        <div class="col-sm-3">
          <cart @itemRemoved="removeCartItem" :items="cart"></cart>
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
    },
    removeCartItem(index){
      this.cart.splice(index, 1)
    },
    searchKeyword(keyword){
      //console.log(keyword.indexOf("*"))
      if((keyword.indexOf("*")) !== -1){
        this.items = data;
      }else{
        this.items = data.filter(item =>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
      }
    }
  }
}
</script>

<style>
.container {
  padding-top: 10px;
}
</style>
