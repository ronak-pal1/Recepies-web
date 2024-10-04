import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-yellow-400 flex  flex-col space-y-7 md:space-y-0 md:flex-row justify-evenly items-center">
      <p className="text-lg md:text-4xl bg-white px-7 py-3 rounded-sm">
        Flavor<span className="text-yellow-500">Folio</span>
      </p>
      <div className="w-2/4 flex flex-col sm:flex-row  space-y-7 sm:space-y-0 justify-evenly">
        <div className="flex flex-col space-y-2 [&>a]:font-light [&>a]:text-center sm:[&>a]:text-left">
          <Link to="\">Recipes</Link>
          <Link to="\">Wines</Link>
          <Link to="\">Make from fridge</Link>
          <Link to="\">Meal plan</Link>
          <Link to="\">Search food videos</Link>
          <Link to="\">Menu foods</Link>
        </div>
        <div className="flex flex-col space-y-2 [&>a]:font-light [&>a]:text-center sm:[&>a]:text-left">
          <a href="www.google.com">X</a>
          <a href="">Instagram</a>
          <a href="">Linkedin</a>
          <a href="">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
