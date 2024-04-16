<script setup>
import AppFavoriteItem from "../components/AppFavoriteItem.vue";

defineProps(["bookmarks"]);
</script>

<template>
	<div class="list">
		<h2>Liste des bookmarks</h2>
		<slot></slot>
		<ul>
			<li v-if="bookmarks.length === 0">No bookmarks found.</li>
			<AppFavoriteItem v-for="bookmark in bookmarks" :key="bookmark.id" :bookmark="bookmark"></AppFavoriteItem>
		</ul>
	</div>
</template>

<style scoped>
div.list {
	display: flex;
	flex-direction: column;
	align-items: flex-start

}
ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
li {
	margin: 10px 0;
}
</style>
