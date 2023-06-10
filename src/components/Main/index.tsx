import CardResult from "../CardResult";
import CardSummary from "../CardSummary";

const Main = () => {
  return (
    <main className="w-full min-h-screen bg-white md:flex md:justify-center md:items-center md:gap-0">
      <CardResult />
      <CardSummary />
    </main>
  )
}

export default Main;
