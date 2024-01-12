import { createStore, combineReducers} from 'redux';



const redusers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload.text,
          completed: false
        }
      ];

      case 'TOGGLE_TODO':
  return state.map((todo, index) =>
    index === action.payload.index
      ? { ...todo, completed: !todo.completed }
      : todo
  );

  case 'DELETE_TODO':
    return state.filter((_, indexTodo) => indexTodo !== action.payload.index);
  

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: redusers
});

const store = createStore(rootReducer);

export default store;
