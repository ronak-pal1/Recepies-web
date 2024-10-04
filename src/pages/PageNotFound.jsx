import { useNavigate } from "react-router-dom";
import foodAnim from "../assets/food-animation.gif";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-fit h-screen mx-auto flex flex-col items-center space-y-7 mt-12">
      <img src={foodAnim} alt="food animation" />

      <p className="text-2xl font-light"> 404 Page Not Found</p>

      <button
        onClick={() => navigate("/")}
        className="bg-yellow-400 py-3 px-5 rounded-md font-light"
      >
        Back to home
      </button>
    </div>
  );
};

export default PageNotFound;
