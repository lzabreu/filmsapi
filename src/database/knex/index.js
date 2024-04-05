import { development } from '../../../knexfile.js'
import knex from 'knex'
//const knex = require('knex')
export const connection = knex(development)
