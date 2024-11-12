import AddBook from "./components/add-book";
import BookList from "./components/book-list";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BookList />{" "}
      <AddBook />
    </ApolloProvider>
  );
}

export default App;
