/**
 * Created by Daniel on 2017-04-11.
 */
const set = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SET':
      return {
        id:        action.id,
        weight:    action.weight,
        reps:      action.reps,
        completed: false
      };
    default:
      return state
  }
};

const sets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SET':
      return [
        ...state,
        set(undefined, action)
      ];
    default:
      return state
  }
};

export default sets
