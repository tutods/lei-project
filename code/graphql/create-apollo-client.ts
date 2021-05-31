import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: '<api-url>',
	cache: new InMemoryCache(),
});
