import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an HTTP link to the GraphQL API endpoint
const httpLink = createHttpLink({
    uri: 'https://api.bettermode.com', // API URL
});

// Create a middleware link to set the authorization header with the token from localStorage
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    return {
        headers: {
            ...headers, // Spread the existing headers
            authorization: token ? `Bearer ${token}` : '', // Add the authorization header if token exists
        },
    };
});

// Create an Apollo Client instance with the authLink and httpLink
const client = new ApolloClient({
    link: authLink.concat(httpLink), // Combine the authLink and httpLink
    cache: new InMemoryCache(), // Initialize the cache
});

export default client; 
