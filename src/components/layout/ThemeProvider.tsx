"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: "light",
});

export function useTheme() {
  return useContext(ThemeContext);
}

function resolve(t: Theme, prefersDark: boolean): "light" | "dark" {
  return t === "dark" || (t === "system" && prefersDark) ? "dark" : "light";
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  const applyTheme = useCallback((t: Theme) => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = resolve(t, prefersDark);
    document.documentElement.classList.toggle("dark", resolved === "dark");
    setResolvedTheme(resolved);
  }, []);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || "system";
    setThemeState(stored);
    applyTheme(stored);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = (localStorage.getItem("theme") as Theme) || "system";
      if (current === "system") applyTheme("system");
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [applyTheme]);

  const setTheme = useCallback(
    (t: Theme) => {
      setThemeState(t);
      localStorage.setItem("theme", t);
      applyTheme(t);
    },
    [applyTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
