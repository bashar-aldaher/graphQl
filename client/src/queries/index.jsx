import { gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

const getBookDetailsQuery = gql`
  query ($id: ID) {
    book(id: $id) {
      name
      genre
      author {
        id
        name
        age
        books {
          name
          genre
        }
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const AddBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

export { getBooksQuery, getBookDetailsQuery, getAuthorsQuery, AddBookMutation };
