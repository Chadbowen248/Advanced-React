# Advanced-React

Frontend
1. All Page View Components go in the pages dir.
2. Root must be called index.js
3. Need to wrap our views in a top level parent
   Component, so we can share state and methods
   to views. Next.js provides that top level
   Component but we need to extend it so we
   can nest the { Container } component in our
   own mark up. See _app.js.
        1. We'll wrap our Views in a Page Component
           wrapper, which will have styles and markup
           that we need on all pages, nav, footer.
        2. Page Component will bring in a Header, Footer, Meta
           and under Header,Meta and above Footer will call
           {props.children} so the nested Container component
           will populate there
