<template>
    <ul class="list-group">
            <li class="list-group-item">
              <span class="item-name">Name</span>
              <span class="item-price float-right">Price</span>
            </li>
        <hr>
            <li v-for="(item, index) in items" :key="index" class="list-group-item">
              <span class="item-name">{{item.title}}</span>
              <button class="btn btn-sm btn-danger" @click="removeItem(index)">-</button>
              <span class="item-price float-right">£{{item.price}}</span>
            </li>
        <hr>
            <li class="list-group-item">
              <span class="item-name">Total</span>
              <span class="item-price float-right">£{{totalPrice}}</span>
            </li>

            <li v-if="items.length > 0" class="list-group-item">
                <button @click="checkOut" class="btn btn-block btn-success">Checkout</button>
            </li>
        </ul>
</template>

<script>
export default {
  //props: ['items'], 
  computed: {
    totalPrice(){
      var total = 0
      this.items.forEach(item => {
        //console.log("in loop: "+parseFloat(item.price));
        total += parseFloat(item.price)
      })
      return total.toFixed(2)
    },
    items(){
      return this.$store.getters.getCart
    }
  },
  methods:{
    removeItem(index){
      //this.$emit('itemRemoved', index)
      this.$store.commit('removeItem', index)
    },
    checkOut(){
      if(confirm("Are you sure you want to checkout?")){
        this.$store.commit('clearCart')
      }
    }
  }
}
</script>

<style>

</style>
