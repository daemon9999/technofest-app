import { IconType } from "react-icons";
import { BsDropletHalf, BsFillBarChartLineFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { FaSunPlantWilt } from "react-icons/fa6";
import { MdOutlineEdgesensorHigh, MdSatelliteAlt } from "react-icons/md";
import { TbTrees } from "react-icons/tb";


interface SourceItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}
export default function Sources() {
  const sources: SourceItem[] = [
    {
      id: 1,
      title: "Sensor",
      description: "Network of low-cost soil sensors",
      icon: MdOutlineEdgesensorHigh,
    },
    {
      id: 2,
      title: "Field scouting",
      description: "Up-to-date digital journal of your fields",
      icon: FaSunPlantWilt,
    },
    {
      id: 3,
      title: "Satellite",
      description: "Monitor large or remote areas",
      icon: MdSatelliteAlt,
    },
    {
      id: 4,
      title: "Weather",
      description: "Supplementary public weather data",
      icon: TbTrees,
    },
    {
      id: 5,
      title: "Soil",
      description: "Type, temperature, texture and moisture",
      icon: BsDropletHalf,
    },
    {
      id: 6,
      title: "Crop",
      description: "Cultivation plans and overview",
      icon: BsFillBarChartLineFill,
    },
  ];
  return (
    <section className="bg-100 py-10 shadow-md shadow-10" id="resources">
      <div className="container flex flex-col gap-y-10 items-center mx-auto w-[90%] text-400">
        <div className="flex flex-col items-center gap-y-4 mr-1">
          <h5 className="uppercase text-4xl tracking-wider font-montserrat font-black">
            Multiple Data Sources
          </h5>
          <p className="text-xl font-medium">
            Valuable Insights collected 24/7
          </p>
        </div>

        <div className="grid grid-cols-6 gap-10 w-full place-items-center">
          {sources.map((source: SourceItem) => (
            <div
              key={source.id}
              className="flex flex-col border border-400 hover:text-100 cursor-pointer transition-all duration-300 text-400 p-4 rounded-lg gap-y-4 items-center hover:bg-400"
            >
              <span>
                <source.icon size={40} />
              </span>
              <p className="text-xl font-medium">{source.title}</p>
              <p className="text-center ">{source.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-300 w-1/2 px-4 py-3 flex items-start gap-x-3 rounded font-semibold leading-7 tracking-wider">
          <span className="mt-1">
            <FaInfoCircle size={24} />
          </span>
          The leading minds in technology, data science and agronomy are working
          to address the great challenge of our time. Learn how we’re helping
          farmers sustainably grow enough for a growing world.
        </div>
      </div>
    </section>
  );
}
