import { AppError } from '../utils/AppError.js'
import crypto from 'node:crypto'
import { connection as knex } from '../database/knex/index.js'
import validator from 'validator'

export class UsersController {
	async create(req, res) {
		const { name, email, password, avatar } = req.body
		if (!validator.isEmail(email)) {
			throw new AppError('Email invalido')
		}
		
		const findUser = await knex('users').select('email').where('email', email)

		if (findUser.length > 0) {
			throw new AppError('Este email ja existe')
		}

		const passwordHash = crypto
			.createHash('sha256')
			.update(password)
			.digest('hex')

		await knex('users').insert({
			name,
			email,
			password: passwordHash,
			avatar,
		})

		return res.status(201).json()
	}

	async index(req, res) {
		try {
			const users = await knex('users').select('*')
			return res.json(users)
		} catch (error) {
			throw new AppError(error)
		}
	}

	async delete(request, response) {
		const { id } = request.params
		await knex('users').where({ id }).delete()
		return response.json()
	}
}
