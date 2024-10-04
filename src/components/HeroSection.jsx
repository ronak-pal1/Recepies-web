import { useNavigate } from "react-router-dom";
import heroDish from "../assets/hero-section-dish.jpg";
import { lazy, useEffect, useRef, useState } from "react";

const MenuButton = ({ text }) => {
  return (
    <button className="bg-yellow-400 text-xs py-3 px-5 sm:text-base sm:px-7 font-light w-fit hover:scale-110 rounded-e-md transition-transform">
      {text}
    </button>
  );
};

const HeroSection = () => {
  const dataFetchedRef = useRef(false);
  const navigate = useNavigate();

  const [randomJoke, setRandomJoke] = useState(null);

  const fetchJoke = async () => {
    await fetch(
      `https://api.spoonacular.com/food/jokes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => setRandomJoke(data.text))
      .catch((err) => console.log("error: ", err));
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;

    dataFetchedRef.current = true;

    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col-reverse 2xl:flex-row 2xl:justify-center 2xl:items-center">
      <div className="w-full flex flex-col justify-center items-center space-y-7 my-10 2xl:my-0 2xl:block 2xl:w-1/2 2xl:pl-16">
        <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-light">
          Find your favorite <span className="text-yellow-500">recipie</span>
        </p>

        <button
          onClick={() => navigate("recipes")}
          className="bg-yellow-400 text-sm px-5 sm:px-7 sm:text-base py-2 rounded-md hover:scale-110 transition-transform"
        >
          Show Recipies
        </button>
      </div>

      <div className="w-full 2xl:w-10/12 relative">
        <img src={heroDish} alt="dish" loading="lazy" />
        <div className="absolute top-0 h-full pr-8 sm:pr-4 overflow-y-scroll scrollbar scrollbar-w-0.5 scrollbar-track-transparent scrollbar-thumb-yellow-300 scrollbar-thumb-rounded-sm">
          <div className="flex flex-col space-y-4 mt-2">
            <MenuButton text="Recipes" />
            <MenuButton text="Menu foods" />
            <MenuButton text="Wines" />
            <MenuButton text="Make from fridge" />
            <MenuButton text="Meal plan" />
            <MenuButton text="Food videos" />
          </div>
        </div>

        {randomJoke != null && (
          <div className="text-sm md:text-base hidden bg-white absolute bottom-10 right-2 px-5 py-4 rounded-md font-light h-24 w-1/2 overflow-y-scroll">
            {randomJoke}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
