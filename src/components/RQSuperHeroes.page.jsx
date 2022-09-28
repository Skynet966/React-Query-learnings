import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchSuperHeroes = () =>
	axios.get('http://localhost:4000/superheroesd').then(res => res.data);

function RQSuperHeroesPage() {
	const onSuccess = () => {
		console.log('Perform side effect after data fetching');
	};
	const onError = () => {
		console.log('Perform side effect after getting error');
	};
	const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
		['super-heros'],
		fetchSuperHeroes,
		{
			onSuccess,
			onError,
		},
	);

	return (
		<>
			<h2>Super Heroes Page</h2>
			<button onClick={refetch}>Fetch Heros data</button>
			{isFetching && <h4>Updating...</h4>}
			{isLoading ? (
				<h3>Heros data Loading...</h3>
			) : isError ? (
				<h4>{error.message}</h4>
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
