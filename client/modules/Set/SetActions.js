let numberOfSets = 0;
export const addSet = () => {
  return {
    type: 'ADD_SET',
    id:   numberOfSets,
    numberOfSets: numberOfSets++,
  }
};
