import { Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/public/container/container";
import AboutMe from "./components/public/container/features/About-me";
import MySkills from "./components/public/container/features/My-skills";
import WorkExperiences from "./components/public/container/features/work-experiences";
import "./App.css";
import PublicLayout from "./Layout/public-layout/PublicLayout";
import Login from "./components/dashboard/login/login";
import AboutMeForm from "./components/dashboard/forms/About-me-form";
import { useState } from "react";
import { PaletteMode } from "@mui/material";
import ThemeContextProvider from "./store/theme-context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ThemeContextProvider>
      <div className="App bg-white dark:dark">
        {/* <button className="btn-primary text-sm font-medium dark:bg-red-600 dark:text-white" onClick={SwitchTheme}>switch - {theme}</button> */}
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="/" element={<Container />}>
              <Route path="/" element={<AboutMe />} />
              <Route path="skills" element={<MySkills />} />
              <Route path="work-experience" element={<WorkExperiences />} />
            </Route>
          </Route>
          <Route path="/dashboard">
            {!isAuth && <Route path="" element={<Navigate to="login" />} />}
            <Route path="" element={<AboutMeForm />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
