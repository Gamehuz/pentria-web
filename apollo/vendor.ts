import { gql } from '@apollo/client';

export const GET_LISTINGS = gql`
  query VendorListings {
    vendorListings {
      _id
      name
      image
      location
      facilityType
      category
      approved
      currency
      price
      beds
      pool
      outdoorSpace
      kitchen
      ac
      restRoom
      videoGames
      petFriendly
      cleaningSupplies
      kidFriendly
      workspace
      wifi
      parking
      description
      policies
      createdAt
      updatedAt
      reviews {
        rating
      }
    }
  }
`

export const CREATING_LISTING = gql`
mutation CreateSpace($name: String!, $image: [String!]!, $location: String!, $facilityType: String!, $category: String!, $beds: Int!, $currency: Currency!, $price: Float!, $restRoom: Boolean!, $pool: Boolean!, $outdoorSpace: Boolean!, $kitchen: Boolean!, $ac: Boolean!, $videoGames: Boolean!, $petFriendly: Boolean!, $cleaningSupplies: Boolean!, $kidFriendly: Boolean!, $workspace: Boolean!, $wifi: Boolean!, $parking: Boolean!, $description: String!, $policies: String!) {
  createSpace(name: $name, image: $image, location: $location, facilityType: $facilityType, category: $category, beds: $beds, currency: $currency, price: $price, restRoom: $restRoom, pool: $pool, outdoorSpace: $outdoorSpace, kitchen: $kitchen, ac: $ac, videoGames: $videoGames, petFriendly: $petFriendly, cleaningSupplies: $cleaningSupplies, kidFriendly: $kidFriendly, workspace: $workspace, wifi: $wifi, parking: $parking, description: $description, policies: $policies) {
    _id
  }
}
`

export const EDIT_LISTING = gql`
mutation EditSpace($input: SpaceInputs!) {
  editSpace(input: $input) {
    _id
  }
}
`


export const DELETE_SPACE = gql`
  query Query($spaceId: ID) {
    deleteSpace(spaceId: $spaceId)
  }
`

export const EARNINGS = gql`
  query BookingSold($vendorId: ID) {
    bookingSold(vendorId: $vendorId) {
      name
      author
      created
      amount
      bookingId
      status
      tx_ref
      customer
      payment
      currency
    }
  }
`

export const BALANCE = gql`
  query Wallet_Balance {
    walletBalance
  }
`

export const CONFIRM_BOOKING = gql`
  mutation ConfirmBooking($confirmBookingId: ID) {
  confirmBooking(id: $confirmBookingId) {
    status
  }
}
`

export const CANCEL_BOOKING = gql`
  mutation CancleBooking($cancleBookingId: ID) {
  cancleBooking(id: $cancleBookingId) {
    status
  }
}
`

export const WITHDRAW_REQUEST = gql`
  mutation WithdrawRequest($amount: Float!) {
    requestWithdrawal(amount: $amount) {
      _id
      amount
      userId {
        _id
      }
      account_bank
      account_number
      account_name
      bank_name
      status
      tx_ref
      createdAt
      updatedAt
    }
}
`

export const USER_WITHDRAWALS = gql`
  query UserWithdraws($userId: ID!, $page: Float!, $limit: Float!) {
    userWithdraws(userId: $userId, page: $page, limit: $limit) {
      withdrawals {
        _id
        amount
        userId {
          _id
        }
        account_bank
        account_number
        account_name
        bank_name
        status
        tx_ref
        createdAt
        updatedAt
      }
      pages
      count
    }
  }
`