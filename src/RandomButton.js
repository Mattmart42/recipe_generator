export default function RandomButton({ action }) {
  function randomRecipeID() {
    action(Math.floor(Math.random() * 321 + 52765));
  }

  return <button onClick={randomRecipeID}>Get Random Recipe</button>;
}
