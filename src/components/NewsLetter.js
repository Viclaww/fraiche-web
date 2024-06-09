const NewsLetter = () => {
  return (
    <section className="bg-newsletter py-8 md:md:py-20 mt-8 font-medium bg-center gap-2 flex-col flex justify-center items-center">
      <div className="w-full flex justify-center flex-col text-center">
        <h1 className="text-xl md:text-3xl"> Join Our Exclusive Newsletter</h1>
        <p className="text-xs md:text-base">
          Get exclusive food offers when you join our newsletter
        </p>
      </div>
      <div className="flex mt-3">
        <input
          type="text"
          className="pl-2 md:w-[450px] rounded-s-md focus:outline-none text-black"
          placeholder="Youremail@mail.com"
        />
        <button className="bg-fraiche-yellow md:w-20 md:py-3 rounded-e-md px-2 py-2">
          Send
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
