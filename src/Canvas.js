export default function Canvas({ data }) {
  return (
    <section>
      <h1>{data.strMeal}</h1>
      <img src={data.strMealThumb} width={300} alt="No Image Available" />
      <h2>Recipe Instructions</h2>
      <p>{data.strInstructions}</p>
    </section>
  );
}
