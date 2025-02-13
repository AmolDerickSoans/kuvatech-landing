import Image from "next/image"
import { AuroraText } from "./magicui/aurora-text"

export default function Team() {
  const team = [
    { name: "Adam Baker", role: "Co-Founder" },
    { name: "Obada Irsheid", role: "Co-Founder" },
    { name: "Ali Eltawil", role: "Cyber Security Engineer" },
    { name: "Diya Sinnokrot", role: "Co-Founder" },
  ]

  return (
    <section id="team" className="py-16 px-6">
      <AuroraText className="text-5xl font-bold mb-12 text-center">Meet our team</AuroraText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="p-6 rounded-lg text-center">
         <Image
    src={`/placeholder-team/person${index+1}.jpg`} // Or .png, etc. - Add the file extension
    alt={member.name}
    width={200}
    height={200}
    className="rounded-full mx-auto mb-4"
/>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

