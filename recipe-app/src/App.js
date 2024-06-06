import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipesList from "./RecipesList";

const API_ID = "e617d41a";
const API_KEY = "59abdb73606ae8952c86424532bfe90a";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const searchRecipes = async (searchTerm) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    setRecipes(response.data.hits);
  };
  useEffect(() => {
    if (searchTerm) searchRecipes(searchTerm);
  }, [searchTerm]);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  return (
    <div className="App">
      <h1>Recipes app</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Recipes"
      />
      {recipes.length > 0 ? (
        <RecipesList recipes={recipes} />
      ) : (
        <p>No Recipe found</p>
      )}
    </div>
  );
}

export default App;
