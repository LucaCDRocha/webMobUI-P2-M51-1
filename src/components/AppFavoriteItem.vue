<script setup>
import { removeBookmark } from "../stores/bookmarks";

defineProps(["bookmark"]);

const favicon = (url) => {
	return `https://www.google.com/s2/favicons?sz=16&domain_url=${url}`;
};
</script>

<template>
	<div>
		<img :src="favicon(bookmark.url)" alt="favicon" />
		<li>
			<a :href="bookmark.url"> {{ bookmark.name }} | {{ bookmark.categories.join(", ") }} </a>
			<button @click="removeBookmark(bookmark)">Remove</button>
		</li>
	</div>
</template>

<style scoped>
div {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
}
li {
	list-style: none;
}
button {
	margin-left: 10px;
}
a {
	text-decoration: none;
}
</style>
