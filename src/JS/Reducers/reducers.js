import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from '../Actions/actions';

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        const newTodo = {
            id: Date.now(),
            description: action.payload.description,
            isDone: false,
        };
        return {
            ...state,
            todos: [...state.todos, newTodo],
        };
        case TOGGLE_TODO:
        return {
            ...state,
            todos: state.todos.map((todo) =>
            todo.id === action.payload.id
                ? { ...todo, isDone: !todo.isDone }
                : todo
            ),
        };
        case DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
        case EDIT_TODO:
        return {
            ...state,
            todos: state.todos.map((todo) =>
            todo.id === action.payload.id
                ? { ...todo, description: action.payload.description }
                : todo
            ),
        };
        default:
        return state;
    }
};

export default todoReducer;
