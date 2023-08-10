// 1. To help Phil keep track of his baking time, create a function named timerStatus
function timerStatus(remainingMinutes) {
  if (remainingMinutes === 0) {
    return "Phil's cake is ready!";
  } else if (remainingMinutes > 0) {
    return "The cake is still baking!";
  } else {
    return "You didn't set a timer!";
  }
}

// 2. To help Phil prepare ahead of time, create a function named estimatePrepTime
function estimatePrepTime(ingredients, prepTimePerIngredient = 2) {
  const totalPrepTime = ingredients.length * prepTimePerIngredient;
  return totalPrepTime;
}

// 3. Phil needs to know the quantity of milk and eggs to use! Create a function named calculateQuantities
function calculateQuantities(ingredients, numberOfLayers) {
  const quantities = {
    sugar: ingredients.includes('sugar') ? numberOfLayers * 100 : 0,
    eggs: ingredients.includes('eggs') ? numberOfLayers * 2 : 0
  };
  return quantities;
}

// 4. Phil's cake is pretty small and only provides 1 portion. He wants to make a bigger one!
// Create a function named improveRecipe
function improveRecipe(recipe, portions) {
  const improvedRecipe = {};
  for (const ingredient in recipe) {
    improvedRecipe[ingredient] = recipe[ingredient] * portions;
  }
  return improvedRecipe;
}

// Don't change the code below this line
module.exports = {
  timerStatus /* eslint-disable-line no-undef */,
  estimatePrepTime /* eslint-disable-line no-undef */,
  calculateQuantities /* eslint-disable-line no-undef */,
  improveRecipe /* eslint-disable-line no-undef */
}
