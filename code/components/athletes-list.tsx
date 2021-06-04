const renderList = () => (
	<>
		<div className={styles['header']}>
			<span className={styles['avatar-col']}></span>
			<span className={styles['tag']}>Tag</span>
			<span className={styles['name']}>Nome</span>
			<span>Género</span>
			<span className={styles['sport']}>Modalidade</span>
			<span>Tipo de Plano</span>
			<span className={styles['subscription-status']}>
				Estado da Subscrição
			</span>
			<span className={styles['objective']}>Objetivo</span>
		</div>

		{data.map((athlete, key) => (
			<AthleteRow key={key} athlete={athlete} />
		))}
	</>
);
