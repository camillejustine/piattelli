import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

export function useMouse() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handle(e: any) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
      //   console.log(e.pageX, e.pageY);
    }
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  });

  return mousePosition;
}
