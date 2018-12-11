<template>
    <div v-if="!loading" class="row">
        <div v-for="(item, index) in items" :key="index" class="card" style="width: 18rem;">
          <img class="card-img-top" :src="item.photo" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">£{{item.price}}</p>
            <a @click="addToCart(item)" class="btn btn-primary">+ add</a>
          </div>
        </div>
    </div>
    <h1 v-else>Loading....</h1>
</template>

<script>
import axios from 'axios'
export default {
    // props: ['items'],
    data(){
        return{
            loading: true,
            items: []
        }
    },
    mounted(){
        this.fetchInventory()
    },
    methods:{
        addToCart(item){
            //console.log(item.price);
            this.$emit('newItemAdded', item)
        },
        fetchInventory(){
            var self = this
            axios.get('http://localhost:3000/items').then(response => {
                self.items = response.data
                self.loading = false
                //console.log(response)
            })
        }
    }
}
</script>

<style>
    .card{
        padding: 5px;
        margin: 5px;
    }
</style>
