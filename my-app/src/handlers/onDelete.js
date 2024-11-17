import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const onDelete = (id) => {
	const deleteDbRef = ref(db, `todos/${id}`);

	remove(deleteDbRef);
};
