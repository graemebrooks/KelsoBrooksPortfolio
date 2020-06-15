const client = require('contentful').createClient({
	space: 'agrsabol6lmd',
	accessToken: 'DaDOuBOkr7fMUAAmzzIiV5R7A36LGw3SX3xfn6MfFh4'
});

interface response {
	items: any[];
}

const getBlogPosts: () => Promise<any[]> = () => client.getEntries().then((response: response) => response.items);

const getSinglePost: (slug: string) => Promise<any[]> = (slug) =>
	client
		.getEntries({
			'fields.slug': slug,
			content_type: 'blogPost'
		})
		.then((response: response) => response.items);

export { getBlogPosts, getSinglePost };
