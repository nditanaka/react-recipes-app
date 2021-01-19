import React from 'react';
import style from '../recipe.module.css';
import { v4 as uuidv4 } from 'uuid';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1> {title} </h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li  key={uuidv4()}> {ingredient.text} </li>
        ))}
      </ul>
      <p>Calories: {calories}</p>
      <img src={image} alt='' className={style.image} />
    </div>
  );
};

export default Recipe;
