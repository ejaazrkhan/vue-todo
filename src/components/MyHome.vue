<template>
    <div>
        <h1>HelloWorld {{ name }}</h1>
        <input v-model="name" >
        <h2 v-if="show">{{ data }}</h2>
        <h2 v-else>else codde</h2>
        <button v-on:click="toggleText">Toggle</button>


        <form @submit.prevent="postData" method="post">
            <input name="name" v-model="posts.name" > <br>
            <input name="price" v-model="posts.price" > <br>
            <button type="submit">Submit</button>
        </form>

        <table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
            </tr>
            <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
            <tr v-for="product in products" v-bind:key="product.id">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
// import Vue from 'vue';
import axios from 'axios'
// import vueAxios from 'vue-axios'
// Vue.use(vueAxios, axios)
// fetch('https://testapi.jasonwatmore.com/products')
//     .then(response => response.json())
//     .then(data => console.log(data));
export default {
    name: 'MyHome',
    props: {
        data:String
    },
    data(){
        return{
            show: true,
            users: [
                {id: 1, name:"Ejaaz", email: "ejaaz@example.com"},
                {id: 2, name:"Ejaaz 1", email: "ejaaz1@example.com"},
                {id: 3, name:"Ejaaz 3", email: "ejaaz2@example.com"},
                {id: 4, name:"Ejaaz 3", email: "ejaaz3@example.com"},
                {id: 5, name:"Ejaaz 4", email: "ejaaz4@example.com"},
            ],
            name: "",
            products:[],
            posts:{
                name:null,
                price:null
            }
        }
    },
    methods:{
        toggleText(){
            this.show = !this.show
            this.$emit("changeTitle", "title changed")
        },
        postData(){
            axios.post('https://testapi.jasonwatmore.com/products', this.posts)
            .then((result) => {
                console.log(result);
            })
            console.log(this.posts);
        }
    },
    mounted(){
        axios.get('https://testapi.jasonwatmore.com/products')
        .then((resp) => {
            this.products = resp.data
        })
    }
}
</script>