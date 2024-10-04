const SectionTemplate = ({
  title,
  summary,
  buttonTitle,
  buttonLink,
  image,
}) => {
  return (
    <div className="w-full bg-black relative">
      <img
        className="w-full h-72 sm:h-96 object-cover opacity-60"
        src={image}
        alt="section background"
        loading="lazy"
      />{" "}
      <div className="absolute top-0 w-full space-y-5 flex flex-col items-center h-full justify-center">
        <h1 className="text-white text-2xl 2xl:text-4xl font-md">{title}</h1>
        <p className="text-white sm:text-xl 2xl:text-3xl font-light text-center">
          {summary}
        </p>

        <button className="bg-white w-fit py-2 px-4 sm:py-3 sm:px-7 font-light rounded-sm text-sm sm:text-base hover:scale-110 transition-transform">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default SectionTemplate;
