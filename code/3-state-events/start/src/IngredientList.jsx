import "./IngredientList.css";
import React from "react";

function IngredientList(props) {
  const ingredientListItems = props.ingredients.map((ingredient, index) => {
    return (
      <li
        key={index}
        className={ingredient.prepared ? "prepared" : ""}
        // TODO: Add onClick event
        onClick={() => props.onClick(index)} // pass the index of the ingredient to the event handler
      >
        {ingredient.name}
      </li>
    );
  });

  return <ul>{ingredientListItems}</ul>;
}

export default IngredientList;
