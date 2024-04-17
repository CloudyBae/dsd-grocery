import { SPOONACULAR_API_KEY } from '@env';
import { useEffect, useState } from 'react';

export const useGetRecipeInfo = (recipeId) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchRecipeInfo = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${SPOONACULAR_API_KEY}`);
            const data = await response.json();
            setRecipe(data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
    }
    
    useEffect(() => {
        fetchRecipeInfo()
    }, [recipeId]);

    
    return { recipe, loading };
}