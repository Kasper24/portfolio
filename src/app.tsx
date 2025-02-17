import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Header from "@/components/header";
import Project from "@/components/project";
import { ThemeProvider } from "@/components/theme-provider";
import Panda from "@/components/panda";
import Skill from "@/components/skill";
import {
  DartLogo,
  FlutterLogo,
  JavascriptLogo,
  LinuxLogo,
  LuaLogo,
  NextjsLogo,
  NodejsLogo,
  NixLogo,
  ReactLogo,
  TailwindcssLogo,
  TypescriptLogo,
  DockerLogo,
} from "@/components/logos";
import SocialMedia from "@/components/social-media";

const Title = () => {
  return (
    <section>
      <h1 className="text-center text-5xl font-bold">
        Hello, I'm <span className="text-primary">Ofek</span>.
      </h1>
      <Panda />
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about">
      <p>
        Hey there! I'm Ofek, a passionate programmer who embarked on this
        journey since I was a young kid. My adventure began with a love for
        gaming, leading me to develop games using the Unity and Unreal engine.
        This experience honed my skills in game development and ignited a
        broader interest in software engineering. These days my passion is
        building applications with TypeScript, React, Next and Tailwind. It
        inspires me how coding can reach so many people, the possibilities feel
        endless. I care deeply about open-source software, privacy, best
        practices, open standards, idiomatic code, and great user and developer
        experiences.
      </p>
    </section>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{t("Skills")}</h3>
      <ul className="grid grid-cols-4 gap-3 xs:grid-cols-6 sm:grid-cols-12 lg:grid-cols-6">
        <Skill color="#ffdf00" Logo={JavascriptLogo}></Skill>
        <Skill color="#007bcd" Logo={TypescriptLogo}></Skill>
        <Skill color="#06b6d4" Logo={TailwindcssLogo}></Skill>
        <Skill color="#08afce" Logo={ReactLogo}></Skill>
        <Skill color="#08afce" Logo={NextjsLogo}></Skill>
        <Skill color="#8bc500" Logo={NodejsLogo}></Skill>
        <Skill color="#03589c" Logo={DartLogo}></Skill>
        <Skill color="#54c5f8" Logo={FlutterLogo}></Skill>
        <Skill color="#00007e" Logo={LuaLogo}></Skill>
        <Skill color="#7eb5e0" Logo={NixLogo}></Skill>
        <Skill color="#fed21f" Logo={LinuxLogo}></Skill>
        <Skill color="#007bcd" Logo={DockerLogo}></Skill>
      </ul>
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{t("Get in Touch")}</h3>
      <div className="flex flex-col gap-2 xs:flex-row">
        <SocialMedia
          name="Github"
          link="https://github.com/Kasper24"
          Icon={FaGithub}
        ></SocialMedia>
        <SocialMedia
          name="LinkedIn"
          link="https://www.linkedin.com/in/ofek-its"
          Icon={FaLinkedin}
        ></SocialMedia>
        <SocialMedia
          name="Email"
          link="mailto:ofek4430@gmail.com"
          Icon={FaEnvelope}
        ></SocialMedia>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <ul className="space-y-6">
        <Project
          owner="Kasper24"
          repo="KwesomeDE"
          desc="KwesomeDE is a highly customizable and aesthetic desktop environment
          built on top of the AwesomeWM window manager. It provides a modern and
          polished user interface, enhanced workflows, and pre-configured
          widgets and layouts to streamline productivity while maintaining the
          lightweight and extensible nature of AwesomeWM."
          imgs={[
            "./images/kwesomede/1.png",
            "./images/kwesomede/2.png",
            "./images/kwesomede/3.png",
          ]}
          color="#477070"
          showStars={true}
          features={["Lua", "AwesomeWM"]}
        ></Project>
        <Project
          owner="Kasper24"
          repo="Lightify"
          desc="A sleek and intuitive Flutter app to control your RGB lighting! Inspired by the user interfaces of popular apps like Philips Hue and LIFX, this app provides a modern and responsive way to customize your lighting experience. Whether you're setting the mood or syncing lights with your activities, RGB Controller has you covered."
          imgs={[
            "./images/lightify/1.jpg",
            "./images/lightify/1.jpg",
            "./images/lightify/1.jpg",
          ]}
          color="#5c1ae5"
          showStars={false}
          features={["Flutter", "Dart"]}
        ></Project>
      </ul>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="space-y-3 text-center text-sm opacity-80">
      {t("Copyright")}
    </footer>
  );
};

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen overflow-x-hidden">
        <div className="mx-auto max-w-screen-lg space-y-12 p-6">
          <Header />
          <main className="space-y-6">
            <Title />
            <div className="gap-x-5 space-y-6 lg:flex lg:space-y-0">
              <div className="space-y-6 lg:w-6/12">
                <AboutMe />
              </div>
              <div className="space-y-3 rounded-md bg-foreground/5 p-4 lg:w-6/12">
                <Skills />
                <Contact />
              </div>
            </div>
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
