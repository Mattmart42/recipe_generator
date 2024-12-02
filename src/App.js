import "./styles.css";
import RandomButton from "./RandomButton";
import Canvas from "./Canvas";
import { useEffect, useState } from "react";

export default function App() {
  const [id, setID] = useState(53085);
  const [data, setInfo] = useState(null);

  function fetchRecipe() {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        if (r.meals) {
          setInfo(r.meals[0]);
        } else {
          setInfo(null);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(fetchRecipe, [id]);

  return (
    <div className="App">
      <div className="flex-wrapper">
        <RandomButton action={setID} />
      </div>

      <div className="grid-container">
        {data ? (
          <Canvas data={data} />
        ) : (
          <p>Unable to fetch recipe. Try again!</p>
        )}
      </div>
    </div>
  );
}
