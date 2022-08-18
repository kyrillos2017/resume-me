import './switch-mode-btn.scss';
import { useEffect, Fragment, useState, useContext } from "react";
import useLocalStorage from "use-local-storage";
import sun from '../../../assets/images/sun.png';
import moon from '../../../assets/images/moon.png';
import { ThemeContext } from '../../../store/theme-context';

const SwitchModeBtn = () => {

    const themeCtx = useContext(ThemeContext)

    const [mode, setMode] = useState<string>('dark');

    const defaultLight = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultLight ? "light" : "dark"
      );

      const SwitchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        themeCtx.toggleColorMode(newTheme)
      };
    
      useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        
        setMode(theme)
        
      }, [theme]);
    
  return (
    <Fragment>
      {
        <img onClick={SwitchTheme} style={{cursor: 'pointer'}} width="20" src={mode === 'dark' ? sun : moon} alt="" />
      }
    </Fragment>
  );
};

export default SwitchModeBtn;
