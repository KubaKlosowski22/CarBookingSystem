
exports.up = function(knex) {
    return knex.schema.createTable('country', (table) => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.timestamps(false, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('country');
};
