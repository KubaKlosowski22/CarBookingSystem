
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments('id').primary()
      table.string('firstName').notNull()
      table.string('secondName').notNull()
      table.string('email').unique().notNull()
      table.string('password').notNull()
      table.timestamps(false, true)
      
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
