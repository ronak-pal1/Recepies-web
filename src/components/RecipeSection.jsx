import { useEffect, useRef, useState } from "react";
import dishImage from "../assets/hero-section-dish.jpg";
import RecipeShortCard from "./RecipeShortCard";

const RecipeSection = () => {
  const dataFetchedRef = useRef(false);

  const [allRecipes, setAllRecipes] = useState([]);

  const [recipe, setRecipe] = useState({
    title: "Avocado-Mango Salad With Grilled Shrimp",
    summary:
      'Avocado-Mango Salad With Grilled Shrimp might be a good recipe to expand your main course recipe box. Watching your figure? This gluten free, dairy free, and pescatarian recipe has <b>507 calories</b>, <b>49g of protein</b>, and <b>22g of fat</b> per serving. This recipe serves 4. For <b>$6.44 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. This recipe is liked by 6 foodies and cooks. Head to the store and pick up lime wedges, hass avocados, lime zest, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. Overall, this recipe earns a <b>solid spoonacular score of 75%</b>. Similar recipes are <a href="https://spoonacular.com/recipes/avocado-mango-salad-with-grilled-shrimp-1373067">Avocado-Mango Salad With Grilled Shrimp</a>, <a href="https://spoonacular.com/recipes/mango-avocado-and-grilled-shrimp-salad-with-a-peanut-dressing-249037">Mango, Avocado and Grilled Shrimp Salad with a Peanut Dressing</a>, and <a href="https://spoonacular.com/recipes/mango-avocado-and-grilled-shrimp-salad-with-a-peanut-dressing-1294163">Mango, Avocado and Grilled Shrimp Salad with a Peanut Dressing</a>.',
    imgURL: "https://spoonacular.com/recipeImages/633171-556x370.jpg",
    recipeId: 633171,
  });

  const shortIt = (text) => {
    return recipe.summary.substring(0, 300);
  };

  const getData = async () => {
    await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setAllRecipes(data.recipes);
      })
      .catch((err) => console.log("error: ", err));
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;

    dataFetchedRef.current = true;

    getData();
  }, []);

  return (
    <div className="bg-yellow-400 py-10 2xl:px-5">
      <h1 className="text-2xl 2xl:text-4xl text-center font-medium">Recipes</h1>

      <div className="mt-10 2xl:mt-20 flex flex-col 2xl:flex-row 2xl:justify-evenly  space-y-8 2xl:space-y-0">
        <div>
          <img
            className="mx-auto cursor-pointer mb-4 hidden 2xl:block"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjElEQVR4nO2az29MURTHP6I6IxV02jKx0qVU8E+g9ZtdqR1ho6Rs0XVZSZr4O/yI1AJNEL+1iagqK3Qh2Gk1yMiJ70tOxsz0zZs7M4/4Ji99nXPvuefce+6555z74D/+XeSAfcAF4DrwCvgCLOix9ynRrM1eoJ2UIAscBm4CP4FClc8PYAwYADLNUGA5cBqYdUJ9A24BZ7UyGzTjy/S06zejnQNuq0/U/wMwpMlpCHYCb50Aj4EjwKoEvFYDR4Enjt8boI86wmbqshvwKbAtIP9e4LnjP1qP1clLcBvgK3ACWBp6EH7zPAnMudVeG4p5t5a7IK+zkfpjEzCtMWckQ03ocgwfAZ00Du3AXY39VlaRCFlnTveBNhqPNuCBM7NEe+ayMyc77JqFDmcV5gCqdrHRxm7EnoizZ+Ykk3m32IdddE6Yd0oLTrnNH8vEzrhzoh4uNilagAnJZkpVREahgjXeSvqwQ7LNLrYqA85DpBFLnCc9WKnhTTWy2CkE8oqjJmo5B4pwTDLeoAxyCqu/JQwAi5GX645ip6lAyrQrv/leTs59GtBC8ZBKTBW9h1DmjvjtKUW8KKLlEyGVyJf5rRYMi9dIKeL1SlrGhEWqL8THUt11jrbG0aaLaNViv/hcKUV8LaJlcUkQZ9ZDrUyPm6w/8FnEXOCVKEaIlelU/4+liAsittZRiVDKZFydIIgiSZQIoUymkiLVmlYtStSqTFcl06p2s08GcqfeAUyE2OzXRLQKYBw8VNUjxAGXlxIPQrjf6EC04lnaMVzpQAwZotQb45J1V7lgLAoarQKYVuRc0LiyXKMxaWplzLTiuGS0kKosDqmR5RBpTayeScb+xQ6a92q4nfRhl2R7F+caYkiNn6Ww+DAp2QbjdMi6Wq8VlNOCIRcBxL4U6lOnORXHmo0twLxkqvoqY9TNgJUtm4UuFeVMlktJGGRVFioodGhGEXuFQqGC/mZqmY1X7lrB/m/kwXfPXcfVfOHT7ZbWzGwzjdkTMxrTovL1oRivdWY2p9qrucPQaJF3mnfmZDlLUGSdA4hyh76AJ7ZdZUTnRLSx63r33uuWParaH0v4FUNOsVMUdhRkSiFvixddnVMunCkoIrXw+rwSnx657VY9Hbo0OqA2465OEIUdg836AiKjqvgNpQDVfsLxXVFsf7MUKAUrKO9W1nZVefgn91GNvb9UejqitmXzif/gL8cvZOJOLT/oEqcAAAAASUVORK5CYII="
          />

          <div className="w-screen 2xl:w-fit overflow-x-scroll 2xl:overflow-x-hidden py-6 2xl:py-0 2xl:p-8 2xl:overflow-y-scroll scrollbar 2xl:scrollbar-w-1 scrollbar-h-0.5 scrollbar-thumb-slate-200 scrollbar-track-rounded-full scrollbar-track-black">
            <div className="flex justify-evenly [&>div]:m-2 w-fit 2xl:h-[700px] 2xl:grid 2xl:grid-cols-2">
              {allRecipes.map((recipeInfo) => (
                <RecipeShortCard
                  key={recipeInfo.id}
                  id={recipeInfo.id}
                  title={recipeInfo.title}
                  summary={recipeInfo.summary}
                  imgURL={recipeInfo.image}
                  displayRecipe={setRecipe}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center 2xl:block">
          <div className="w-4/5 2xl:max-w-96">
            <img src={recipe.imgURL} alt="dish" loading="lazy" />
            <div className="flex flex-col space-y-3 my-5">
              <p className="text-lg md:text-2xl">{recipe.title}</p>
              <button className="bg-white w-fit py-1 px-6 rounded-md text-sm sm:text-base">
                Full Recipe
              </button>
            </div>
            <p className="text-sm md:text-base font-light">
              {shortIt(recipe.summary)}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
