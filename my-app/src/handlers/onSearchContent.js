export const onSearchContent = ({ target }, setSearchContent, setSearchFlag) => {
	setSearchContent(target.value);
	target.value ? setSearchFlag(true) : setSearchFlag(false);
};
