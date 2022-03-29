import { BsArrowRight } from "react-icons/bs";
const ContactForm = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between space-y-16 sm:space-x-20 sm:space-y-0">
      <div>
        <h2 className="grad-text mb-7">
          we help you to turn ideas into reality.
        </h2>
        <p className="w-3/4">
          If your research processes have unique features, and you are looking
          for an individual funding solution - we can help.
        </p>
      </div>
      <div className="basis-1/2 w-full">
        <form action="submit" className="flex flex-col space-y-5 contact-form">
          <div className="relative">
            <input type="text" placeholder="Name*" className="w-full" />
            <span className="absolute bottom-0 left-5 w-16 h-[2px] after-span"></span>
          </div>
          <div className="relative">
            <input type="text" placeholder="Email*" className="w-full" />
            <span className="absolute bottom-0 left-5 w-16 h-[2px] after-span"></span>
          </div>
          <div className="relative">
            <input type="text" placeholder="Message*" className="w-full" />
            <span className="absolute bottom-0 left-5 w-16 h-[2px] after-span"></span>
          </div>
        </form>
        <a
          className="text-primary text-base font-sans inline-flex space-x-3 hover:space-x-7 items-center uppercase mt-16"
          href="/"
        >
          <span>get in touch</span>
          <BsArrowRight className="text-xl text-secondary transition-all flex" />
        </a>
      </div>
    </section>
  );
};

export default ContactForm;
