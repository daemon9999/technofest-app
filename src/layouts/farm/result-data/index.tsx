import { FaChartArea, FaDownload } from "react-icons/fa";
import { MdRecommend, MdReportProblem } from "react-icons/md";
import { SiStatuspal } from "react-icons/si";
import { IoReloadCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { GiProcessor } from "react-icons/gi";
import FarmLoader from "@/components/loaders/farm-loader";

export default function ResultData() {
  const [data, setData] = useState<"loading" | "fetching" | "success" | "init">(
    "init"
  );

  useEffect(() => {
    if (data === "fetching" || data === "loading") {
      console.log(data);
      const timeoutId = setTimeout(() => {
        setData("success");
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [data]);
  return (
    <div
      className={classNames(
        "flex flex-col  flex-auto bg-100 rounded min-h-[600px] p-10",
        {
          "items-end gap-y-10 ": data === "success",
          "items-center justify-center gap-y-4": data !== "success",
        }
      )}
    >
      {data === "loading" && <FarmLoader id={1} />}
      {data === "fetching" && <FarmLoader id={2} />}
      {data === "init" && (
        <>  
          <h3 className="uppercase text-3xl  font-montserrat text-400 font-black tracking-wider ">
            Welcome to your farm field!
          </h3>
          <p className="font-montserrat text-400 text-xl font-semibold  text-center leading-10 w-3/4">
            Let's preprocess your farm to determine the specific features of
            your farm.
          </p>

          <button
            type="button"
            onClick={() => setData("loading")}
            className="bg-30 w-1/2 py-2 rounded-md text-400 flex items-center gap-x-2 justify-center hover:bg-transparent border border-30 hover:text-30 transition-all duration-300 text-xl font-montserrat font-medium"
          >
            <GiProcessor size={28} />
            Preprocess
          </button>
        </>
      )}

      {data === "success" && (
        <>
          <h3 className="uppercase text-3xl font-montserrat text-400 font-black tracking-wider ">
            The result data of your farm
          </h3>

          <div className="flex-auto w-full rounded-lg p-6  bg-400 flex flex-col font-montserrat text-xl gap-y-4">
            <div className="flex items-center gap-x-3">
              <span>
                <FaChartArea size={22} />
              </span>
              <strong>The area of field:</strong>
              <span>75 hectares</span>
            </div>

            <div className="flex items-center gap-x-3">
              <span>
                <SiStatuspal size={22} />
              </span>
              <strong>The current status:</strong>

              <span>
                <span className="inline-flex w-4 h-4 bg-500 rounded-full mr-2"></span>
                Normal
              </span>
            </div>

            <div className="flex items-center gap-x-3">
              <span>
                <MdReportProblem size={22} />
              </span>
              <strong>Problems:</strong>
            </div>
            <ul className="list-disc ml-10 -mt-2">
              <li>Lack of nitrogen for wheat crops</li>
              <li>Water scarcity in north part of farm</li>
            </ul>

            <div className="flex items-center gap-x-3">
              <span>
                <MdRecommend size={22} />
              </span>
              <strong>Recommendations:</strong>
            </div>
            <ul className="list-disc ml-10 -mt-2">
              <li>30 kg/hectare fertilization is needed in the field.</li>
              <li>Provide 500 L water through the north part</li>
            </ul>
            <div className="flex items-center w-full mt-auto gap-x-4">
              <button
                type="button"
                onClick={() => setData("fetching")}
                className="bg-30 w-1/2 py-2 rounded-md text-400 flex items-center gap-x-2 justify-center hover:bg-transparent border border-30 hover:text-30 transition-all duration-300"
              >
                <IoReloadCircleSharp size={28} />
                Repreprocess
              </button>
              <button
                type="button"
                className="bg-300 w-1/2 py-2 rounded-md text-400 flex items-center gap-x-2 justify-center hover:bg-transparent border border-300  hover:text-300 transition-all duration-300"
              >
                <FaDownload size={22} />
                Download Data
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
