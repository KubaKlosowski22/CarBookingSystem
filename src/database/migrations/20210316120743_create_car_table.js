
exports.up = function(knex) {
    return knex.schema.createTable('car', (table) => {
        table.increments('id').primary()
        table.string('brand').notNull()
        table.string('model').notNull()
        table.integer('horse_power').notNull()
        table.string('production_year').notNull()
        table.boolean('is_available').notNull().defaultTo(true);
        table.integer('price_per_day')
        table.timestamps(false, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car');
};
