// src/components/DarkModeToggle.jsx
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    // Check localStorage on load
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    const html = document.documentElement;

    if (checked) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    // Set theme on first render
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  );
};

export default ThemeToggle;
