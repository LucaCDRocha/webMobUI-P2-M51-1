<script setup>

// const props = defineProps(["label"]);
defineProps({
	label: {
		type: String,
		required: false,
		default: "",
	},
	decimalPlaces: {
		type: Number,
		required: false,
		default: 2,
	},
});

const model = defineModel();

</script>

<template>
	<div>
		<label v-if="label" :for="label">{{ label }}</label>
		<input :id="label" type="number" v-model="model" />
	</div>
</template>

<style scoped>
div {
	margin-top: 10px;
}
label {
	font-weight: bold;
	align-self: start;
	margin: 10px 0px;
}
</style>
