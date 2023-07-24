//GraphQL IMPORT

import { gql } from '@apollo/client';

//login user import
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
`

//add user import
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}`

//saved book import
export const SAVE_BOOK = gql`
mutation saveBook($description: String!, $title: String!, $bookId: String!, $authors: [String], $image: String, $link: String) {
  saveBook(description: $description, title: $title, bookId: $bookId, authors: $authors, image: $image, link: $link) {
    _id
    bookCount
    username
  }
}
`

//remove book import
export const REMOVE_BOOK = gql`
mutation remove($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    savedBooks {
      bookId
    }
  }
}
`