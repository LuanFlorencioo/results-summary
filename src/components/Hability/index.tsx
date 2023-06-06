interface iHability {
  title: string
  value: number
  color: "red" | "yellow" | "green" | "blue"
}

const Hability = ({ title, value, color }: iHability) => {
  const setBackground = {
    red: "bg-red-low",
    yellow: "bg-yellow-low",
    green: "bg-green-low",
    blue: "bg-blue-low",
  }

  const setTextColor = {
    red: "text-red-strong",
    yellow: "text-yellow-strong",
    green: "text-green-strong",
    blue: "text-blue-strong",
  }

  return (
    <div className={`w-full p-5 ${setBackground[color]} rounded-lg flex justify-between items-center gap-6`}>
      <h3 className={`text-sm font-medium ${setTextColor[color]}`}>
        {title}
      </h3>

      <p className="text-sm font-bold text-grey-100">
        {value} <span className="text-grey-200">/ 100</span>
      </p>
    </div>
  )
}

export default Hability;
