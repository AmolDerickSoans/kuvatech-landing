import { AuroraText } from "./magicui/aurora-text"

export default function Process() {
  return (
    <section id="process" className="py-16 px-6">
      <AuroraText className="text-5xl text-white font-bold mb-12">The process</AuroraText>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProcessStep
          number="01"
          title="Analyze"
          description="We start with a thorough analysis of your current workflows to see how AI could improve your processes."
        />
        <ProcessStep
          number="02"
          title="Build & Implement"
          description="Then, our developers will start crafting custom AI solutions for your company, continuously iterating, testing, and scaling."
        />
        <ProcessStep
          number="03"
          title="Maintain & Improve"
          description="After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions."
        />
      </div>
    </section>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="bg-zinc-900  p-6 rounded-lg">
      <div className="text-zinc-500 text-4xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

