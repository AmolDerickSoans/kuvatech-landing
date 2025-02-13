"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Process from "../components/Process"
import Statistics from "../components/Statistics"
import Team from "../components/Team"
import Pricing from "../components/Pricing"
import FAQ from "../components/FAQ"
import Orbiting from '../components/Orbit'
import { AuroraBackground } from "@/components/ui/aurora-background"
import { motion } from "framer-motion"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <AuroraBackground >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=""
      ></motion.div>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Orbiting />

      <motion.section
        id="services"
        initial={{ opacity: 0, x: "-100%" }} // Slide from left
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }} // Animate only once
      >
        <Services />
      </motion.section>

      <motion.section
        id="process"
        initial={{ opacity: 0, x: "100%" }} // Slide from right
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // Slight delay for staggered effect
        viewport={{ once: true }}
      >
        <Process />
      </motion.section>

      <motion.section
        id="statistics"
        initial={{ opacity: 0, x: "-100%" }} // Slide from left
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Statistics />
      </motion.section>

      <motion.section
        id="team"
        initial={{ opacity: 0, x: "100%" }} // Slide from right
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Team />
      </motion.section>

      <motion.section
        id="pricing"
        initial={{ opacity: 0, x: "-100%" }} // Slide from left
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Pricing />
      </motion.section>

      <motion.section
        id="faq"
        initial={{ opacity: 0, x: "100%" }} // Slide from right
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 1.0 }}
        viewport={{ once: true }}
      >
        <FAQ />
      </motion.section>

      </AuroraBackground>
    </main>
  )
}