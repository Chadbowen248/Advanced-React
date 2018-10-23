// App is the root for our pages, wraps everything
// Extend it so that we can add state/logic and share
// it with all of the pages
import App, { Container } from 'next/app';
// Page Component that we can use for style
// and include Head and Nav
import Page from '../components/Page';

class MyApp extends App {
  render() {
    // Get Component prop off props to render
    // inside Page
    const { Component } = this.props;

    return (
      <Container>
        {/* Page is a wrapper for our
        different pages home, sell, whatever*/}
        <Page>
           {/* Page is bringing along other markup
               state can go here
           and apply to all pages. This dynamically changes
           based on current view, *** Next Magic *** only
           when a page is active does the next server send that
           component/page */}
          <Component everypage="I'll be on every one!"/>
        </Page>
      </Container>
    );
  }
}

export default MyApp;
