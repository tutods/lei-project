const Athletes = () => {
	// ...

	const [isList, setIsList] = useState(true);

	// ...

	return (
		<div className={styles['root']}>
			<h2>Lista de Atletas</h2>
			<div className={styles['top-items']}>
				<SearchInput
					placeholder='Pesquisa'
					onChange={athletesSearch}
					className={styles['search']}
				/>

				<div className={styles['actions-container']}>
					<div className={styles['icons']}>
						<div
							className={
								!isList ? styles['active-icon'] : undefined
							}
						>
							<Icon
								name='grid'
								onClick={() => setIsList(false)}
							/>
						</div>
						<div
							className={
								isList ? styles['active-icon'] : undefined
							}
						>
							<Icon name='grid' onClick={() => setIsList(true)} />
						</div>
					</div>
				</div>
			</div>

			<div className={styles['content']}>
				{isList ? renderList() : renderMosaic()}
			</div>
		</div>
	);
}