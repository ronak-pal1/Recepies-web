import dishImage from "../assets/hero-section-dish.jpg";

const RecipeShortCard = ({
  recipeId,
  imgURL,
  title,
  summary,
  displayRecipe,
}) => {
  return (
    <div
      className="w-48 h-fit md:w-72 bg-slate-50 rounded-md hover:scale-105 transition-transform cursor-pointer"
      onClick={() => {
        console.log(summary);
        displayRecipe({ title, summary, recipeId, imgURL });
      }}
    >
      <img
        className="w-full h-2/4 md:h-3/4 object-cover"
        src={imgURL}
        alt="dish"
        loading="lazy"
      />

      <div className="px-3 py-3">
        <p className="text-sm md:text-md font-light">
          {title.substring(0, 40)}...
        </p>
      </div>
    </div>
  );
};

export default RecipeShortCard;
