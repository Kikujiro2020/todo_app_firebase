<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from "./components/Header.vue";
import Todos from "./components/Todos.vue";
import AddButton from "./components/AddButton.vue";

</script>

<template>
  <div class="container">
    <Header title="TodoList" />
    <Todos @click="reminderTodo"/>
    <AddButton msg="追加" />
  </div>
</template>

<style>
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
