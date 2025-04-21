import React from "react";

function RecipeStep(props) {
  const recipeSteps = props.steps.map((step, index) => {
    return <li key={index}>{step}</li>;
  });

  return <ol>{recipeSteps}</ol>;
}

export default RecipeStep;
