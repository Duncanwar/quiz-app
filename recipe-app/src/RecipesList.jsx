import React from 'react';
import RecipeCard from './RecipeCard';

function RecipesList({recipes}) {
    return (
        <div className='recipe-list'>
            {recipes.map((recipe)=>(
                <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />
            ))}
        </div>
    );
}

export default RecipesList;