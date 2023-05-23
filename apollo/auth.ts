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
export const GET_USER = gql`
  query User{
    user {
      _id
      firstName
      lastName
      email
      phone
      address
      city
      state
      otp
      dob
      sex
      isVerified
      ninverified
      isActive
      lastLoggedIn
      accountType
      createdAt
      updatedAt
      bName
      bankName
      bank
      acctNumber
      bankCode
      occupation
    }
  }
`