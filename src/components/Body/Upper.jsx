import React from "react";
import "./Body.css";
import Display from "../Display/Display";

function Upper(props) {
  const { active } = props;
  return (
    <div className="upper">
      <Display
        showSidebar={props.showSidebar}
        active={active}
        setActive={props.setActive}
        activePage={props.activePage}
        toggleSidebar={props.toggleSidebar}
        setActivePage={props.setActivePage}
        list={props.list}
        current={props.current}
        setCurrent={props.setCurrent}
      />
    </div>
  );
}

export default Upper;
