import React from "react";
import { useContext } from "react";

//Create a context to manage theme
const ThemeContext = React.createContext("light");

// Componet consuming the theme context
const ThemeComponent = () => {
  // Access the current theme value from context
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "yellow",
        color: theme === "dark" ? "white" : "black"
      }}
    >
      <h1>Theme : {theme}</h1>
    </div>
  );
};

const ThemeConsumer = () => {
  const themevalue = "light";

  return (
    <ThemeContext.Provider value={themevalue}>
      <ThemeComponent />
    </ThemeContext.Provider>
  );
};

export default ThemeConsumer;
