<script setup>
import { ref, computed } from "vue";
import { bookmarks, removeBookmark, addBookmark } from "./stores/bookmarks";
import AppFavoriteList from "./components/AppFavoriteList.vue";
import AppAddFavoriteForm from "./components/AppAddFavoriteForm.vue";

const search = ref("");

const filteredBookmarks = computed(() => {
	return bookmarks.value.filter((bookmark) => {
		return bookmark.categories.some((category) => category.toLowerCase().includes(search.value.toLowerCase()));
	});
});
</script>

<template>
	<div>
		<h1>Bookmarks</h1>
		<p>Click on the bookmark to visit the website.</p>
		<AppAddFavoriteForm></AppAddFavoriteForm>
		<div>
			<p>Chercher par catégorie</p>
			<input type="text" v-model="search" placeholder="Search" />
			<p v-if="filteredBookmarks.length === 0">No bookmarks found.</p>
		</div>
		<AppFavoriteList :bookmarks="filteredBookmarks"></AppFavoriteList>
	</div>
</template>

<style scoped></style>
