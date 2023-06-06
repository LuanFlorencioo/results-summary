import { useDataContext } from "@/contexts";
import Hability from "../Hability";

const CardSummary = () => {
  const { memory, reaction, verbal, visual } = useDataContext();

  return (
    <section className="w-full px-5 py-6 flex flex-col gap-6">
      <h2 className="text-base font-semibold text-grey-100" >Summary</h2>

      <Hability
        title="Reaction"
        color="red"
        value={reaction}
      />

      <Hability
        title="Memory"
        color="yellow"
        value={memory}
      />

      <Hability
        title="Verbal"
        color="green"
        value={verbal}
      />

      <Hability
        title="Visual"
        color="blue"
        value={visual}
      />

      <button className="w-full py-3 bg-grey-100 rounded-full text-base font-semibold text-white">
        Continue
      </button>
    </section>
  )
}

export default CardSummary;
