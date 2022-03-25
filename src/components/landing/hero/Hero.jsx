import { ReactComponent as ScrollDown } from "../../../assets/scroll-down.svg";

const Hero = () => {
  return (
    <section className="flex flex-col my-32 sm:my-36 text-center sm:justify-center items-center hero">
      <h1>
        We Are Here For Your <br />
        <span className="grad-text"> Artificial Intelligence</span> <br />
        Startup.
      </h1>
      <ScrollDown className="text-7xl mt-20 animate-bounce" />
    </section>
  );
};

export default Hero;
