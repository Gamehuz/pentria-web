import { gql } from '@apollo/client';

export const GET_SPACES = gql`
query Spaces($page: Int, $limit: Int, $approved: Boolean, $filter: String) {
  spaces(page: $page, limit: $limit, approved: $approved, filter: $filter) {
    _id
    name
    image
    location
    facilityType
    category
    approved
    beds
    restRoom
    pool
    outdoorSpace
    kitchen
    ac
    videoGames
    petFriendly
    cleaningSupplies
    kidFriendly
    workspace
    wifi
    parking
    description
    policies
    activities {
      _id
      image
      name
      currency
      price
      timeUnit
      duration
    }
    createdAt
    updatedAt
    author {
      _id
    }
    reviews {
      _id
      user
      comment
      rating
      createdAt
      updatedAt
    }
  }
}
`

export const SINGLE_SPACE = gql`
query space($spaceId: ID!) {
  space(spaceId: $spaceId) {
    _id
    ac
    approved
    beds
    category
    cleaningSupplies
    createdAt
    currency
    description
    facilityType
    image
    kidFriendly
    kitchen
    location
    name
    outdoorSpace
    parking
    petFriendly
    policies
    pool
    price
    workspace
    wifi
    videoGames
    updatedAt
    __typename
    activities {
      _id
      currency
      duration
      image
      price
      name
      timeUnit
      spaceId{
        _id
      }
    } 
    reviews {
      _id
      comment
      createdAt
      rating
      user
    }
    author {
      firstName
      lastName
      _id
      email
    }
  }
}
`

export const SEND_REVIEW = gql`
  mutation SendReview($spaceId: ID!, $comment: String!, $rating: Int!) {
    sendReview(spaceId: $spaceId, comment: $comment, rating: $rating) {
      _id
      user
      comment
      rating
      createdAt
      updatedAt
    }
  }
`

export const DISCOUNT = gql`
  mutation CalculateDiscount($tickets: [ITicket!]!) {
  calculateDiscount(tickets: $tickets) {
    discountAmount
    discountPercentage
    initalAmount
    total
  }
}
`

export const CREATE_BOOKING = gql`
  mutation CreateBooking($tickets: [ITicket!]!, $spaceId: ID!, $specialRequest: String!, $discountPercentage: Float, $initalAmount: Float, $discountAmount: Float, $total: Float) {
  createBooking(tickets: $tickets, spaceId: $spaceId, specialRequest: $specialRequest, discountPercentage: $discountPercentage, initalAmount: $initalAmount, discountAmount: $discountAmount, total: $total) {
    link
    status
    tx_ref
  }
}
`

export const GET_RECEIPT = gql`
query($txRef: String) {
  booking(tx_ref: $txRef) {
    _id
    total
    status
    currency
    payment
    customer {
      firstName
      lastName
      phone
    }
    spaceId {
      _id
      name
      location

    }
    specialRequest
    tickets {
      _id
      name
      date
      startTime
      endTime
      duration
      count
      price
    }
  }
}
`;
