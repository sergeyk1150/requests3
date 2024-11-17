import { TodosLayout } from './todosLayout';
import { onDelete } from '../../handlers/onDelete';
import { onChangeContent } from '../../handlers/onChangeContent';

export const TodosContainer = (props) => {
	const { setChangeContent, setId } = props;
	const handlerDelete = (id) => {
		return onDelete(id);
	};
	const handlerChangeContent = (id) => {
		return onChangeContent(id, setChangeContent, setId);
	};
	const state = {
		...props,
		handlerDelete,
		handlerChangeContent,
	};
	return <TodosLayout {...state} />;
};
