import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const onAdd = (input, setInput, setDisabled) => {
	const todosDbRef = ref(db, 'todos');
	push(todosDbRef, {
		title: `${input}`,
	})
		.then((responce) => {
			console.log(responce);
		})

		.finally(() => {
			setInput('');
			setDisabled(true);
		});
};
