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

export const SOCIAL_AUTH = gql`
  mutation($input: SignInput!) {
    socialAuth(input: $input) {
      _id
      accountType
      token
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

export const UPDATE_USER = gql`
  mutation EditUserInfo($firstName: String, $lastName: String, $email: String, $phone: String, $address: String, $sex: String, $dob: String, $city: String, $state: String, $bName: String, $bankName: String, $bank: String, $acctNumber: String) {
    editUserInfo(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, address: $address, sex: $sex, dob: $dob, city: $city, state: $state, bName: $bName, bankName: $bankName, bank: $bank, acctNumber: $acctNumber) {
      _id
      firstName
    lastName
    email
    phone
    address
    city
    state
    dob
    sex
    isVerified
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

export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
    updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`