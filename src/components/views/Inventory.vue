<template>
    <div v-if="!loading" class="row">
        <div v-for="(item, index) in items" :key="index" class="card" style="width: 18rem;">
          <router-link tag="div" :to="{path: '/item/'+item.id}">
            <img class="card-img-top" :src="item.photo" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title text-center">{{item.title}}</h5>
            </div>
          </router-link>
          <div class="card-footer">
                <span class="card-text">£{{item.price}}</span>
                <a @click="addToCart(item)" class="btn btn-sm btn-primary float-right">+ add</a>
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
            loading: true
            //items: []
        }
    },
    computed:{
        items(){
            return this.$store.getters.getInventory
        }
    },
    mounted(){
        this.fetchInventory()
    },
    methods:{
        addToCart(item){
            //console.log(item.price);
            //this.$emit('newItemAdded', item)
            //this.$store.commit('addToCart', item) //by using mutations
            this.$store.dispatch('addToCart', item) //by using actions....
        },
        fetchInventory(){
            var self = this
            axios.get('http://localhost:3000/items').then(response => {
                //self.items = response.data
                this.$store.commit('setInventory', response.data)
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
