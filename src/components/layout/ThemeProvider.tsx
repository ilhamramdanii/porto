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

  useEffect(() => {
    // Initial sync
    const stored = (localStorage.getItem("theme") as Theme) || "system";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(stored);
    
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = resolve(stored, prefersDark);
    setResolvedTheme(resolved);

    // Watch for system theme changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = (localStorage.getItem("theme") as Theme) || "system";
      if (current === "system") {
        const res = resolve("system", mq.matches);
        document.documentElement.classList.toggle("dark", res === "dark");
        setResolvedTheme(res);
      }
    };
    
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const setTheme = useCallback(
    (t: Theme) => {
      setThemeState(t);
      localStorage.setItem("theme", t);
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const resolved = resolve(t, prefersDark);
      document.documentElement.classList.toggle("dark", resolved === "dark");
      setResolvedTheme(resolved);
    },
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
