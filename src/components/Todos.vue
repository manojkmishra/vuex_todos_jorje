<template>
  <div class="App">
    <div class="App__box">
      <Todo v-for="(todo, index) in todos"
        :key="index" :text="todo.title" @delete="deleteTask(todo)"
      ></Todo>
    </div>
<div>
      <input  class="inp" type="text" name="enterTodo"  placeholder="What are you up today ?"
        v-model="task.title"/>
      <button @click="addTask">Add </button>
    </div>
  </div>
</template>

<script>
  import Todo from './Todo'
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    components: {Todo },
    data () {  return { task: {  id: '', title: ''  }, }  },
    computed: {
      todos () { console.log('store',this.$store.state)
         return this.$store.state.todoList},
    },
    methods: {
      ...mapActions([ 'deleteTask',]),
      addTask (e) { if (this.task) { this.$store.dispatch('addTask', this.task);
      this.task.title='' }  },
    }
  }
</script>


<style scoped>
 i{padding:5px}
.App__box{
   padding-bottom:30px;
 }

</style>
