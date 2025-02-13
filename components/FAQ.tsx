"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "What is KUVA TECH?",
      answer: "KUVA TECH is a company that develops tailored AI solutions for innovative businesses.",
    },
    { question: "Are your solutions secure?", answer: "Yes, we prioritize security in all our AI implementations." },
    {
      question: "How do I get started with KUVA TECH?",
      answer: "You can book a call with our team to discuss your specific needs and how we can help.",
    },
    {
      question: "Do you offer continuous support?",
      answer: "Yes, we provide ongoing support and improvements for all our implemented solutions.",
    },
    {
      question: "What industries does KUVA TECH serve?",
      answer: "We serve a wide range of industries, including but not limited to finance, healthcare, and e-commerce.",
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer:
        "Implementation time varies depending on the complexity of the project, but we strive for efficient delivery.",
    },
  ]

  // Explicitly define the type of openIndex as number or null
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 px-6">
      <h2 className="text-5xl font-bold mb-12 text-center">FAQ</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between items-center w-full text-left p-4 bg-gray-900 rounded-lg focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-gray-800 rounded-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}