const renderMosaic = () => (
	<div className={styles['grid']}>
		{data.map((athlete, key) => (
			<AthleteCard key={key} athlete={athlete} />
		))}
	</div>
);
