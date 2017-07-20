import { combineReducers } from 'redux'

const todos = (state = {
	todos: []
}, action) => {
	switch (action.type) {
		default:
			return state
	}

}

const app = combineReducers({
	todos
})

export default app
