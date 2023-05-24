import { gql } from '@apollo/client';

export const HISTORY = gql`
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