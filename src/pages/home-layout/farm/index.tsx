import Map from "@/layouts/farm/map";
import ResultData from "@/layouts/farm/result-data";

export default function Farm() {
  return (
    <>
      <section className="flex items-center gap-x-10 container mx-auto w-[90%] py-10">
        <Map />
        <ResultData/>
      </section>
    </>
  );
}
