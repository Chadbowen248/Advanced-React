import withApollo from "next-with-apollo"
import ApolloClient from "apollo-boost"
import { endpoint } from "../config"

function createClient({ headers }) {
  // https://www.apollographql.com/docs/react/essentials/get-started.html
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      })
    }
  })
}
// withApollo higher ordder function, takes the function to make a client
// lets it work with next.js
export default withApollo(createClient)
