import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const onRefresh = (
	inputChange,
	id,
	setChangeContent,
	setInputChange,
	setDisabledChange,
) => {
	const refreshDbRef = ref(db, `todos/${id}`);

	set(refreshDbRef, {
		title: `${inputChange}`,
	})
		.then((responce) => {})
		.finally(() => {
			setChangeContent(false);
			setDisabledChange(true);
			setInputChange('');
		});
};
