// App is the root for our pages, wraps everything
// Extend it so that we can add state/logic and share
// it with all of the pages
import App, { Container } from "next/app"
// Page Component that we can use for style
// and include Head and Nav
import Page from "../components/Page"
import { ApolloProvider } from "react-apollo"
import withApollo from "../lib/withData"

class MyApp extends App {
  // This whole code block is from Next.js
  // need this for surfacing the page props to the user
  // getInitialProps is a next.js method that will take a context object
  static async getInitialProps({ Component, ctx }) {
    console.log(Component)
    // This lets you be very specific about what ypu want your page properties
    // to be, could come from anywhere, but here we want the info from our
    // server about the query to be available
    // https://stackoverflow.com/questions/52195240/when-override-app-js-what-is-getinitialprops-used-for
    // remember, the "Page" components are coming from the server first time
    // then rendered from cache after that
    let pageProps = {}
    // crawls the page component and looks for props there
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return { pageProps }
  }
  render() {
    // Get Component prop off props to render
    // inside Page
    const { Component, pageProps } = this.props

    return (
      <Container>
        {/* Apollo Provider is what lets us talk to yoga and prisma 
          what I assume Redux looks like, it wraps the application*/}
        <ApolloProvider client={this.props.apollo}>
          {/* Page is a wrapper for our
        different pages home, sell, whatever*/}
          <Page>
            {/* Page is bringing along other markup
               state can go here
               and apply to all pages. This dynamically changes
               based on current view, *** Next Magic *** only
               when a page is active does the next server send that
              component/page */}
            <Component everypage="I'll be on every one!" {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
