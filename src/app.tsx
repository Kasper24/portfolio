import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";
import Header from "@/components/header";
import {
  DartLogo,
  FlutterLogo,
  JavascriptLogo,
  NextjsLogo,
  NodejsLogo,
  ReactLogo,
  TailwindcssLogo,
  TypescriptLogo,
} from "@/components/logos";
import { ThemeProvider } from "@/providers/theme-provider";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-8 md:p-12">
      <div className="bg-grid-white/[0.02] bg-grid-16 absolute inset-0" />
      <div className="relative z-10 text-center">
        <div className="mb-6 inline-block animate-bounce rounded-full bg-primary/10 px-4 py-2">
          <span className="text-sm font-medium text-primary">
            👋 Available for work
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Ofek
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
          Full-stack developer passionate about creating beautiful, functional
          web applications and desktop environments.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="group rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Projects
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="mailto:ofek4430@gmail.com"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:scale-105 hover:bg-accent"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const techs = [
    { Logo: JavascriptLogo, name: "JavaScript", color: "#ffdf00" },
    { Logo: TypescriptLogo, name: "TypeScript", color: "#007bcd" },
    { Logo: ReactLogo, name: "React", color: "#08afce" },
    { Logo: NextjsLogo, name: "Next.js", color: "#08afce" },
    { Logo: TailwindcssLogo, name: "Tailwind", color: "#06b6d4" },
    { Logo: NodejsLogo, name: "Node.js", color: "#8bc500" },
    { Logo: DartLogo, name: "Dart", color: "#03589c" },
    { Logo: FlutterLogo, name: "Flutter", color: "#54c5f8" },
  ];

  return (
    <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:bg-card/80">
      <h3 className="mb-4 text-lg font-semibold">Tech Stack</h3>
      <div className="grid grid-cols-4 gap-3">
        {techs.map(({ Logo, name, color }) => (
          <div
            key={name}
            className="group/tech flex flex-col items-center gap-2"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/80 transition-all group-hover/tech:scale-110 group-hover/tech:shadow-md"
              style={{ backgroundColor: `${color}15` }}
            >
              <Logo className="h-5 w-5 fill-foreground dark:fill-white" />
            </div>
            <span className="text-xs text-muted-foreground transition-colors group-hover/tech:text-foreground">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutCard = () => {
  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:bg-card/80">
      <h2 className="mb-4 text-2xl font-bold">About Me</h2>
      <div className="space-y-4 text-muted-foreground">
        <p className="leading-relaxed">
          I'm a passionate developer who started coding as a kid, initially
          drawn to game development with Unity and Unreal Engine. This early
          experience sparked my love for creating digital experiences.
        </p>
        <p className="leading-relaxed">
          Today, I focus on building modern web applications using TypeScript,
          React, and Next.js. I'm passionate about open-source software, clean
          code, and creating intuitive user experiences.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            🎮 Game Dev Background
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            🌐 Web Applications
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            🔓 Open Source
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  owner,
  repo,
}: {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github: string;
  demo?: string;
  owner: string;
  repo: string;
}) => {
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );
        if (response.ok) {
          const data = await response.json();
          setStarCount(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch star count:", error);
      }
    };

    fetchStarCount();
  }, [owner, repo]);

  const shouldShowStars = starCount !== null && starCount > 20;

  return (
    <div className="group overflow-hidden rounded-2xl border border-border/50 bg-card/50 transition-all hover:border-primary/20 hover:bg-card/80 hover:shadow-xl">
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <div className="flex gap-2 opacity-70 transition-opacity group-hover:opacity-100">
            <a
              href={github}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-background transition-all hover:scale-110 hover:bg-accent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
            >
              <FaGithub className="h-4 w-4" />
            </a>
            {demo && (
              <a
                href={demo}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-background transition-all hover:scale-110 hover:bg-accent"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live demo`}
              >
                <FaExternalLinkAlt className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        {shouldShowStars && (
          <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
            <FaStar className="h-3 w-3 text-yellow-500" />
            <span>{starCount} stars</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ContactSection = () => {
  const contacts = [
    {
      name: "GitHub",
      handle: "@Kasper24",
      url: "https://github.com/Kasper24",
      icon: FaGithub,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      handle: "ofek-its",
      url: "https://www.linkedin.com/in/ofek-its",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      handle: "ofek4430@gmail.com",
      url: "mailto:ofek4430@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-500",
    },
  ];

  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:bg-card/80">
      <h3 className="mb-4 text-lg font-semibold">Let's Connect</h3>
      <div className="space-y-2">
        {contacts.map(({ name, handle, url, icon: Icon, color }) => (
          <a
            key={name}
            href={url}
            className={`flex items-center gap-3 rounded-lg p-3 transition-all hover:scale-105 hover:bg-accent ${color}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-5 w-5 text-muted-foreground transition-colors" />
            <div>
              <div className="text-sm font-medium">{name}</div>
              <div className="text-xs text-muted-foreground">{handle}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl p-6">
          {/* Clean header without navbar */}
          <header
            className="flex justify-center pb-8"
            aria-label="Main navigation"
          >
            <Header />
          </header>

          <main className="space-y-8">
            {/* Hero */}
            <HeroSection />

            {/* About & Tech Stack */}
            <div className="grid gap-6 md:grid-cols-2">
              <AboutCard />
              <div className="space-y-6">
                <TechStack />
                <ContactSection />
              </div>
            </div>

            {/* Projects */}
            <section id="projects" className="scroll-mt-8">
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-2xl font-bold">{t("Featured Projects")}</h2>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {6} projects
                </span>
              </div>
              <div className="grid gap-6">
                {/* First row - 2 columns */}
                <div className="grid gap-6 md:grid-cols-2">
                  <ProjectCard
                    title="Echo"
                    description="Real-time messaging application with modern infrastructure. Features WebSocket communication, responsive UI, and cloud deployment with comprehensive testing suite."
                    image="./images/echo/1.jpeg"
                    tags={[
                      "Next.js",
                      "Socket.IO",
                      "Postgres",
                      "AWS",
                      "Docker",
                      "Terraform",
                    ]}
                    github="https://github.com/Kasper24/Echo"
                    owner="Kasper24"
                    repo="Echo"
                  />

                  <ProjectCard
                    title="Walltone"
                    description="Wallpaper manager and theme generator for Linux. Extracts colors, generates Base16 themes, and supports multiple wallpaper backends."
                    image="./images/walltone/1.png"
                    tags={["Electron", "React", "Node.js", "Linux"]}
                    github="https://github.com/Kasper24/Walltone"
                    owner="Kasper24"
                    repo="Walltone"
                  />
                </div>

                {/* Second row - 2 columns */}
                <div className="grid gap-6 md:grid-cols-2">
                  <ProjectCard
                    title="KwesomeDE"
                    description="A highly customizable desktop environment built on AwesomeWM with modern UI, enhanced workflows, and productivity-focused widgets."
                    image="./images/kwesomede/1.png"
                    tags={["Lua", "AwesomeWM", "Linux"]}
                    github="https://github.com/Kasper24/KwesomeDE"
                    owner="Kasper24"
                    repo="KwesomeDE"
                  />
                  <ProjectCard
                    title="QMK-OpenRGB"
                    description="Enhanced QMK firmware fork integrating OpenRGB support for advanced RGB lighting control on custom mechanical keyboards."
                    tags={["C", "QMK", "Firmware", "RGB", "Keyboard"]}
                    github="https://github.com/Kasper24/QMK-OpenRGB"
                    owner="Kasper24"
                    repo="QMK-OpenRGB"
                  />
                </div>

                {/* Third row - 2 columns */}
                <div className="grid gap-6 md:grid-cols-2">
                  <ProjectCard
                    title="Typistack"
                    description="Express.js wrapper providing full-stack type safety. Generates typed routes and handlers, reducing bugs and improving developer experience."
                    tags={["TypeScript", "Express.js", "API"]}
                    github="https://github.com/Kasper24/Typistack"
                    owner="Kasper24"
                    repo="Typistack"
                  />

                  <ProjectCard
                    title="Lightify"
                    description="Sleek Flutter app for RGB lighting control, inspired by Philips Hue and LIFX interfaces for modern lighting experiences."
                    tags={["Flutter", "Dart", "Mobile"]}
                    github="https://github.com/Kasper24/Lightify"
                    owner="Kasper24"
                    repo="Lightify"
                  />
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="mt-16 border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
            <p>{t("Copyright")} • Built with React & Tailwind CSS</p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
