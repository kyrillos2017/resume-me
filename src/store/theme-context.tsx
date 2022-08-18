import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import React from "react";
import { createContext, FC, useState } from "react";

export interface IThemeCtx {
  toggleColorMode: (theme: PaletteMode | undefined) => void;
}

export const ThemeContext = createContext<IThemeCtx>({
  toggleColorMode: (theme: PaletteMode | undefined) => {},
});

const ThemeContextProvider: FC = (props) => {
  const [mode, setMode] = useState<PaletteMode | undefined>("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `"El Messiri", "Roboto", "Helvetica", "Arial", sans-serif`,
          fontSize: 14,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
