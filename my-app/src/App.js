import { useEffect, useState } from 'react';
import { FormContainer } from './components/Form/formContainer';
import { TodosContainer } from './components/Todos/todosContainer';
import { ChangeBlockContainer } from './components/ChangeFormBlock/changeBlockContainer';
import { getLoadedTodosOrFilteredTodos } from './utils/getLoadedTodosOrFilteredTodos';
import { ref, onValue } from 'firebase/database';
import { db } from './firebase';
import styles from './App.module.css';

export const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [changeContent, setChangeContent] = useState(false);
	const [id, setId] = useState();
	const [searchContent, setSearchContent] = useState('');
	const [sortFlag, setSortFlag] = useState(false);
	const [searchFlag, setSearchFlag] = useState(false);

	const state = {
		isLoading,
		setIsLoading,
		todos,
		setTodos,
		refreshTodos,
		setRefreshTodos,
		changeContent,
		setChangeContent,
		id,
		setId,
		searchContent,
		setSearchContent,
		sortFlag,
		setSortFlag,
		searchFlag,
		setSearchFlag,
	};

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');
		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = Object.entries(snapshot.val() || []);
			setTodos(
				getLoadedTodosOrFilteredTodos(
					loadedTodos,
					sortFlag,
					searchFlag,
					searchContent,
				),
			);
		});
	}, [refreshTodos, searchContent, sortFlag, searchFlag]);

	return (
		<div className={styles.app}>
			<h1>Todo list</h1>
			<FormContainer {...state} />
			<TodosContainer {...state} />
			{changeContent && <ChangeBlockContainer {...state} />}
		</div>
	);
};
