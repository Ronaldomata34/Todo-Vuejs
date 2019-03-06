<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: slateblue;
  color: white;
  width: 500px;
  margin: 50px auto;
  border: 1px solid slateblue;
  border-radius: 5px;
}

h1 {
  width: inherit;
  background-color: white;
  color: rgb(4, 37, 99);
  border-radius: 5px 5px 0 0;
  padding: 10px;
}

body {
  background: rgba(212,228,239,1);
}
</style>
