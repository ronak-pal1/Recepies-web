import HeroSection from "../components/HeroSection";
import RecipeSection from "../components/RecipeSection";
import SectionTemplate from "../components/SectionTemplate";

import wineImage from "../assets/wine.jpg";
import makeFromFridgeImage from "../assets/make-from-fridge.jpg";
import menuFoodsImage from "../assets/menu-foods.jpg";
import mealPlanImage from "../assets/meal-plan.jpg";
import foodVideoImage from "../assets/youtube-food-videos.jpg";

const Home = () => {
  return (
    <>
      <HeroSection />
      <RecipeSection />
      <SectionTemplate
        title="Wines"
        summary="Find the best wine recommandation"
        buttonTitle="Wines Page"
        image={wineImage}
      />
      <SectionTemplate
        title="Make From Fridge"
        summary="Make dish from your fridge's ingrediants"
        buttonTitle="Make From Fridge page"
        image={makeFromFridgeImage}
      />
      <SectionTemplate
        title="Menu Foods"
        summary="Get various menu food recommandation"
        buttonTitle="Menu page"
        image={menuFoodsImage}
      />
      <SectionTemplate
        title="Meal Plan"
        summary="Generate a meal plan for a day"
        buttonTitle="Meal plan page"
        image={mealPlanImage}
      />
      <SectionTemplate
        title="Food Videos"
        summary="Search various food videos from youtube"
        buttonTitle="Videos page"
        image={foodVideoImage}
      />
    </>
  );
};

export default Home;
