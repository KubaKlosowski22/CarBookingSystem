import knex from '../../knexfile';
import knex from 'knex';
import knexfile from '../../knexfile';

const env = process.env.NODE_ENV || 'development';

export default knex(knexfile[env]);