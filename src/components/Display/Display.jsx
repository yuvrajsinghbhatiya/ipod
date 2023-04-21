import React from "react";
import "./Display.css";
import Sidebar from "./Sidebar";
import LinkScreen from "./LinkScreen";
import ActivePage1 from "./Pages/ActivePage1";
import ActivePage2 from "./Pages/ActivePage2";
import ActivePage3 from "./Pages/ActivePage3";
import ActivePage4 from "./Pages/ActivePage4";

function Display(props) {
  const { showSidebar } = props;

  // If the active page is 0 or 1 or 2 or 3 and the sidebar is visible,
  // display the LinkScreen component with the corresponding active prop.
  // Otherwise, do not display LinkScreen.
  return (
    <div className="screen">
      <div className="content">
        {props.active === 1 && showSidebar == true && (
          <LinkScreen active={props.active} toggleSidebar={props.toggleSidebar} />
        )}
        {props.active === 0 && showSidebar == true && (
          <LinkScreen active={props.active} toggleSidebar={props.toggleSidebar} />
        )}
        {props.active === 2 && showSidebar == true && (
          <LinkScreen active={props.active} toggleSidebar={props.toggleSidebar} />
        )}
        {props.active === 3 && showSidebar == true && (
          <LinkScreen active={props.active} toggleSidebar={props.toggleSidebar} />
        )}

        {showSidebar && <Sidebar active={props.active} />}
        {props.activePage === "clock" && <ActivePage1 />}
        {props.activePage === "music" && (
          <ActivePage2
            current={props.current}
            setCurrent={props.setCurrent}
            list={props.list}
          />
        )}
        {props.activePage === "games" && <ActivePage3 />}
        {props.activePage === "setting" && <ActivePage4 />}
      </div>
    </div>
  );
}

export default Display;
