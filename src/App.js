import "./App.css";

// Components
import ButtonAlert from "./components/button-alert/ButtonAlert";

// Sections
import ButtonCounter from "./section/ButtonCounter";
import RecipeList from "./section/RecipeList";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <hr />
      <ButtonAlert />

      <ButtonCounter />

      <RecipeList />
    </div>
  );
}

export default App;
