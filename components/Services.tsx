import { MessageSquare, FileText, Workflow, Database, TrendingUp } from "lucide-react"
import { MagicCard } from "./magicui/magic-card"
import { useTheme } from "next-themes";
import { AuroraText } from "./magicui/aurora-text";

export default function Services() {
  return (
    <section id="services" className="py-16 px-6">
      <AuroraText className="text-5xl font-bold mb-12 text-white">Our services</AuroraText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<MessageSquare />}
          title="Text & Voice AI Agents"
          description="We develop intelligent text and voice AI agents that leverage advanced NLP to elevate interactions and streamline your business processes."
        />
        <ServiceCard
          icon={<FileText />}
          title="AI Document Engine"
          description="Automate the generation and review of documents, from contracts to business proposals."
        />
        <ServiceCard
          icon={<Workflow />}
          title="Workflow Automations"
          description="We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors."
        />
        <ServiceCard
          icon={<Database />}
          title="Knowledge Retrieval (RAG)"
          description="Retrieve and leverage existing knowledge for information retrieval, content AI, your organization's internal data."
        />
        <ServiceCard
          icon={<TrendingUp />}
          title="AI Sales Agent"
          description="A virtual sales representative that automates sales processes, from lead qualification to personalized outreach, with data enrichment."
        />
      </div>
    </section>
  )
}
interface ServiceCardProps{
  icon:any;
  title:string;
  description:string;

}
function ServiceCard({ icon, title, description } : ServiceCardProps) {
  const { theme } = useTheme();
  return (
    <MagicCard className="p-6 bg-zinc-900 rounded-md"  gradientColor={theme === "dark" ? "#0A0A0A" : "#09090B"}	>
      <div className="text-zinc-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </MagicCard>
  )
}

