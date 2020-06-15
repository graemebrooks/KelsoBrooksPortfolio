import { useEffect, useState } from 'react';

import { getBlogPosts } from '../contentful';

const promise = getBlogPosts();

export default function usePosts(): [any[], Boolean] {
	const [ posts, setPosts ] = useState<any[]>([]);
	const [ isLoading, setLoading ] = useState<Boolean>(true);

	useEffect(() => {
		promise.then((blogPosts) => {
			setPosts(blogPosts);
			setLoading(false);
		});
	}, []);

	return [ posts, isLoading ];
}
