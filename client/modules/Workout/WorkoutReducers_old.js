/**
 * Created by Daniel on 2017-04-11.
 */
const workout = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT': {
      return {
        id: action.id,
        name: action.name,
        date: action.date
      };
    }

    case 'GOTO_WORKOUT': {
      return {
        id: action.id
      };
    }

    case 'REMOVE_WORKOUT': {
      console.log("Remove workout not yet implemented");
      return;
    }


    default:
      return state
  }
};

const workouts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORKOUT': {
      return [
        ...state,
        workout(undefined, action)
      ];
    }
    case 'REMOVE_WORKOUT': {
      console.log("Remove workout not yet implemented");
      return;
    }
    default:
      return state
  }
};

export default workouts
