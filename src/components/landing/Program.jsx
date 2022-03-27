import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import { BsArrowRight } from "react-icons/bs";

const Program = () => {
  return (
    <section>
      <div className="relative -z-10">
        <img className="w-[90%] sm:w-[70%] sm:mx-auto" src={program1} alt="" />
        <img
          className="absolute right-0 w-[27%] top-5 sm:w-[23%] sm:top-10"
          src={program2}
          alt=""
        />
        <h2 className="mt-10 sm:absolute bottom-3 left-0">
          Building Faster, <br /> smarter,together.
        </h2>
      </div>
      <p className="mt-7 sm:w-1/2">
        ARIES is a part of PIXIRHY, a global venture capital firm providing
        multi stage investment to develop and scale our founders' big ideas.
        SOSV invests in every HAX program startup with follow-on through
        pre-iPO.
      </p>
      <a
        className="text-primary text-base font-sans inline-flex space-x-3 hover:space-x-7 items-center uppercase mt-7"
        href="/"
      >
        <span>View Program</span>
        <BsArrowRight className="text-xl text-secondary transition-all flex" />
      </a>
    </section>
  );
};

export default Program;
