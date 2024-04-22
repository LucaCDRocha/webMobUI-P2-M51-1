import { ref, watch } from "vue";
import * as jsonStorage from "../utils/jsonStorage.js";

export function useJsonStorage(key, defaultValue) {
	const data = ref(defaultValue);

	if (jsonStorage.getItem(key, defaultValue) != null) {
		data.value = jsonStorage.getItem(key, defaultValue);
	} else {
		jsonStorage.setItem(key, data.value);
	}
	// data.value = jsonStorage.getItem(key) || defaultValue;
	
	watch(data.value, () => {
		jsonStorage.setItem(key, data.value);
		console.log(jsonStorage.getItem(key, defaultValue));
	});

	return { data }; // {"data":data}
}
