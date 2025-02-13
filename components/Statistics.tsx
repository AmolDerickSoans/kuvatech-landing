import { AuroraText } from "./magicui/aurora-text"
import { ShineBorder } from "./magicui/shine-border"

export default function Statistics() {
  const stats = [
    { label: "Projects completed", value: "10+" },
    { label: "Satisfied customers", value: "100%" },
    { label: "Hours saved per day", value: "3h" },
    { label: "Cost saved per month", value: "10k" },
  ]

  return (
    <section id="statistics" className="py-16 px-6">
      <AuroraText className="text-5xl font-bold mb-12 text-center">Our statistics</AuroraText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <ShineBorder key={index} className="bg-slate-900 p-6 rounded-lg text-center"  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <div className="text-4xl font-bold text-zinc-500 mb-2">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </ShineBorder>
        ))}
      </div>
    </section>
  )
}

