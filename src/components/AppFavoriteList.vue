<script setup>
import AppFavoriteItem from "../components/AppFavoriteItem.vue";
import { defineProps } from "vue";

defineProps(["bookmarks"]);
</script>

<template>
	<ul>
		<AppFavoriteItem v-for="bookmark in bookmarks" :key="bookmark.id" :bookmark="bookmark"></AppFavoriteItem>
	</ul>
</template>

<style scoped></style>
