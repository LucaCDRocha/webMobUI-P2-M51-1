<script setup>

const search = defineModel();

</script>

<template>
	<div class="search">
		<label for="search">Chercher par nom ou catégorie</label>
		<input id="search" type="text" v-model="search" placeholder="Search" />
	</div>
</template>

<style scoped>
.search {
	display: flex;
	flex-direction: column;
    align-items: flex-start;
}
label {
	margin-bottom: 5px;
}
</style>
