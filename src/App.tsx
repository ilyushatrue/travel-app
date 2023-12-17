import NavigationBar from "./components/layout/header/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Home, Account, Login, Registration } from "./pages/index";
import { useState } from "react";

function App() {
  const [enableScroll, setEnableScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const assignShouldScroll = (shouldScroll: boolean) => {
    setEnableScroll(shouldScroll);
  };
  const assignActiveSection = (activeSection: any) => {
    setActiveSection(activeSection);
  };
  return (
    <>
      <NavigationBar
        activeMenuItem={activeSection}
        assignActiveMenuItem={assignActiveSection}
        assignEnableScroll={assignShouldScroll}
      />
      <Routes>
        <Route
          path="*"
          element={
            <Home
              activeSection={activeSection}
              key={1}
              assignActiveSection={assignActiveSection}
              assignShouldScroll={assignShouldScroll}
              shouldScroll={enableScroll}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              activeSection={activeSection}
              key={2}
              assignActiveSection={assignActiveSection}
              assignShouldScroll={assignShouldScroll}
              shouldScroll={enableScroll}
            />
          }
        />
        <Route path="/account" element={<Account />} key={3} />
        <Route path="/login" element={<Login />} key={4} />
        <Route path="/register" element={<Registration />} key={5} />
      </Routes>
    </>
  );
}

export default App;
