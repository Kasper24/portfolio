import { useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/use-media-query";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const Logo = () => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z"
        className="fill-primary"
      />
    </svg>
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
    <div className="flex justify-between">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>
          <FaBars></FaBars>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <div className="space-y-2">
            <Button variant="ghost" className="block">
              <AnchorLink href="#about" onClick={() => setSheetOpen(false)}>
                About Me
              </AnchorLink>
            </Button>
            <Button variant="ghost" className="block">
              <AnchorLink href="#projects" onClick={() => setSheetOpen(false)}>
                Projects
              </AnchorLink>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <ToggleTheme></ToggleTheme>
    </div>
  );
};

const LargerThanMobileHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo></Logo>
      <nav className="flex space-x-4">
        <Button variant="ghost">
          <AnchorLink href="#about">About Me</AnchorLink>
        </Button>
        <Button variant="ghost">
          <AnchorLink href="#projects">Projects</AnchorLink>
        </Button>
        <ToggleTheme></ToggleTheme>
      </nav>
    </div>
  );
};

const Header = () => {
  const { isMobile } = useMediaQuery();

  return (
    <header>{isMobile ? <MobileHeader /> : <LargerThanMobileHeader />}</header>
  );
};

export default Header;
