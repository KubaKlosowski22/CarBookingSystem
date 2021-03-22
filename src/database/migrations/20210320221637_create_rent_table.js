
exports.up = function(knex) {
    return knex.schema.createTable('rent', (table) => {
        table.increments('id').primary()
        table.integer('car_id').unsigned().notNullable()
        table.foreign('car_id').references('car.id')
        table.integer('user_id').unsigned().notNullable()
        table.foreign('user_id').references('user.id')
        table.datetime('start_date')
        table.datetime('end_date')
        table.timestamps(false, true)
    })
};

exports.down = function(knex) {
  
};
