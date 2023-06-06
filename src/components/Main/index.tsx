import { DataProvider } from "@/contexts";
import CardResult from "../CardResult";
import font from "@/styles/font";

const Main = () => {
  return (
    <DataProvider>
      <main className={`${font.className} w-full h-screen bg-white`}>
        <CardResult />
      </main>
    </DataProvider>
  )
}

export default Main;
