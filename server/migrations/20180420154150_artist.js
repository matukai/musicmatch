
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('genre');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists');
};
