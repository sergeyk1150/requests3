export const getSearchTodos = (loadedTodos, searchContent) => {
	return loadedTodos.filter(([id, { title }]) => {
		return title.includes(searchContent);
	});
};
