// This recipe table component here only use pure css,
// it is possible that the styles may accidentally affect other parts of the application.
// This is because the styles in a global CSS file apply to the entire document, not just a specific component.
import "./recipeTable.css";

function RecipeTable(props) {
  const { recipes } = props;

  return (
    <table className="my-table">
      <thead>
        <tr>
          <th className="my-header">Meal Id</th>
          <th className="my-header">Meal Name</th>
          <th className="my-header">Meal Category</th>
          <th className="my-header">Meal Area</th>
          <th className="my-header">Meal Tags</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe) => (
          <tr key={recipe.idMeal}>
            <td className="my-cell">{recipe.idMeal}</td>
            <td className="my-cell">{recipe.strMeal}</td>
            <td className="my-cell">{recipe.strCategory}</td>
            <td className="my-cell">{recipe.strArea}</td>
            <td className="my-cell">{recipe.strTags}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecipeTable;
