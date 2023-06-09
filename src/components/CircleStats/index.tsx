import data from "@/data";

const CircleStats = () => {
  const sumData = data.reduce((p, c) => p + c.quantity, 0);

  const result = sumData / data.length;

  return (
    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-b from-gradient-circle-100 to-gradient-circle-200 flex flex-col items-center justify-center">
      <p className="text-5xl font-bold text-white">
        {result.toFixed(0)}
      </p>

      <p className="text-sm font-medium text-grey-200">
        of 100
      </p>
    </div>
  )
}

export default CircleStats;
