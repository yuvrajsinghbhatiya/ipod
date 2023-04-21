import React, { useEffect } from "react";
import "./Buttons.css";

function Buttons(props) {
  const {
    setActive,
    active,
    toggleSidebar,
    setActivePage,
    setShowSidebar,
    list,
    current,
    setCurrent,
  } = props;

  const rotate = () => {
    const container = document.querySelector(".wheel");
    let isRotating = false;
    let initialAngle;
    let values = [0, 1, 2, 3];
    let activeIndex = 0;
    let direction = 1;

    const updateActive = (direction) => {
      activeIndex += direction;
      if (activeIndex >= values.length) {
        activeIndex = 0;
      } else if (activeIndex < 0) {
        activeIndex = values.length - 1;
      }
      setActive(values[activeIndex]);
    };

    const handleMouseMove = (e) => {
      if (isRotating) {
        const { top, left, width, height } = container.getBoundingClientRect();
        const center = {
          x: left + width / 2,
          y: top + height / 2,
        };
        const currentAngle =
          (Math.atan2(e.clientY - center.y, e.clientX - center.x) * 180) /
          Math.PI;
        const angleDiff = currentAngle - initialAngle;
        if (angleDiff > 45 && angleDiff < 135) {
          updateActive(direction);
          initialAngle = currentAngle;
        } else if (angleDiff < -45 && angleDiff > -135) {
          updateActive(-direction);
          initialAngle = currentAngle;
        }
      }
    };

    const handleMouseDown = (e) => {
      const { top, left, width, height } = container.getBoundingClientRect();
      const center = {
        x: left + width / 2,
        y: top + height / 2,
      };
      initialAngle =
        (Math.atan2(e.clientY - center.y, e.clientX - center.x) * 180) /
        Math.PI;
      isRotating = true;
    };

    const handleMouseUp = () => {
      isRotating = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    rotate();
  });

  //buttons non draggable
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const openPage = () => {
    if (active === 0) {
      setShowSidebar(false);
      setActivePage("clock");
    } else if (active === 1) {
      setShowSidebar(false);
      setActivePage("music");
    } else if (active === 2) {
      setShowSidebar(false);
      setActivePage("games");
    } else if (active === 3) {
      setShowSidebar(false);
      setActivePage("setting");
    }
  };
  const nextMusic = () => {
    if (current < list.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  const prevMusic = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(list.length - 1);
    }
  };

  const playPause = () => {
    const audio = document.querySelector("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <div className="wheel" onDragStart={handleDragStart}>
        <div className="menu-btn" onClick={props.toggleSidebar}>
          MENU
        </div>

        <div className="fwd" onClick={nextMusic}>
          <i className="fas fa-fast-forward"></i>
        </div>

        <div className="bkd" onClick={prevMusic}>
          <i className="fas fa-fast-backward"></i>
        </div>

        <div className="play-pause" onClick={playPause}>
          <i className="fa-solid fa-play"></i>
        </div>

        <div className="select-btn" onClick={openPage}></div>
      </div>
    </>
  );
}

export default Buttons;
