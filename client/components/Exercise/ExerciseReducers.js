/**
 * Created by Daniel on 2017-04-11.
 */
const exercise = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        id:        action.id,
        text:      action.text,
        numberOfSets: action.numberOfSets,
        completed: false
      };
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
    default:
      return state
  }
};

export default exercises
