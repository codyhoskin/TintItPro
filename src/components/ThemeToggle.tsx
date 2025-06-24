"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      aria-label="Light and Dark Theme Toggle"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
  style={{
    display: "inline-flex",
    transition: "transform 0.25s ease, color 0.25s ease",
    color: "white", // Default icon color
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.2)";
    e.currentTarget.style.color = "var(--secondary)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.color = "white";
  }}
>
  {/* Icon will inherit the color from the span */}
  {currentTheme === "dark" ? (
    <Sun size={30} style={{ color: "inherit" }} />
  ) : (
    <Moon size={30} style={{ color: "inherit" }} />
  )}
</span>

    </button>
  );
};

export default ThemeToggle;
