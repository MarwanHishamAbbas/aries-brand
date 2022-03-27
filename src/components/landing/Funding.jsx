import funding_1 from "../../assets/funding-1.png";
import funding_2 from "../../assets/funding-2.png";
import funding_1_sub from "../../assets/funding-1-sub.png";
import funding_2_sub from "../../assets/funding-2-sub.png";
import { BsArrowRight } from "react-icons/bs";

const Funding = () => {
  return (
    <section id="funding">
      <div className="flex flex-col md:flex-row justify-between items-center mb-20">
        <h2>We invest $27 Billion per year into AI startups.</h2>
        <p className="md:w-3/4 mt-5 sm:mt-0">
          They are showing researches and writting regularly about the
          consequnces happening on AI. Our unique program is designed for
          startups, combining hands-on help from a deeply experienced product
          development team and a total investment package of $270,000.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-20 md:space-x-20 items-center mb-28">
        <div className="relative w-full -z-10">
          <img src={funding_1} alt="Moon" className="w-[80%] sm:w-[75%]" />
          <img
            src={funding_1_sub}
            alt="Robot"
            className="absolute right-0 top-10 w-[40%]"
          />
        </div>
        <div>
          <h6>KAWASKI</h6>
          <h3 className="sm:leading-[60px]">
            Corporobo Design Interview with Ben Lukas.
          </h3>
          <p className="mt-5 mb-11">
            We spoke to Robotic and sound designer Ben Lukas Boysen about the
            evolution of robot soundtracks and some of his top picks.
          </p>
          <a
            className="text-secondary text-base font-sans inline-flex space-x-3 hover:space-x-7 items-center uppercase"
            href="/"
          >
            <span>View project</span>
            <BsArrowRight className="text-xl text-primary transition-all flex" />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-20 items-center">
        <div className="relative w-full -z-10">
          <img
            src={funding_2}
            alt="Moon"
            className="w-[80%] sm:w-[75%] float-right"
          />
          <img
            src={funding_2_sub}
            alt="Robot"
            className="absolute left-0 top-10 w-[40%]"
          />
        </div>
        <div className="md:-order-1 md:mr-20">
          <h6>ROXERIN</h6>
          <h3 className="sm:leading-[60px]">
            Young Minds, Experience hand & Strong Command.
          </h3>
          <p className="mt-5 mb-11">
            We spoke to Robotic and sound designer Ben Lukas Boysen about the
            evolution of robot soundtracks and some of his top picks.
          </p>
          <a
            className="text-primary text-base font-sans inline-flex space-x-3 hover:space-x-7 items-center uppercase"
            href="/"
          >
            <span>View project</span>
            <BsArrowRight className="text-xl text-secondary transition-all flex" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Funding;
