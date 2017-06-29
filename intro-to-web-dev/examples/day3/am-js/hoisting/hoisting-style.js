function followRecipe() {
  // one style: write execution first
  var ingredients = gatherIngredients();
  var preppedStuff = prepareIngredients( ingredients );
  useHeatToCook( preppedStuff );
  finishingTouchesAndServe( preppedStuff );
  cleanUp();

  // then list function definitions alphabetically 
  function cleanUp() {
    ...
  }
  function finishingTouchesAndServe() {
    ...
  }
  function gatherIngredients() {
    ...
  }
  ...
}
