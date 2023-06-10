import data from "@/data";
import Hability from "../Hability";

const CardSummary = () => {

  return (
    <section className="w-full max-w-[400px] mx-auto px-5 py-6 flex flex-col gap-6 selection:bg-gradient-card-200 selection:text-gradient-card-100 md:w-[380px] md:h-[380px] md:mx-0 md:pl-12 md:pr-6 md:gap-4 md:translate-x-[-12px] md:shadow-xl">
      <h2 className="text-base font-semibold text-grey-100">Summary</h2>

      {
        data.map(({ color, name, quantity}, i) => (
          <Hability key={i} title={name} color={color} value={quantity} />
        ))
      }

      <button className="w-full py-3 bg-grey-100 rounded-full text-base font-semibold text-white hover:transition ease-out duration-500 hover:bg-gradient-to-b hover:from-gradient-card-100 hover:to-gradient-card-200 ">
        Continue
      </button>
    </section>
  )
}

export default CardSummary;
