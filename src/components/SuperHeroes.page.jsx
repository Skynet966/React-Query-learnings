import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SuperHeroesPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:4000/superheroes')
			.then(res => {
				setIsLoading(false);
				setData(res.data);
			})
			.catch(error => console.log(error.message));
	}, []);

	return (
		<>
			<h2>Super Heroes Page</h2>
			{isLoading ? (
				<h3>Heros data Loading...</h3>
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

export default SuperHeroesPage;
