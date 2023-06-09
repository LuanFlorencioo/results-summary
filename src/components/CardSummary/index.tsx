import data from "@/data";
import Hability from "../Hability";

const CardSummary = () => {

  return (
    <section className="w-full px-5 py-6 flex flex-col gap-6">
      <h2 className="text-base font-semibold text-grey-100" >Summary</h2>

      {
        data.map(({ color, name, quantity}, i) => (
          <Hability key={i} title={name} color={color} value={quantity} />
        ))
      }

      <button className="w-full py-3 bg-grey-100 rounded-full text-base font-semibold text-white">
        Continue
      </button>
    </section>
  )
}

export default CardSummary;
