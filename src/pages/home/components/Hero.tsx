import { RiSearch2Line } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#0E0F12] to-[#151928]">
      <section className="px-4  py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left text-white md:text-center">
          <h1 className="mb-6 text-4xl  max-w-2xl mx-auto leading-none tracking-normal  md:text-6xl md:tracking-tight">
            Discover Your Favorite
            <span className="block w-full font-bold  lg:inline">
              {" "}
              Job with GetJob
            </span>
          </h1>
          <p className="px-0 mb-6 max-w-3xl mx-auto text-lg text-white font-light md:text-xl lg:px-24">
            Thousands of jobs here. Now you can find your dream job from home,
            anywhere and anytime with getjob.
          </p>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hellonext feedback boards software screenshot"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
