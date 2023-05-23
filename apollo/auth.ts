import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      accountType
      token
  }   
}
`;

export const SIGNUP_USER = gql`
  mutation register($input: SignInput!){
    register(input: $input) {
      accountType
    }
  }
`