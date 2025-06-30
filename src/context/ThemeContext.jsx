import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext("light");
const ThemeContext = createContext({
  darkMode: false,
});

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
      //       document.body.style.backgroundColor = "black";

      // document.querySelectorAll("p").forEach((p) => {
      //   p.style.color = "white";
      // });
      localStorage.setItem("theme", "dark");
    } else{
      document.documentElement.classList.remove("dark");
      //       document.body.style.backgroundColor = "white";

      // document.querySelectorAll("p").forEach((p) => {
      //   p.style.color = "black";
      // });
      localStorage.setItem("theme", "light");
    }

  }, [darkMode])
  return(
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }
  return context;
};
