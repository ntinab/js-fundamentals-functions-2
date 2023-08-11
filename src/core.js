// 1. Create a function named bakingTime that returns 50
function bakingTime() {
  return 50;
}

// 2. Create a function named remainingBakeTime
function remainingBakeTime(minutesInOven) {
  const totalBakeTime = bakingTime();
  return totalBakeTime - minutesInOven;
}

// 3. Create a function named calculatePreparationTime
function calculatePreparationTime(numberOfLayers) {
  const timePerLayer = 3;
  return numberOfLayers * timePerLayer;
}

// 4. Create a function named totalTimeSpent
function totalTimeSpent(numberOfLayers, minutesInOven) {
  const preparationTime = calculatePreparationTime(numberOfLayers);
  return preparationTime + minutesInOven;
}

// Don't change the code below this line
module.exports = {
  bakingTime /* eslint-disable-line no-undef */,
  remainingBakeTime /* eslint-disable-line no-undef */,
  calculatePreparationTime /* eslint-disable-line no-undef */,
  totalTimeSpent /* eslint-disable-line no-undef */
}
