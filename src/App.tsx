import { Box, Typography } from "@mui/material";
import NavigationBar from "./components/layout/header/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Home, Account, Login, Registration } from "./pages/index";
import { IMenuItem } from "./components/layout/header/IMenuItem";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const activateSection = (activeSection: any) => {
    setActiveSection(activeSection);
  };

  return (
    <>
      <NavigationBar setActiveTitle={activateSection} />
      <Routes>
        <Route
          path="*"
          element={<Home activeSection={activeSection} key={1} />}
        />
        <Route
          path="/"
          element={<Home activeSection={activeSection} key={2} />}
        />
        <Route path="/account" element={<Account />} key={3} />
        <Route path="/login" element={<Login />} key={4} />
        <Route path="/register" element={<Registration />} key={5} />
      </Routes>
    </>
  );
}

export default App;
