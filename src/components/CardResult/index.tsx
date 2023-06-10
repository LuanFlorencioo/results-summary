import CircleStats from "../CircleStats";

const CardResult = () => {
  return (
    <header className="w-full max-w-[400px] mx-auto px-10 py-6 flex flex-col items-center gap-5 bg-gradient-to-b from-gradient-card-100 to-gradient-card-200 rounded-b-3xl selection:bg-grey-100 md:w-[275px] md:h-[380px] md:mx-0 md:rounded-3xl md:justify-center md:translate-x-3 z-10">
      <p className="text-base font-medium text-grey-200">
        Your Result
      </p>

      <CircleStats />

      <p className="text-xl font-bold text-white">
        Great
      </p>

      <p className="max-w-[250px] text-sm font-medium text-grey-200 text-center">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </header>
  )
}

export default CardResult;
