module.exports = ({ env }) => ({
	defaultConnection: 'default',
	connections: {
		default: {
			connector: 'bookshelf',
			settings: {
				client: 'mysql',
				host: env('DATABASE_HOST', '103.153.73.48'),
				port: env.int('DATABASE_PORT', 3306),
				database: env('DATABASE_NAME', 'quabao'),
				username: env('DATABASE_USERNAME', 'quabao'),
				password: env('DATABASE_PASSWORD', 'M4tkh4uqu4b40!!!@@@'),
				ssl: {
					rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
				},
			},
			options: {
				ssl: false,
			},
		},
	},
})
