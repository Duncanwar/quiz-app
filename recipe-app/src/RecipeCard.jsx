import React from 'react';

function RecipeCard({recipe}) {
    const {label,image, url,ingredients} =recipe
    return (
        <div className='recipe-card'>
            <img src={image} alt={label} />
            <h2>{label}</h2>
            <a href={url} target='_blank' rel='noopener noreferrer'>View Recipe</a>
            <p>
                <b>Ingredients:</b> {ingredients.map((ingredients)=>ingredients.text).join(',')}
            </p>
        </div>
    );
}

export default RecipeCard;