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
      <section className="w-full max-w-3xl mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 rounded-xl p-8 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-1">Languages:</h3>
              <p className="text-zinc-300">Python, C, C++, Java, Typescript, JavaScript, SQL</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Tools/Frameworks:</h3>
              <p className="text-zinc-300">TensorFlow, PyTorch, OpenCV, Mediapipe, PyAudio, API, React.js, Node.js, Flask, HTML, CSS, Numpy, Generative AI, Git, Github, Ui/UX, Visual Studio, Data Analysis, JSON, Linux, Tailwind</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Technologies:</h3>
              <p className="text-zinc-300">Data Structures, Algorithms</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Soft Skills:</h3>
              <p className="text-zinc-300">Adaptability, Collaboration, Effective Communication, Time Management</p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Experience Section */}
      <section className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 rounded-xl p-8 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-lg">Google Developers Group on campus SRM</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Technical Team Member</span>
                <span>May 2025 - Present</span>
              </div>
              <p className="text-zinc-300">Developed a QR code scanner for event check-in for managing events.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Computer Society of India, SRM</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Team Member</span>
                <span>Feb 2025 - Present</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Social Winter of Code 5.0</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Open Source Contributor</span>
                <span>Jan 2025 - March 2025</span>
              </div>
              <p className="text-zinc-300">Contributed to real world open source projects and made it to the top 100 contributors.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Aaruush, SRM</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Student Volunteer</span>
                <span>Aug 2024 - Feb 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Education Section */}
      <section className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 rounded-xl p-8 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-lg">SRM Institute of Science & Technology, Kattankulathur</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Bachelors of Technology in Computer Science and Engineering</span>
                <span>Aug 2024 - Present</span>
              </div>
              <p className="text-zinc-300">CGPA: 9.09</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
