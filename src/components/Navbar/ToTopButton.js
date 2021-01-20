import React from "react";

const ToTopButton = (props) => {
  return (
    <div
      onClick={() => props.ScrollTo(props.welcomeRef)}
      className="btt fade-in"
    >
      <i className="far fa-arrow-alt-circle-up fa-2x"></i>
    </div>
  );
};

export default ToTopButton;
