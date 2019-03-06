<template>
	<li>
		<span>{{ todo.id + 1 }}</span> | {{ todo.title }}
		<button class="delete-button" type="button" v-on:click="$emit('delete', todo)">Delete</button>
	</li>
</template>

<script>
export default {
	props: {
		todo: {
			type: Object,
			required: true
		}
	}
}
</script>


<style>
	.delete-button {
		background-color:rgb(4, 37, 99);
		color: white;
		font-weight: 900;
		border-radius: 5px;
		padding: 5px 10px;
		display: block;
	}
</style>
