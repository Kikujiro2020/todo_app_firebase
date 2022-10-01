
<script setup>
import { computed, ref } from "vue";
import {addTodos} from "../firebase/firebase"
const addtodo = ref("");
const now = new Date();
const y = now.getFullYear();
const m = now.getMonth() + 1;
const d = now.getDate();
const createdAt = y + '年' + m + '月' + d + '日'
const props = defineProps({
  msg: String
});

const isInput = computed(() => addtodo.value.length > 0);
function submitTodo() {
 
  const newTodo = {
    
    title: addtodo.value,
    createdAt: now,
    cleared: false,
    }
addTodos(newTodo)
  
}


</script>

<template>
    
    <input v-model="addtodo" autocomplete="off" />
    <button class="btn" :disabled="!isInput" @click="submitTodo" >{{ msg }}</button>
    
</template>

<style scoped>
.btn{
  border: none;
  color:gold;
  background:black
}
</style>
