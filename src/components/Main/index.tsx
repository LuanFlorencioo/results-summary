import CardResult from "../CardResult";
import CardSummary from "../CardSummary";
import font from "@/styles/font";

const Main = () => {
  return (
    <main className={`${font.className} w-full h-screen bg-white`}>
      <CardResult />
      <CardSummary />
    </main>
  )
}

export default Main;
