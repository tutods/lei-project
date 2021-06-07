const SearchInput = ({
	className,
	onChange,
	...attributes
}: ISearchInputProps) => {
	return (
		<label className={`${styles["root"] || ""} ${className || ""}`}>
			<input type="text" {...attributes} onChange={onChange} />

			<Icon name="search" width="20px" height="20px" />
		</label>
	);
};

export default SearchInput;