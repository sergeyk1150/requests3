import { getSearchTodos } from './getSearchTodos';
import { getSortedTodos } from './getSortedTodos';

export const getLoadedTodosOrFilteredTodos = (
	loadedTodos,
	sortFlag,
	searchFlag,
	searchContent,
) => {
	let filteredTodos = null;
	searchFlag
		? (filteredTodos = getSearchTodos(loadedTodos, searchContent))
		: (filteredTodos = undefined);
	sortFlag
		? (filteredTodos = getSortedTodos(filteredTodos ? filteredTodos : loadedTodos))
		: (filteredTodos = filteredTodos);
	return filteredTodos ? filteredTodos : loadedTodos;
};
