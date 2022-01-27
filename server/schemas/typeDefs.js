const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
}

type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    me: User
    user: User
    book: Book
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(authors: [String], description: String!, bookId: String!, image: String, link: String, title: String!): Book
    deleteBook(bookId: String!): Book
}
`;

module.exports = typeDefs;