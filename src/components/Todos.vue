<script setup>

import { onMounted, onUnmounted } from 'vue';

import { reactive } from "vue"

import { updateTodos, delTodos } from "../firebase/firebase"
// const emit = defineEmits(['delete-todo'])
// function deleteTodo(id) {
//   emit('delete-todo', id)
// }
const todos =  updateTodos()
   console.log(todos)

function deltodos(id) {
 
delTodos(id)
}

</script>

<template>
  <div v-for="{id, title , createdAt } in todos" v-bind:key="id" class="todos">
    <h3>{{ title }}</h3>
    <p>{{ createdAt.toDate() }}</p>
    <button @click="deltodos(id)">Del</button>
  </div>
</template>

<style scoped>
.todos {
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 10px auto;
  overflow: auto;
  height: auto;
  padding: 10px 20px;
}
</style>