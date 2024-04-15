<script setup>
import { ref } from "vue";
import { addBookmark } from "../stores/bookmarks";

const name = ref("");
const url = ref("");
const categories = ref([]);

const add = () => {
	if (!name.value || !url.value) {
		return;
	}
	if (!categories.value.length) {
		categories.value = "Uncategorized";
	}
	addBookmark({
		name: name.value,
		url: url.value,
		categories: categories.value.split(",").map((category) => category.trim()),
	});
	name.value = "";
	url.value = "";
	categories.value = [];
};
</script>

<template>
	<div>
		<p>Ajouter un bookmark</p>
		<form @submit.prevent="add()">
			<input type="text" v-model="name" placeholder="Name" />
			<input type="text" v-model="url" placeholder="URL" />
			<input type="text" v-model="categories" placeholder="Categories" />
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<style scoped></style>
