import foodAnim from "../assets/food-animation.gif";

const Loader = () => {
  return (
    <div className="w-fit mx-auto flex flex-col items-center space-y-4 mt-12">
      <img src={foodAnim} alt="food animation" />

      <p className="text-2xl font-light">Loading ...</p>
    </div>
  );
};

export default Loader;
