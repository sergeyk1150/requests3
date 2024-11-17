export const getSortedTodos = (loadedTodos) => {
	return loadedTodos.sort((a, b) => {
		let x = a[1].title < b[1].title ? -1 : 1;
		return x;
	});
};
