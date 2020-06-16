import { useEffect, useState } from 'react';

import { getSinglePost } from '../contentful';

export default function useSinglePost(slug: string): [any, Boolean] {
	const promise = getSinglePost(slug);

	const [ post, setPost ] = useState({});
	const [ isLoading, setLoading ] = useState(true);

	useEffect(
		() => {
			promise.then((result: any[]) => {
				setPost(result[0].fields);
				setLoading(false);
			});
		},
		[ promise ]
	);

	return [ post, isLoading ];
}
