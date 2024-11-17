import { useState } from 'react';
import { onClose } from '../../handlers/onClose';
import { onRefresh } from '../../handlers/onRefresh';
import { onChange } from '../../handlers/onChange';

import { ChangeBlockLayout } from './changeBlockLayout';

export const ChangeBlockContainer = (props) => {
	const [inputChange, setInputChange] = useState('');
	const [disabledChange, setDisabledChange] = useState(true);

	const { setChangeContent, id } = props;

	const handlerChange = (target) => {
		return onChange(target, setDisabledChange, setInputChange);
	};
	const handlerRefresh = () => {
		return onRefresh(
			inputChange,
			id,
			setChangeContent,
			setInputChange,
			setDisabledChange,
		);
	};
	const handlerClose = () => {
		return onClose(setChangeContent, setInputChange);
	};

	const state = {
		inputChange,
		setInputChange,
		disabledChange,
		setDisabledChange,
		handlerChange,
		handlerRefresh,
		handlerClose,
		...props,
	};

	return <ChangeBlockLayout {...state} />;
};
