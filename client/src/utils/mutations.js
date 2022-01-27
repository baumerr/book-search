import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addbook($authors: [String], $description: String!, $bookId: String!, $image: String, $link: String, $title: String!) {
    addBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
      _id
      authors
      description
      bookId
      title
      image
      link
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      bookId
    }
  }
`;
