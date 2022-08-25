import React from "react";
import ReactDom from "react-dom";

function Backdrop() {
  return <div>this is backdrop</div>;
}

function Overlay() {
  return <div>this is overlay</div>;
}

function Alert() {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
}

export default Alert;
