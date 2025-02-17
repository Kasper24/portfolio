import { useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@/hooks/use-media-query";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    <Button
      data-testid="theme-button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      <FaMoon></FaMoon>
    </Button>
  );
};

const SetLanguage = () => {
  return (
    <Select
      defaultValue={i18n.language}
      onValueChange={(value: string) => {
        i18n.changeLanguage(value);
        localStorage.setItem("lng", value);
      }}
    >
      <SelectTrigger className="w-[60px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">en</SelectItem>
        <SelectItem value="fr">fr</SelectItem>
        <SelectItem value="de">de</SelectItem>
        <SelectItem value="it">it</SelectItem>
        <SelectItem value="pt">pt</SelectItem>
        <SelectItem value="ru">ru</SelectItem>
        <SelectItem value="ja">ja</SelectItem>
        <SelectItem value="ko">ko</SelectItem>
        <SelectItem value="ar">ar</SelectItem>
        <SelectItem value="he">he</SelectItem>
      </SelectContent>
    </Select>
  );
};

const MobileHeader = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header data-testid="mobile-header" className="flex justify-between">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger data-testid="mobile-sheet-button">
          <FaBars></FaBars>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <div className="space-y-2">
            <Button variant="ghost" className="block" asChild>
              <a href="#about" onClick={() => setSheetOpen(false)}>
                {t("About Me")}
              </a>
            </Button>
            <Button variant="ghost" className="block" asChild>
              <a href="#projects" onClick={() => setSheetOpen(false)}>
                {t("Projects")}
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <SetLanguage />
      <ToggleTheme></ToggleTheme>
    </header>
  );
};

const DesktopHeader = () => {
  const { t } = useTranslation();

  return (
    <header
      data-testid="desktop-header"
      className="flex items-center justify-between"
    >
      <Logo></Logo>
      <nav className="flex space-x-4">
        <Button variant="ghost" asChild>
          <a href="#about">{t("About Me")}</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#projects">{t("Projects")}</a>
        </Button>
        <ToggleTheme></ToggleTheme>
        <SetLanguage />
      </nav>
    </header>
  );
};

const Header = () => {
  const { isMobile } = useMediaQuery();

  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
