import { gql } from '@apollo/client';

// const client = ...

client
	.query({
		query: gql`
			query GetRates {
				rates(currency: "USD") {
					currency
				}
			}
		`,
	})
	.then((result) => console.log(result));
