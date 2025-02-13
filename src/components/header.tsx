import { useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa";
import useMediaQuery from "@/hooks/use-media-query";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const Logo = () => {
  return (
    <div className="relative">
      <div className="font-teko text-5xl font-black text-primary">O</div>
      <div className="absolute left-1/2 right-1/2 top-0 h-full w-1 -translate-x-1/2 rotate-[30deg] transform bg-background"></div>
    </div>
  );
};

const ToggleTheme = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <FaMoon></FaMoon>
    </Button>
  );
};

const MobileHeader = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="flex justify-between">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>
          <FaBars></FaBars>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <div className="space-y-2">
            <Button variant="ghost" className="block" asChild>
              <a href="#about" onClick={() => setSheetOpen(false)}>
                About Me
              </a>
            </Button>
            <Button variant="ghost" className="block" asChild>
              <a href="#projects" onClick={() => setSheetOpen(false)}>
                Projects
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <ToggleTheme></ToggleTheme>
    </header>
  );
};

const LargerThanMobileHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo></Logo>
      <nav className="flex space-x-4">
        <Button variant="ghost" asChild>
          <a href="#about">About Me</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#projects">Projects</a>
        </Button>
        <ToggleTheme></ToggleTheme>
      </nav>
    </header>
  );
};

const Header = () => {
  const { isMobile } = useMediaQuery();

  return <>{isMobile ? <MobileHeader /> : <LargerThanMobileHeader />}</>;
};

export default Header;
