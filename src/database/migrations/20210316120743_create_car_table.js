
exports.up = function(knex) {
    return knex.schema.createTable('car', (table) => {
        table.increments('id').primary()
        table.string('brand').notNull()
        table.string('model').notNull()
        table.integer('horsePower').notNull()
        table.string('productionYear').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car');
};
