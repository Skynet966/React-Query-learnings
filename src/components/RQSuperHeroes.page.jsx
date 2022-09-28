import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchSuperHeroes = () =>
	axios.get('http://localhost:4000/superheroes').then(res => res.data);

function RQSuperHeroesPage() {
	const { isLoading, data, isError, error, isFetching } = useQuery(
		['super-heros'],
		fetchSuperHeroes,
        {
            refetchInterval: 2000,
            refetchIntervalInBackground: true
        }
	);

	return (
		<>
			<h2>Super Heroes Page</h2>
            {isFetching && (<h4>Updating...</h4>)}
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
