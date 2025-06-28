export default function Portfolio() {
  const projects = [
    { title: "Resume Analyzer", image: "resume-analyzer.png", demo: "#" },
    { title: "Student Pass/Fail Predictor", image: "student-predictor.png", demo: "#" },
    { title: "Typing Speed Calculator", image: "typing-speed.png", demo: "#" },
    { title: "Number Guessing Game", image: "number-guessing.png", demo: "#" }
  ];

  return (
    <div className="bg-black text-white font-sans">
      <nav className="fixed w-full top-0 bg-black bg-opacity-80 z-50 flex justify-center gap-6 p-4 font-medium text-sm">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 to-black text-center">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm D. Ramalakshmi</h1>
        <p className="text-lg text-gray-300">Data Science Student</p>
      </section>

      <section id="about" className="py-16 px-6 text-center">
        <img src="assets/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto border-4 border-white mb-4" />
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-2 text-gray-300">I am a Data Science student passionate about intelligent applications using machine learning and data analytics.</p>
      </section>

      <section id="education" className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-4">
          <div><strong>Aditya Degree College for Women</strong><br />B.Sc., Adikavi Nannayya University (2022–2025)<br />CGPA: 8.8</div>
          <div><strong>Sri Sai Aditya Junior College</strong><br />Intermediate (BIE) (2019–2020)<br />Marks: 866</div>
          <div><strong>3rd Battalion APSP English Medium High School</strong><br />SSC (2018–2019)<br />GPA: 9.8</div>
        </div>
      </section>

      <section id="skills" className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <ul className="space-y-2">
          <li>Python</li>
          <li>Machine Learning</li>
          <li>Data Analysis</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>

      <section id="projects" className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={`assets/${proj.image}`} alt={proj.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <a href={proj.demo} className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Try Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 px-6 text-center bg-gradient-to-t from-black via-gray-900 to-black">
        <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-400">Feel free to reach out for collaboration or queries.</p>
        <div className="mt-4 space-y-1 text-sm">
          <p>📧 Email: diviliramalakshmi@gmail.com</p>
          <p>📱 Phone: 7075018373</p>
          <p>📍 Location: Kakinada, Andhra Pradesh</p>
        </div>
      </section>
    </div>
  );
}