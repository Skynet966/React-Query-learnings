import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchSuperHeroes = () =>
	axios.get('http://localhost:4000/superheroes').then(res => res.data);

function RQSuperHeroesPage() {
	const [pollingInterval, setPollingInterval] = useState(3000);
	const onSuccess = data => {
		if (data.length > 4) {
			setPollingInterval(false);
		}
		console.log('Perform side effect after data fetching', data);
	};
	const onError = error => {
		console.log('Perform side effect after getting error', error.message);
	};
	const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
		['super-heros'],
		fetchSuperHeroes,
		{
			onSuccess,
			onError,
			refetchInterval: pollingInterval,
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
