import { Box, Typography } from "@mui/material";
import NavigationBar from "./components/layout/header/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Home, Account, Login, Registration } from "./pages/index";
import { IMenuItem } from "./components/layout/header/IMenuItem";
import { useEffect, useRef, useState } from "react";

function App() {
  const [enableScroll, setEnableScroll] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);


  const setShouldScroll = (shouldScroll: boolean) => {
    console.log(shouldScroll)
    setEnableScroll(shouldScroll);
  };
  const activateSection = (activeSection: any) => {
    setCurrentSection(activeSection);
  };
  return (
    <>
      <NavigationBar activeMenuItem={currentSection} setActiveMenuItem={activateSection} setEnableScroll={setShouldScroll}/>
      <Routes>
        <Route
          path="*"
          element={<Home activeSection={currentSection} key={1} setActiveSection={activateSection}  setShouldScroll={setShouldScroll} shouldScroll={enableScroll}/>}
        />
        <Route
          path="/"
          element={<Home activeSection={currentSection} key={2} setActiveSection={activateSection} setShouldScroll={setShouldScroll} shouldScroll={enableScroll}/>}
        />
        <Route path="/account" element={<Account />} key={3} />
        <Route path="/login" element={<Login />} key={4} />
        <Route path="/register" element={<Registration />} key={5} />
      </Routes>
    </>
  );
}

export default App;
