// Import necessary dependencies and components
import React, { useState } from "react";
import "./App.css";
import Lower from "./components/Body/Lower";
import Upper from "./components/Body/Upper";

function App(props) {
  // Define list and state variables
  const list = [0, 1, 2, 3, 4, 5]
  const [showSidebar, setShowSidebar] = useState(true);
  const [active, setActive] = useState(0);
  const [activePage, setActivePage] = useState(0);

  // Define callback functions to update state
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSetActive = (index) => {
    if (showSidebar) {
      setActive(index);
    }
  };

  const [current, setCurrent] = useState(0);

  // Render Upper and Lower components with props
  return (
    <>
      <div className="main">
        <Upper
          showSidebar={showSidebar}
          active={active}
          activePage={activePage}
          setActivePage={setActivePage}
          toggleSidebar={toggleSidebar}
          list={list}
          current={current}
          setCurrent={setCurrent}
        />
        <Lower
          toggleSidebar={toggleSidebar}
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          setActive={handleSetActive}
          active={active}
          setActivePage={setActivePage}
          activePage={activePage}
          list={list}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </>
  );
}

export default App;
