
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('email').notNullable().unique();
    table.string('username').notNullable().unique();
    table.string('password').notNullable().unique();
    table.integer('dateofbirth').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
