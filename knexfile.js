
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
	client: 'sqlite3',
	connection: {
		filename: new URL('src/database/database.db', import.meta.url).pathname
	},
	pool: {
		afterCreate: (conn, done) => {
			conn.run('PRAGMA foreign_keys = ON', done)
		}
	},
	migrations: {
		directory: new URL('src/database/knex/migrations', import.meta.url).pathname
	},
	useNullAsDefault: true 
}
