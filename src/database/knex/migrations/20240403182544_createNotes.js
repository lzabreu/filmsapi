export function up(knex) {
	return knex.schema.createTable('notes', (table) => {
		table.increments('id').primary()
		table.string('title')
		table.string('description')
		table.integer('rating')
		table
			.integer('user_id')
			.references('id')
			.inTable('users')
			.onDelete('CASCADE')
		table.timestamp('created_at').defaultTo(knex.fn.now())
		table.timestamp('updated_at').defaultTo(knex.fn.now())
	})
}
export function down(knex) {
	return knex.schema.dropTable('notes')
}
