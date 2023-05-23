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
mutation CreateSpace($name: String!, $image: [String!]!, $location: String!, $facilityType: String!, $category: String!, $beds: Int!, $currency: Currency!, $price: Float!, $restRoome: Boolean!, $pool: Boolean!, $outdoorSpace: Boolean!, $kitchen: Boolean!, $ac: Boolean!, $videoGames: Boolean!, $petFriendly: Boolean!, $cleaningSupplies: Boolean!, $kidFriendly: Boolean!, $workspace: Boolean!, $wifi: Boolean!, $parking: Boolean!, $description: String!, $policies: String!) {
  createSpace(name: $name, image: $image, location: $location, facilityType: $facilityType, category: $category, beds: $beds, currency: $currency, price: $price, restRoome: $restRoome, pool: $pool, outdoorSpace: $outdoorSpace, kitchen: $kitchen, ac: $ac, videoGames: $videoGames, petFriendly: $petFriendly, cleaningSupplies: $cleaningSupplies, kidFriendly: $kidFriendly, workspace: $workspace, wifi: $wifi, parking: $parking, description: $description, policies: $policies) {
    _id
  }
}
`

export const DELETE_SPACE = gql`
  query Query($spaceId: ID) {
    deleteSpace(spaceId: $spaceId)
  }
`