let nextWorkoutId = 0;
export const addWorkout = (name, date) => {
  return {
    type: 'ADD_WORKOUT',
    id:   nextWorkoutId++,
    name: name,
    date: date
  }
};

export const goToWorkout = (id) => {
  return {
    type: 'GOTO_WORKOUT',
    id
  }
};

export const removeWorkout = (id) => {
  return {
    type: 'REMOVE_WORKOUT',
    id
  }
};
