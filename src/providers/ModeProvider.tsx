"use client";

import React from "react";

export type ModeType = "light" | "dark" | "system";

export interface ModeContextValue {
  effectiveTheme: "light" | "dark";
  activeTheme: ModeType | undefined;
  setActiveTheme: React.Dispatch<React.SetStateAction<ModeType>>;
  handleThemeChange: (value: ModeType) => void;
  getEffectiveTheme: (activeTheme: ModeType) => "light" | "dark";
}

export const ModeContext = React.createContext<ModeContextValue>({
  effectiveTheme: "light",
  activeTheme: "light",
  setActiveTheme: () => {},
  handleThemeChange: () => {},
  getEffectiveTheme: () => "light",
});

type ModeProviderProps = {
  children: React.ReactNode;
};

export const useMode = () => React.useContext(ModeContext);

export const ModeProvider = ({ children }: ModeProviderProps) => {
  const [activeTheme, setActiveTheme] = React.useState<ModeType>("light");

  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  };

  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleThemeChange = (newTheme: ModeType) => {
    setActiveTheme(newTheme as ModeType);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "system") {
      applySystemTheme();
    } else {
      applyTheme(newTheme);
    }
  };

  const getEffectiveTheme = (activeTheme: ModeType): "light" | "dark" => {
    if (activeTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return activeTheme;
  };

  const effectiveTheme = getEffectiveTheme(activeTheme ?? "light");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "system" || !savedTheme) {
      applySystemTheme();
      setActiveTheme("system");
    } else {
      applyTheme(savedTheme);
      setActiveTheme(savedTheme as ModeType);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === "system") {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const value = {
    effectiveTheme,
    activeTheme,
    setActiveTheme,
    handleThemeChange,
    getEffectiveTheme,
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};
