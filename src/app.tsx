import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Header from "@/components/header";
import Project from "@/components/project";
import { ThemeProvider } from "@/components/theme-provider";
import Lightify from "../public/lightify.jpg";

const Content = () => {
  return (
    <main className="space-y-16">
      <AboutMe></AboutMe>
      <Projects></Projects>
    </main>
  );
};

const AboutMe = () => {
  return (
    <div id="about" className="space-y-12">
      <div>
        <h1 className="text-center text-5xl font-bold">
          Hello, I'm <span className="text-primary">Ofek</span>.
        </h1>

        <pre className="animate-wave text-center text-lg">
          {`⠀⠀⠀
⠀⠀⠀⠀⢰⣿⡿⠗⠀⠠⠄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⡜⢁⣀⡀⠀⠀⠀⠈⠑⢶⣶⡄
⢀⣶⣦⣸⠈⢿⣟⡇⠀⠀⣀⣀⠀⠘⡿⠃
⠀⢿⣿⣿⣄⠒⠀⠠⢶⡂⢫⣿⢇⢀⠃⠀
⠀⠈⢿⡿⣿⣿⣶⣤⣀⣄⣀⣂⡠⠊⠀⠀
⠀⠀⠀⡇⠀⠀⠉⠙⠛⠿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀
⠀⠀⠀⣿⣧⡤⠄⣀⣀⣀⣴⡟⠿⠃⠀⠀
⠀⠀⠀⢻⣿⣿⠉⠉⢹⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠁⠀⠀⠀⠉⠁⠀⠀⠀⠀`}
        </pre>
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="space-y-4">
          <p>
            Hey there! I'm Ofek, a passionate programmer who embarked on this
            journey since I was a young kid.
          </p>
          <p>
            My adventure began with a love for gaming, leading me to develop
            games using the Unity and Unreal engine. This experience honed my
            skills in game development and ignited a broader interest in
            software engineering.
          </p>
          <p>
            These days my passion is building applications with TypeScript,
            React, Next and Tailwind. It inspires me how coding can reach so
            many people, the possibilities feel endless
          </p>
          <p>
            I care deeply about open-source software, privacy, best practices,
            open standards, idiomatic code, and great user and developer
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="space-y-2" id="projects">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <p>
        My journey as a Software Engineer has been filled with challenges. Here
        are some of the key projects that have shaped my skills and
        understanding of technology:
      </p>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Project
          owner="Kasper24"
          repo="KwesomeDE"
          img="https://raw.githubusercontent.com/Kasper24/KwesomeDE/refs/heads/main/.github/assets/9.png"
          showStars={true}
          desc="KwesomeDE is a highly customizable and aesthetic desktop environment
          built on top of the AwesomeWM window manager. It provides a modern and
          polished user interface, enhanced workflows, and pre-configured
          widgets and layouts to streamline productivity while maintaining the
          lightweight and extensible nature of AwesomeWM."
          features={["Lua", "AwesomeWM"]}
        ></Project>
        <Project
          owner="Kasper24"
          repo="Lightify"
          img={Lightify}
          showStars={false}
          desc="A sleek and intuitive Flutter app to control your RGB lighting! Inspired by the user interfaces of popular apps like Philips Hue and LIFX, this app provides a modern and responsive way to customize your lighting experience. Whether you're setting the mood or syncing lights with your activities, RGB Controller has you covered."
          features={["Flutter", "Dart"]}
        ></Project>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="space-y-4">
      <h2 className="text-xl font-bold">Let's Contect</h2>
      <p>
        If you want to get in touch with me about something or just to say hi,
        reach out on social media or send me an email.
      </p>
      <div className="flex space-x-4">
        <a href="https://github.com/Kasper24">
          <FaGithub className="text-2xl transition-all hover:text-primary"></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/ofek-itscovits-413a03286/">
          <FaLinkedin className="text-2xl transition-all hover:text-primary"></FaLinkedin>
        </a>
        <a href="mailto:ofek4430@gmail.com">
          <FaEnvelope className="text-2xl transition-all hover:text-primary"></FaEnvelope>
        </a>
      </div>
      <div className="text-center text-sm opacity-80">
        © {new Date().getFullYear()} made by Ofek. All rights reserved.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen overflow-x-hidden">
        <div className="mx-auto max-w-screen-md space-y-16 p-6">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
