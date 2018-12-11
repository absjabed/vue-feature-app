<template>
  <div id="app">
  
  <!-- <router-link :to="{path: '/'}">Home</router-link>
  <router-link :to="{path: '/test/1'}">Test1</router-link>
  <router-link :to="{path: '/test/2'}">Test2</router-link>
    <router-link :to="{path: '/test/3'}">Test3</router-link>
    <router-view></router-view> -->
    <navbar @search="searchKeyword"></navbar>
  
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
          <!-- <inventory @newItemAdded="addCartItem" :items="items"></inventory> -->
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
// import Inventory from './components/views/Inventory'
import data from './data.js'

export default {
  components:{
    Navbar,
    Cart
    // Inventory
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
