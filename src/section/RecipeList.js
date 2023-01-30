import { useEffect, useState } from "react";
import RecipeTable from "../components/recipe-table/RecipeTable";

const BASE_API = "https://www.themealdb.com/api/json/v1/1";

function RecipeList() {
  const [recipes, setRecipes] = useState([]); // set initial value of recipes as empty array
  const [isLoading, setIsLoading] = useState(false); // set initial value of isLoading as false
  const [error, setError] = useState(null); // set initial value of error as null

  async function getRecipeList() {
    setIsLoading(true); // set the value of isLoading to true
    try {
      const response = await fetch(`${BASE_API}/search.php?f=b`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
      setRecipes(data.meals); // set the value of recipes to array of meals from data.meals
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message ? error.message : "Failed to fetch recipe list"); // If erro happen, set the erro value
    }

    setIsLoading(false); // set the loading value to false
  }

  // React hook to perform side effects, such as fetching data or updating the browser's DOM.
  // In this case, it is fetching the data with getRecipesList function.
  // When you pass an empty array [] as the second argument to useEffect,
  // it tells React that the effect should only run once, when the component is first rendered.
  useEffect(() => {
    getRecipeList();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h4>Recipe Table Section</h4>
      <RecipeTable recipes={recipes} />
    </>
  );
}

export default RecipeList;
