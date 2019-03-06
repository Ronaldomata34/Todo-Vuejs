<template>
    <div>
			<ul v-if="todos.length">
				<TodoItem 
				v-for="todo in todos" 
				:key="todo.id"
				:todo="todo"
				@delete="deleteTodo"/>
			</ul>
			<form v-on:submit.prevent="addTodo">
				<input type="text" v-model="newTodo.title" placeholder="Add new Todo">
				<input class="add-button" type="submit" value="Add todo">
			</form>
		</div>
</template>

<script>

import TodoItem from './TodoItem'
let index = 0;
export default {
	components: {
		TodoItem,
	},
    data() {
			return {
				newTodo: {},
				todos: [
				]
			}
		},
		methods: {
			deleteTodo(todo) {
				this.todos.splice(this.todos.indexOf(todo), 1)
				this.reCalculateIndex()
			},
			addTodo(e) {
				if (this.newTodo.title) {
					this.todos.push(this.newTodo)
					this.reCalculateIndex()
					this.newTodo = {}
				} else {
					alert("You can't add an empty task")
				}

			},
			reCalculateIndex() {
				this.todos.forEach(function(todo, index) {
					todo.id = index 
				});
			},
		},
		created() {
			this.$http.get("https://my-json-server.typicode.com/ronaldomata34/demo-json-todo/todos")
			.then(res => this.todos = res.data)
		}
}
</script>

<style>
div {
	text-align: left;
}
ul {
	width: 450px;
	list-style: none;
}

li {
	margin: 10px 0;
	border-bottom: 2px solid rgb(4, 37, 99);
	padding-bottom: 10px;
}

span {
	font-size: 35px;
	font-family: 'Times New Roman', Times, serif;
	color: rgb(4, 37, 99);
	font-weight: 800;
}

form {
	width: 450px;
	padding: 20px;
	margin: 25px;
}

input {
	padding: 5px 20px;
	border-radius: 5px;
	display: inline-block;
}

.add-button {
	background-color:rgb(24, 161, 24);
	color: white;
	font-weight: 900;
	border-radius: 5px;
	padding: 5px 10px;
}

</style>
