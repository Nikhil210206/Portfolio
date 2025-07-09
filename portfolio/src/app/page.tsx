import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white px-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="rounded-full overflow-hidden border-4 border-white shadow-lg w-40 h-40">
            <Image
              src="/nikhil.jpg"
              alt="Nikhil Balamurugan"
              width={160}
              height={160}
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-center">Nikhil Balamurugan</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-center max-w-2xl"
          >
            AI/ML Enthusiast • Open Source Contributor • Hackathon Finalist
          </motion.p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/nikhilb21/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/Nikhil210206" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
        </motion.div>
      </section>
      {/* More sections (Skills, Experience, etc.) will be added below */}
    </div>
  );
}
