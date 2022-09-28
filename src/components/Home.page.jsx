import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function HomePage() {
	const { isLoading, data, error } = useQuery(['repoData'], () =>
		axios
			.get('https://api.github.com/repos/Skynet966/React-Query-learnings')
			.then(res => res.data),
			{staleTime: Infinity}
	);

	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
			<strong>👀 {data.subscribers_count}</strong>{' '}
			<strong>✨ {data.stargazers_count}</strong>{' '}
			<strong>🍴 {data.forks_count}</strong>
		</div>
	);
}

export default HomePage;
