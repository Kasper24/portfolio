import { useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
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
import { useTheme } from "@/providers/theme-provider";

const Logo = () => {
  return (
    <div className="group relative cursor-pointer">
      <div className="font-teko text-5xl font-black text-primary transition-all duration-300 group-hover:scale-110 group-hover:animate-glow">
        O
      </div>
      <div className="absolute left-1/2 right-1/2 top-0 h-full w-1 -translate-x-1/2 rotate-[30deg] transform bg-background transition-all duration-300 group-hover:rotate-[45deg]"></div>
    </div>
  );
};

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      data-testid="theme-button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="transition-all duration-300 hover:scale-110 hover:bg-primary/10"
    >
      {theme === "dark" ? (
        <FaSun className="transition-transform duration-300 hover:rotate-12" />
      ) : (
        <FaMoon className="transition-transform duration-300 hover:-rotate-12" />
      )}
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
      <SelectTrigger className="w-[70px] transition-all duration-300 hover:scale-105 hover:bg-primary/10">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="glass-effect">
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="fr">FR</SelectItem>
        <SelectItem value="de">DE</SelectItem>
        <SelectItem value="it">IT</SelectItem>
        <SelectItem value="pt">PT</SelectItem>
        <SelectItem value="ru">RU</SelectItem>
        <SelectItem value="ja">JA</SelectItem>
        <SelectItem value="ko">KO</SelectItem>
        <SelectItem value="ar">AR</SelectItem>
        <SelectItem value="he">HE</SelectItem>
      </SelectContent>
    </Select>
  );
};

const MobileHeader = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header
      data-testid="mobile-header"
      className="glass-effect flex animate-fadeIn items-center justify-between rounded-lg p-4"
    >
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger data-testid="mobile-sheet-button" asChild>
          <Button
            variant="ghost"
            size="icon"
            className="transition-all duration-300 hover:scale-110"
          >
            <FaBars className="transition-transform duration-300 hover:rotate-180" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="glass-effect w-[280px]">
          <div className="mt-8 space-y-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-lg transition-all duration-300 hover:translate-x-2"
              asChild
            >
              <a href="#about" onClick={() => setSheetOpen(false)}>
                📖 {t("About Me")}
              </a>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-lg transition-all duration-300 hover:translate-x-2"
              asChild
            >
              <a href="#projects" onClick={() => setSheetOpen(false)}>
                🚀 {t("Projects")}
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex gap-3">
        <SetLanguage />
        <ToggleTheme />
      </div>
    </header>
  );
};

const DesktopHeader = () => {
  const { t } = useTranslation();

  return (
    <header
      data-testid="desktop-header"
      className="glass-effect flex animate-fadeIn items-center justify-between space-x-3 rounded-xl p-3"
    >
      <Logo />
      <nav className="flex items-center space-x-6">
        <Button
          variant="ghost"
          className="text-lg transition-all duration-300 hover:scale-105 hover:text-primary"
          asChild
        >
          <a href="#about">{t("About Me")}</a>
        </Button>
        <Button
          variant="ghost"
          className="text-lg transition-all duration-300 hover:scale-105 hover:text-primary"
          asChild
        >
          <a href="#projects">{t("Projects")}</a>
        </Button>
        <div className="flex items-center gap-3">
          <ToggleTheme />
          <SetLanguage />
        </div>
      </nav>
    </header>
  );
};

const Header = () => {
  const { isMobile } = useMediaQuery();

  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
