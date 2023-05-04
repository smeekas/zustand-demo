import React, { useEffect, useRef } from "react";
import useTrans from "./store/transient";

function Transient() {
  const store = useTrans();
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      store.setCoords([event.screenX, event.screenY]);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return <div>Trasnient Updating</div>;
}

export default Transient;

export function Coords() {
  const ref = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  console.log("re-rendering Coords");
  useEffect(() => {
    useTrans.subscribe(
      (coords) => {
        if (ref.current && divRef.current) {
          ref.current.value = coords.coords.toString();
          divRef.current.style.backgroundColor = `rgb(${Math.random() * 255},${
            Math.random() * 255
          },${Math.random() * 255})`;
        }
      },
      (store) => store
    );
  }, []);
  return (
    <>
      <input ref={ref} />
      <div className="colorful" ref={divRef}></div>
    </>
  );
}
