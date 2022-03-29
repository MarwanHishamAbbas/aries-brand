import { ReactComponent as Line } from "../../assets/line.svg";
import { ReactComponent as Icon_1 } from "../../assets/icon-1.svg";
import { ReactComponent as Icon_2 } from "../../assets/icon-2.svg";
import { ReactComponent as Icon_3 } from "../../assets/icon-3.svg";
import { ReactComponent as Icon_4 } from "../../assets/icon-4.svg";
import { ReactComponent as Icon_5 } from "../../assets/icon-5.svg";
import { ReactComponent as Icon_6 } from "../../assets/icon-6.svg";
import { ReactComponent as Icon_7 } from "../../assets/icon-7.svg";
import { ReactComponent as Icon_8 } from "../../assets/icon-8.svg";

const BRANDS = [
  {
    name: "atomin",
    icon: <Icon_1 />,
  },
  {
    name: "oracle",
    icon: <Icon_2 />,
  },
  {
    name: "jarvice",
    icon: <Icon_3 />,
  },
  {
    name: "raxon",
    icon: <Icon_4 />,
  },
  {
    name: "tindo",
    icon: <Icon_5 />,
  },
  {
    name: "kawaski",
    icon: <Icon_6 />,
  },
  {
    name: "cypher",
    icon: <Icon_7 />,
  },
  {
    name: "ordix",
    icon: <Icon_8 />,
  },
];

const Sponsorship = () => {
  return (
    <section>
      <Line className="w-full" />
      <h2 className="mt-10 sm:mt-14 mb-28">our Investment Portfolios.</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 sm:gap-y-10">
        {BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="inline-flex justify-center px-4 py-8 items-center space-x-3 transition-all cursor-default brand"
          >
            <span className="text-2xl transition-all">{brand.icon}</span>
            <h4 className="uppercase text-body font-light">{brand.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsorship;
