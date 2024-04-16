<script setup>
import { ref, computed } from "vue";
import { bookmarks } from "./stores/bookmarks";
import AppFavoriteList from "./components/AppFavoriteList.vue";
import AppAddFavoriteForm from "./components/AppAddFavoriteForm.vue";
import AppSearch from "./components/AppSearch.vue";

const search = ref("");

const filteredBookmarks = computed(() => {
	const searchValue = search.value.toLowerCase();
	return bookmarks.value.filter((bookmark) => {
		return bookmark.categories.some((category) => category.toLowerCase().includes(searchValue)) || bookmark.name.toLowerCase().includes(searchValue);
	});
});
</script>

<template>
	<div>
		<h1>Bookmarks</h1>
		<p>Click on the bookmark to visit the website.</p>
		<div class="bookmarks">
			<AppFavoriteList :bookmarks="filteredBookmarks">
				<AppSearch v-model="search"></AppSearch>
			</AppFavoriteList>
			<AppAddFavoriteForm></AppAddFavoriteForm>
		</div>
	</div>
</template>

<style scoped>
.bookmarks {
	display: flex;
	flex-direction: row;
	gap: 100px;
}
</style>
