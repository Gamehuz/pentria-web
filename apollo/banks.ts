import { gql } from '@apollo/client';

export const GET_BANKS = gql`
  query getBanks {
    getBanks {
      name
      slug
      code
      longcode
      gateway
      pay_with_bank
      active
      is_deleted
      country
      currency
      type
      id
      createdAt
      updatedAt
    }
  }
`

export const  VERIFY_BANK = gql`
  mutation verifyBankAccount($accountNumber: String, $code: String) {
    verifyBankAccount(account_number: $accountNumber, code: $code) {
      account_number
      account_name
    }
  }
`