import React, { Component } from "react"
import Item from "./Item"
import styled from "styled-components"
// Need Query Comp and gql to interact with the db
import { Query } from "react-apollo"
import gql from "graphql-tag"

const Center = styled.div`
  text-align: center;
`
const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`
// first query bitches
const ALL_ITEMS_QUERY = gql`
  # query name and variable should be the same
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`

class Items extends Component {
  render() {
    return (
      <Center>
        {/* destructure the payload object up front */}
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            return (
              <ItemsList>
                {data.items.map(item => (
                  <Item item={item} key={item.id} />
                ))}
              </ItemsList>
            )
          }}
        </Query>
      </Center>
    )
  }
}

export default Items
export { ALL_ITEMS_QUERY }
