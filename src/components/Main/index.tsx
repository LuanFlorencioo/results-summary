import { DataProvider } from "@/contexts";
import CardResult from "../CardResult";
import CardSummary from "../CardSummary";
import font from "@/styles/font";

const Main = () => {
  return (
    <DataProvider>
      <main className={`${font.className} w-full h-screen bg-white`}>
        <CardResult />
        <CardSummary />
      </main>
    </DataProvider>
  )
}

export default Main;
