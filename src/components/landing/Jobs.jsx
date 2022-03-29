import { ReactComponent as Line } from "../../assets/line.svg";
import { BsArrowRight } from "react-icons/bs";

const CATEGROY = [
  "Business development",
  "Data Science",
  "Finance",
  "Human Resources",
  "Operations",
  "Software",
  "Marketing",
];

const JOBS = [
  {
    sub: "kawaski",
    title: "Sales Intern - Right Hand to the COO.",
    type: "Internship - Paris @agronavo - marketing",
  },
  {
    sub: "CYPHER",
    title: "head of growth - medical device startup",
    type: "ful time - remote - business develepoment",
  },
  {
    sub: "kawaski",
    title: "Software Developer - Robot Systems",
    type: "Internship - Paris @agronavo - marketing",
  },
];

const Jobs = () => {
  return (
    <section id="jobs">
      <Line className="w-full" />
      <h2 className="mt-10 md:mt-14 mb-28">latest portfolio jobs.</h2>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-20 md:space-y-0">
        <div className="w-full flex flex-col space-y-5 md:basis-[30%] md:ml-32">
          <h3 className="mb-10">job categories</h3>
          {CATEGROY.map((item) => {
            return (
              <h4
                key={item}
                className="flex justify-between items-center font-light transition-all cursor-pointer hover:text-primary "
              >
                <span>{item}</span>
                <BsArrowRight className="text-secondary" />
              </h4>
            );
          })}
        </div>
        <div className="md:-order-1 flex flex-col space-y-10 md:basis-[70%]">
          {JOBS.map((job) => {
            return (
              <div key={job.title}>
                <div className="flex justify-between items-center space-x-10 cursor-pointer pb-10">
                  <div className="job-title">
                    <h6>{job.sub}</h6>
                    <h3 className="mt-3 mb-2 lg:w-3/4">{job.title}</h3>
                    <p>{job.type}</p>
                  </div>
                  <BsArrowRight className="text-secondary text-5xl" />
                </div>
                <Line className="w-full" />
              </div>
            );
          })}
        </div>
      </div>
      <a
        className="text-primary text-base font-sans inline-flex space-x-3 hover:space-x-7 items-center uppercase mt-14 sm:mt-20"
        href="/"
      >
        <span>Next jobs</span>
        <BsArrowRight className="text-xl text-secondary transition-all flex" />
      </a>
    </section>
  );
};

export default Jobs;
