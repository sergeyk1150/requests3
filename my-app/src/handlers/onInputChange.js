export const onInputChange = ({ target }, setInputChange, setDisabledChange) => {
	setInputChange(target.value);
	setDisabledChange(true);
	if (target.value.length > 0) {
		setDisabledChange(false);
	} else {
		setDisabledChange(true);
	}
};
