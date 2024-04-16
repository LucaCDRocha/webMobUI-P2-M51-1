<script setup>
import { removeBookmark } from "../stores/bookmarks";

defineProps(["bookmark"]);

const favicon = (url) => {
	return `https://www.google.com/s2/favicons?sz=16&domain_url=${url}`;
};
</script>

<template>
	<div>
		<li>
			<div>
				<img :src="favicon(bookmark.url)" alt="favicon" />
				<a :href="bookmark.url"> {{ bookmark.name }} | {{ bookmark.categories.join(", ") }} </a>
			</div>
			<button @click="removeBookmark(bookmark)">Remove</button>
		</li>
	</div>
</template>

<style scoped>
li {
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	margin: 10px 0;
}
li div {
	display: flex;
	align-items: center;
	gap: 10px;
}
button {
	margin-left: 10px;
}
a {
	text-decoration: none;
}
</style>
