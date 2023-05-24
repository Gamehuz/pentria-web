import { gql } from '@apollo/client';

export const GET_HISTORY = gql`
  query CustomerBookings($customerId: ID) {
    customerBookings(customerId: $customerId) {
      _id
      specialRequest
      tickets {
        _id
      }
      tx_ref
      discountPercentage
      initalAmount
      discountAmount
      total
      status
      payment
      currency
      spaceId {
        image
        name
        createdAt
        description  
      }
    }
  }
`

export const GET_FAVOURITES = gql`
  query FavouriteSpace {
    user {
      favouriteSpace {
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
  }
`

export const ADD_FAVOURITE = gql`
  mutation AddToFavourite($spaceId: String!) {
    addToFavourite(spaceId: $spaceId)
  }
`