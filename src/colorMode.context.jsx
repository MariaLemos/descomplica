import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useMemo, useState, useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const ColorModeContext = createContext({
  mode: "dark",
  toggleColorMode: () => {},
});
export const useColorModeContext = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");
  const colorMode = useMemo(
    () => ({
      mode: mode === "light" ? "dark" : "light",
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
