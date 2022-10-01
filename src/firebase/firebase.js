// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot, query, addDoc, deleteDoc,doc } from "firebase/firestore";
import { ref, onUnmounted, reactive } from "vue"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //apikeyなど

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();


const q = query(collection(db, "todos-item"));

export const addTodos = async(newTodo) => {
  const docRef = await addDoc(collection(db, "todos-item"), 
  newTodo);
}
export const delTodos = async(id)=> {
  await deleteDoc(doc(db, "todos-item", id));

}


export const updateTodos = () => {

  let todos = reactive([])

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        todos.push({
          ...change.doc.data(),id:change.doc.id
        })
      }
      if (change.type === "modified") {
        console.log("Modified", change.doc.data());
      }
      if (change.type === "removed") {
       
        todos.forEach(function(todo, index) {
          if(todo.id===change.doc.id){
           todos.splice(index,1)
          }
        })


      }

      //
    })
  })

  onUnmounted(unsubscribe)

  return todos
}

