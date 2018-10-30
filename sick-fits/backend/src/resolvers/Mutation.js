const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: Check if they are logged in
    
        const item = await ctx.db.mutation.createItem(
          {
            data: {
              ...args,
            },
          },
          // for some reason, need to pass in info as second arg no clue why
          info
        );
    
        console.log(item);
    
        return item;
      }
};

module.exports = Mutations;
