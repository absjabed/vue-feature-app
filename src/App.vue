<template>
  <div id="app">
    
    <navbar></navbar>
  
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <inventory :items="items"></inventory>
      </div>
      <div class="col-sm-2">
        <cart></cart>
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
      items: []
    }
  },
  mounted (){
    this.items = data
  }
}
</script>

<style>
.container {
  padding-top: 10px;
}
</style>
