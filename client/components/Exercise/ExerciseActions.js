let nextExerciseId = 0;
export const addExercise = (text, numberOfSets) => {
  return {
    type: 'ADD_EXERCISE',
    id:   nextExerciseId++,
    numberOfSets: numberOfSets,
    text
  }
};
