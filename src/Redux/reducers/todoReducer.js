import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

// INITIAL STATE
const initialState = {
    todos: [
        { text: "apple", completed: true },
        { text: "mango", completed: false }

    ]
}

//REDUCERS
export function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((task, i) => {
                    if (i === action.index) {
                        {
                            task.completed = !task.completed;
                        }
                    }
                    return task;
                })
            }

        default:
            return state;
    }

}