import React from 'react';
import BookList from './Components/BookList';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import AddBook from './Components/AddBook';

//apollo client setup
const client = new ApolloClient({
  uri: 'https://4000-ivory-deer-nq3syxt9.ws-us27.gitpod.io/graphql',
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
          bruh
          <BookList />
          <AddBook/>
        </div>
      </ApolloProvider>
  );
}

export default App;
