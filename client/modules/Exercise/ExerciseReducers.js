/**
 * Created by Daniel on 2017-04-11.
 */
const exercise = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        id:        action.id,
        text:      action.text,
        completed: false
      };
    case 'TOGGLE_EXERCISE':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state
  }
};

const exercises = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return [
        ...state,
        exercise(undefined, action)
      ];
    case 'TOGGLE_EXERCISE':
      return state.map(t =>
        exercise(t, action)
      );
    default:
      return state
  }
};

export default exercises
