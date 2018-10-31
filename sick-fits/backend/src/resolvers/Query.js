const { forwardTo } = require("prisma-binding")

const Query = {
  // since the thing we want is already
  items: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   console.log('Getting Items!!');
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
}

module.exports = Query

// const Query = {
//     // a dog resolver
//     dogs(parent, args, ctx, info) {
//         global.dogs = global.dogs || [];
//         // this is where the database calls will go. notice we can hard code it
//         // the yoga server is hitting this file and returning shit
//         // in the playground, the playground is the express server, this will work since it's
//         // hardcoded, but in future, this is where we will talk with prisma/DB
//         return global.dogs
//         // return [{name: 'Rocky'}, {name: 'Ash'}]
//     },

//     cats(parent, args, ctx, info) {
//         global.cats = global.cats || [];
//         // this is where the database calls will go. notice we can hard code it
//         // the yoga server is hitting this file and returning shit
//         // in the playground, the playground is the express server, this will work since it's
//         // hardcoded, but in future, this is where we will talk with prisma/DB
//         return global.cats
//         // return [{name: 'Rocky'}, {name: 'Ash'}]
//     }
// };

// module.exports = Query;
