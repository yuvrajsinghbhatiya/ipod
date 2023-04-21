import React from "react";
import "./Body.css";
import Buttons from "../Buttons/Buttons";

function Lower(props) {
  return (
    <div className="lower">
      <Buttons
        toggleSidebar={props.toggleSidebar}
        active={props.active}
        setActive={props.setActive}
        showSidebar={props.showSidebar}
        setActivePage={props.setActivePage}
        setShowSidebar={props.setShowSidebar}
        list={props.list}
        current={props.current}
        setCurrent={props.setCurrent}
      />
    </div>
  );
}

export default Lower;
