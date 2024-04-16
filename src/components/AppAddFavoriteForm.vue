<script setup>
import { ref } from "vue";
import { addBookmark } from "../stores/bookmarks";

const name = ref("");
const url = ref("");
const categories = ref([]);

const validateForm = () => {
	if (!name.value || !url.value) {
		return;
	}
	if (!categories.value.length) {
		categories.value = "Uncategorized";
	}
	if (url.value.startsWith("https://")){
		url.value = url.value.replace("https://", "");
	}
	addBookmark({
		name: name.value,
		url: `https://${url.value}`,
		categories: categories.value.split(",").map((category) => category.trim()),
	});
	name.value = "";
	url.value = "";
	categories.value = [];
};
</script>

<template>
	<div>
		<h2>Ajouter un bookmark</h2>
		<form @submit.prevent="validateForm()">
			<label for="name">Name</label>
			<input id="name" type="text" v-model="name" placeholder="Name" />
			<label for="url">Url</label>
			<input id="url" type="text" v-model="url" placeholder="URL" />
			<label for="categories">Catégories</label>
			<input id="categories" type="text" v-model="categories" placeholder="Categories" />
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
label{
	align-self: flex-start;
}
button {
	margin-top: 10px;
}
</style>
