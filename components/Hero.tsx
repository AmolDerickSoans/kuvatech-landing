import { AuroraText } from "./magicui/aurora-text";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "framer-motion"
import { AuroraBackground } from "./ui/aurora-background";
import { CTASlider } from "./ui/cta-slider";
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(0, 150, 136, ${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center ">
      {/* Blob Container - Place this *inside* the bg-gradient-to-br div */}
      {/* <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="blob-container">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div> */}
{/* 
<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      KUVA <AuroraText>TECH</AuroraText>
    </h1>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground> */}



      {/* Remove the old background gradient overlay - we are replacing it */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-zinc-500 to-black opacity-50 z-0"></div> */}
  
      <h1 className="text-4xl text-white font-bold tracking-tighter md:text-5xl lg:text-7xl">
      KUVA <AuroraText>TECH</AuroraText>
    </h1>
        <TextAnimate animation="blurInUp" by="character" className="text-white text-md mb-8 text-md z-10">We develop tailored AI solutions for innovative companies</TextAnimate>
        <CTASlider />



      {/* Style block - Add this within your component's JSX */}
      <style jsx>{`
        .bg-gradient-to-br {
          position: relative;
          overflow: hidden;
        }

        .blob-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .blob {
          position: absolute;
          width: 450px; /* Adjust size as needed */
          height: 450px; /* Adjust size as needed */
          border-radius: 50%;
          background:rgba(0, 150, 136, 0.7);
          opacity: 0.6;
          filter: blur(60px);
          animation: brownianBlobMotion 20s infinite ease-in-out; /* Renamed animation and longer duration */
        }

        .blob:nth-child(1) {
          background: rgba(0, 150, 136, 0.7);/* Light blue */
          top: 15%; /* Adjusted initial positions - closer together */
          left: 25%;
          animation-delay: 0s;
          animation-duration: 18s; /* Slightly different duration */
        }

        .blob:nth-child(2) {
          background: rgba(0, 150, 136, 0.7) /* Light pink */
          top: 50%; /* Adjusted initial positions - closer together */
          left: 45%;
          animation-delay: -7s; /* More offset delay */
          animation-duration: 22s; /* Slightly different duration */
        }

        .blob:nth-child(3) {
          background: rgba(0, 150, 136, 0.7) /* Light green */
          top: 35%; /* Adjusted initial positions - closer together */
          left: 70%;
          animation-delay: -13s; /* Even more offset delay */
          animation-duration: 25s; /* Slightly different duration */
        }

        .blob:nth-child(4) {
          background: rgb(0, 150, 136, 0.7); /* Light green */
          top: 65%; /* Adjusted initial positions - closer together */
          left: 70%;
          animation-delay: -13s; /* Even more offset delay */
          animation-duration: 25s; /* Slightly different duration */
        }

        .blob:nth-child(5) {
          background: rgb(0, 150, 136, 0.7); /* Light green */
          top:55%; /* Adjusted initial positions - closer together */
          left: 35%;
          animation-delay: -5s; /* Even more offset delay */
          animation-duration: 25s; /* Slightly different duration */
        }

        .blob:nth-child(6) {
          background: rgb(0, 150, 136, 0.7); /* Light green */
          top: 75%; /* Adjusted initial positions - closer together */
          right: 70%;
          animation-delay: -13s; /* Even more offset delay */
          animation-duration: 25s; /* Slightly different duration */
        }

        @keyframes brownianBlobMotion { /* Renamed keyframes */
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1); /* Reset rotation too */
            opacity: 0.5; /* Slightly lower base opacity */
          }
          10% {
            transform: translate(20px, -30px) rotate(-15deg) scale(1.1); /* Rotate slightly */
            opacity: 0.7;
          }
          25% {
            transform: translate(-40px, 10px) rotate(25deg) scale(0.95); /* More rotation, different direction */
            opacity: 0.6;
          }
          40% {
            transform: translate(30px, 50px) rotate(-40deg) scale(1.05); /* Even more rotation, different direction */
            opacity: 0.8;
          }
          55% {
            transform: translate(-50px, -20px) rotate(10deg) scale(0.9); /* Back rotation direction */
            opacity: 0.55;
          }
          70% {
            transform: translate(15px, -40px) rotate(30deg) scale(1.15); /* More rotation, different direction */
            opacity: 0.75;
          }
          85% {
            transform: translate(-25px, 35px) rotate(-20deg) scale(0.98); /* Back rotation direction */
            opacity: 0.65;
          }
        }
      `}</style>
    </div>
  );
}