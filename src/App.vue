<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <h1>{{ title }}</h1> -->
  <!-- <MyHome data="Ejaaz Khan" v-on:changeTitle="updateTitle($event)" /> -->
  <!-- <NavHeader /> -->
  <TodoList/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyHome from './components/MyHome.vue'
// import NavHeader from './components/header/NavHeader.vue'
// import BlogCard from './components/blogs/BlogCard.vue'
import TodoList from "./components/todo/todoList.vue";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MyHome
    // NavHeader,
    // BlogCard
    TodoList
  },
  data(){
    return{
      title: "rendered"
    }
  },
  methods:{
    updateTitle(title){
      this.title = title
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
