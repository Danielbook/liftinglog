let nextExerciseId = 0;
export const addExercise = (text) => {
  return {
    type: 'ADD_EXERCISE',
    id:   nextExerciseId++,
    text
  }
};

export const toggleExercise = (id) => {
  return {
    type: 'TOGGLE_EXERCISE',
    id
  }
};
