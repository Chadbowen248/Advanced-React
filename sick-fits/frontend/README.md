# Advanced-React

Next.js

1. All Page View Components go in the pages dir.
2. Root must be called index.js
3. Need to wrap our views in a top level parent
   Component, so we can share state and methods
   to views. Next.js provides that top level
   Component but we need to extend it so we
   can nest the { Container } component in our
   own mark up. See \_app.js. 1. We'll wrap our Views in a Page Component
   wrapper, which will have styles and markup
   that we need on all pages, nav, footer. 2. Page Component will bring in a Header, Footer, Meta
   and under Header,Meta and above Footer will call
   {props.children} so the nested Container component
   will populate there
4. Routing - No way to show that App is working on a req, add a package called
   NProgress and add relevant css to /static folder. Listen for router events
   (onRouteChangeStart, onRouteChangeComplete, onRouteChangeError) and call NProgress start and done events.

Styled Components

1. Import Styled Components, and Theme Provider and Inject Global
   1. import styled, { ThemeProvider, injectGlobal } from 'styled-components';
   2. ThemeProvider lets you set a theme at a high level to reference throughout
      your Styled Components.
   3. use injectGlobal on a high level Page Component to apply global styles
      everywhere, like margin and padding 0 on body, link styles, font sizes and typography.
   4. Use a base font-size on 10px on root (html) and then size the fonts on
      other components using rem. 15px = 1.5rem
   5. See globalInject function in Page.js
2. Style Flash - Because of SSR, there's a split second where our App on the client doesn't have the styles because we're waiting for the component to mount. Next.js gives you a way for, before render, it will crawl your App and insert all the styles in the HEAD tag on first page load, so there's no flash. See \_document.js in Pages folder.
   https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js

Prisma

1. Prima is a GraphQL implementation of a database.
2. Similar stack wise to how Mongoose is for MongoDB
   1. Mongoose is to MongoDB as Prisma is to a GraphQL set up database.
3. Prisma can be by itself, it's a thing alone. The datamodel.prisma file describes
   how and what the data is on the DB side. The config for prisma - primsa.yml - has the config for the DB, endpoints are referenced there and the data model file (datamodel.prisma)
4. The db.js file creates a new instance of a Prisma object and uses the typeDefs from the generated prisma.graphql which is generated from the datamodel.prisma file.

Yoga

1. Is the server we'll hit to Mutate Prisma, which in turn will write/read from DB
   2 Yoga is just an Express server, queries and mutations will go here and this will go play with Prisma.
2. createServer.js uses src/schema.graphql to interact with Prisma, and where we define
   the resolvers. This is what the front end hits. PUBLIC FACING schema.graphql is where you define what things will be available for you to work with from Apollo to Prisma. Describes the actions and logic of what/where the data will do on the DB.

Apollo

1. import { ApolloProvider } from "react-apollo"
   import withApollo from component that was created in withdata.js
1. Wrap App in \_app.js with the ApolloProvider, takes the client as a prop.
