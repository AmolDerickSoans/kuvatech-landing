import { AuroraText } from "./magicui/aurora-text"
import { BorderBeam } from "./magicui/border-beam"
import Cal from "@calcom/embed-react";

export default function Pricing() {
  return (
   
    <div>
       <Cal calLink="rick/get-rick-rolled" config={{ theme: "dark" }}></Cal>
      <div className="max-w-md mx-auto bg-black glowing-border-animaton p-8 rounded-lg text-center">
        <AuroraText className="text-2xl font-bold mb-4">Contact us</AuroraText>
        <p className="text-gray-400 mb-6">
          For businesses looking to supercharge their operations with AI and automations.
        </p>
        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded backdrop-filter backdrop-blur-lg transition-all duration-200">
          Book a call
        </button>
        <BorderBeam size={300} duration={12} delay={9} />
      </div>
      </div>
  )
 
}

