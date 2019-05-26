const ToDo = require('./toDO')

const updateOptions = {
	new: true,
	runValidators: true
}

ToDo.methods([ 'get', 'post', 'put', 'delete' ])
ToDo.updateOptions(updateOptions)

module.exports = ToDo