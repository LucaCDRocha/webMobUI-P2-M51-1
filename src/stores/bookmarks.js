import { ref } from "vue";
import { useJsonStorage } from "../composables/useJsonStorage";

const id = ref(3);

const { data: bookmarks } = useJsonStorage("bookmarks", [
	{
		id: 1,
		name: "Vue.js",
		url: "https://vuejs.org/",
		categories: ["JavaScript"],
	},
	{
		id: 2,
		name: "React",
		url: "https://reactjs.org/",
		categories: ["JavaScript", "Frontend"],
	},
	{
		id: 3,
		name: "Angular",
		url: "https://angular.io/",
		categories: ["Frontend"],
	},
]);

// const bookmarks = ref([
// 	{
// 		id: 1,
// 		name: "Vue.js",
// 		url: "https://vuejs.org/",
// 		categories: ["JavaScript"],
// 	},
// 	{
// 		id: 2,
// 		name: "React",
// 		url: "https://reactjs.org/",
// 		categories: ["JavaScript", "Frontend"],
// 	},
// 	{
// 		id: 3,
// 		name: "Angular",
// 		url: "https://angular.io/",
// 		categories: ["Frontend"],
// 	},
// ]);

const addBookmark = (bookmark) => {
	// increment id
	id.value++;
	bookmark.id = id.value;
	console.log(bookmark);
	bookmarks.value.push(bookmark);
};

const removeBookmark = (bookmark) => {
	// ask for confirmation
	if (!confirm("Are you sure you want to remove this bookmark?")) {
		return;
	}
	const index = bookmarks.value.indexOf(bookmark);
	if (index !== -1) {
		bookmarks.value.splice(index, 1);
	}
};

export { bookmarks, addBookmark, removeBookmark };
