const restful = require('node-restful')
const mongoose = restful.mongoose
const modelName = 'ToDo'
const schema = {
	description: {
		type: String,
		required: true
	},
	done: {
		type: Boolean,
		required: true,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
}
const toDoSchema = new mongoose.Schema(schema)

module.exports = restful.model(modelName, toDoSchema)