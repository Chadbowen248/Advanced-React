const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      // for some reason, need to pass in info as second arg no clue why
      info
    )

    console.log(item)

    return item
  },
  async updateItem(parent, args, ctx, info) {
    // take a copy of updates
    const updates = { ...args }
    // remove the ID from the updates
    delete updates.id
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    )
  }
}

module.exports = Mutations
