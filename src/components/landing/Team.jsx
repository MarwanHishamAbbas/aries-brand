import Team_1 from "../../assets/team-1.png";
import Team_2 from "../../assets/team-2.png";
import Team_3 from "../../assets/team-3.png";
import Team_4 from "../../assets/team-4.png";
import { ReactComponent as Line } from "../../assets/line-vertical.svg";
import { BsArrowRight } from "react-icons/bs";
const TEAM = [
  {
    src: Team_1,
    name: "Edris Alba",
    position: "Leader",
  },
  {
    src: Team_2,
    name: "Mark Rafello",
    position: "Co-Leader",
  },
  {
    src: Team_3,
    name: "Chris Rogers",
    position: "Lead Marketing",
  },
  {
    src: Team_4,
    name: "Roberto Simioni",
    position: "Lead Technician",
  },
];

const Team = () => {
  return (
    <section className="sm:flex justify-between items-center sm:space-x-20">
      <div className="grid text-center grid-cols-2 gap-x-7 gap-y-10 basis-1/2">
        {TEAM.map((member) => {
          return (
            <div key={member.name}>
              <img className="w-full" src={member.src} alt={member.name} />
              <h4 className="my-2">{member.name}</h4>
              <p>{member.position}</p>
            </div>
          );
        })}
      </div>
      <Line className="hidden sm:block sm:h-screen" />
      <div className="mt-14 basis-1/2 flex flex-col sm:ml-32">
        <h2>Genius minds behind this program for you.</h2>
        <p className="mt-8 mb-7 sm:mb-0">
          We are a group of engineers, designers and entrepreneurs brought
          together to support early stage startups working on artificial
          intelligence.
        </p>
        <a
          className="text-primary text-base font-sans inline-flex space-x-3 hover:space-x-7 items-center uppercase sm:-order-1 sm:mb-5"
          href="/"
        >
          <span>View Team</span>
          <BsArrowRight className="text-xl text-secondary transition-all flex" />
        </a>
      </div>
    </section>
  );
};

export default Team;
