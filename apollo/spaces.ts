import { gql } from '@apollo/client';

export const GET_SPACES = gql`
query spaces {
  spaces {
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