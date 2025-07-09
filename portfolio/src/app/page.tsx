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
      {/* Projects Section */}
      <section className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 rounded-xl p-8 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-lg">Guard AI <span className='text-zinc-400 text-sm'>(Jan 2025 - Mar 2025)</span></h3>
              <ul className="list-disc list-inside text-zinc-300 ml-4">
                <li>Developed a real-time AI-based remote proctoring system that ensures secure, fair online assessments. It tracks website activity, detects speaking, and monitors user focus during exams, generating detailed session reports.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">QR Event Check-in <span className='text-zinc-400 text-sm'>(Apr 2025 - May 2025)</span></h3>
              <ul className="list-disc list-inside text-zinc-300 ml-4">
                <li>Developed a QR-based event check-in system with backend and frontend application designed to manage college event check-ins using QR codes.</li>
                <li>Users can register for events, receive a unique QR code, and check in on the event day. Admins can manage events, view attendees, and export attendee data.</li>
                <li>User Features: register using name, email, student ID, and password. Login with JWT-based authentication.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Fit You <span className='text-zinc-400 text-sm'>(Oct 2024 - Dec 2024)</span></h3>
              <ul className="list-disc list-inside text-zinc-300 ml-4">
                <li>Designed and Developed Fit You which redefines fitness with AI-driven personalized plans for workouts and diets. Empowering fitness journey with technology and expertise; it adapts to your goals and lifestyle.</li>
                <li>Get meal recommendations tailored to your dietary preferences, including a mix of Indian vegetarian and non-vegetarian options.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Achievements & Certificates Section */}
      <section className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 rounded-xl p-8 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Achievements & Certificates</h2>
          <ol className="list-decimal list-inside text-zinc-300 space-y-2 ml-4">
            <li>Completed NPTEL in Object Oriented Programming with 75% Silver Badge</li>
            <li>Top 25% in Build with India Hackathon By Google</li>
            <li>Top 100 in Social Winter of Code 5.0 open source contribution</li>
            <li>Finalist in IIT Madras Embedded programming challenge</li>
            <li>Finalist in IIT Madras Shastra Programming contest</li>
            <li>Finalist in IIT Madras Clash of Codes Contest</li>
            <li>The only First year team to qualify for the Finals of Quantathon 2.0 24 hours Hackathon.</li>
            <li>Participated in TechXcelerate BITS Pilani Hyd Hackathon</li>
            <li>Participated in MOZOHack 6.0 24 Hours Hackathon and got in Top 20 Teams out of 750+ Teams.</li>
          </ol>
        </motion.div>
      </section>
      {/* Footer / Contact Section */}
      <footer className="w-full max-w-3xl mx-auto mt-8 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 rounded-xl p-6 shadow-lg flex flex-col items-center gap-2"
        >
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="mailto:nikhilbalamurugan@gmail.com" className="hover:underline text-zinc-300">nikhilbalamurugan@gmail.com</a>
            <a href="https://www.linkedin.com/in/nikhilb21/" target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-300">LinkedIn</a>
            <a href="https://github.com/Nikhil210206" target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-300">GitHub</a>
          </div>
          <p className="text-zinc-500 text-xs mt-2">© {new Date().getFullYear()} Nikhil Balamurugan. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
}
