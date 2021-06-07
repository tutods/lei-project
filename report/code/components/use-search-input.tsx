import SearchInput from 'components/inputs/SearchInput/SearchInput';
import Fuse from 'fuse.js';

// ...

const [data, setData] = useState(athletes);

// Search
const options = {
	keys: ['name'],
};

const fuse = new Fuse(athletes, options);

const onSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
	if (evt.target.value !== '') {
		setData(fuse.search(evt.target.value).map((fuseItem) => fuseItem.item));
	} else {
		setData(athletesData);
	}
};

return (
	// ...
	<SearchInput placeholder='Pesquisa' onChange={onSearchChange} />
);
