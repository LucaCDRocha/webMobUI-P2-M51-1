<script setup>
import { ref, computed } from "vue";
import AppValue from "./components/AppValue.vue";

const round = (val) => Math.round(val * 100) / 100;

const tempSI = ref(273.15);

const tempCelsius = computed({
	get: () => round(tempSI.value - 273.15),
	set: (val) => {
		tempSI.value = val + 273.15;
	},
});

const tempFahrenheit = computed({
	get: () => round(((tempSI.value - 273.15) * 9) / 5 + 32),
	set: (val) => {
		tempSI.value = ((val - 32) * 5) / 9 + 273.15;
	},
});

const tempKelvin = computed({
	get: () => round(tempSI.value),
	set: (val) => {
		tempSI.value = val;
	},
});
</script>

<template>
	<div>
		<h1>Temperature Converter</h1>
		<AppValue label="Kelvin" v-model="tempKelvin" />
		<AppValue label="Celsius" v-model="tempCelsius" />
		<AppValue label="Fahrenheit" v-model="tempFahrenheit" />
	</div>
</template>

<style scoped>
div {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
