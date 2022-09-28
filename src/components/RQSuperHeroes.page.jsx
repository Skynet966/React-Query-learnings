import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

function RQSuperHeroesPage() {
	const { isLoading, data, error } = useQuery(['super-heros'], () =>
		axios
			.get('http://localhost:4000/superheroes')
			.then(res => res.data)
			.catch(error => error.message),
	);

	return (
		<>
			<h2>Super Heroes Page</h2>
			{isLoading ? (
				<h3>Heros data Loading...</h3>
			) : error ? (
				<h3>{error.message}</h3>
			) : (
				data.map(hero => (
					<div key={hero.id}>
						<b>{hero.name}</b> Who's alter ego is <b>{hero.alterEgo}</b>
					</div>
				))
			)}
		</>
	);
}

export default RQSuperHeroesPage;
