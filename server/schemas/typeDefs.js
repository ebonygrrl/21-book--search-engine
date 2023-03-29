const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: String
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
      token: ID!
      user: User
    }

    type Query {
        me(userId: ID!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(): User
        removeBook(): User
    }
`;

module.exports = typeDefs;