import React from "react";
import ReactDOM from "react-dom";

export function Rotate(props) {
  return (
    <div
      style={{
        position: "absolute",
        transformOrigin: "right bottom",
        transform: "rotate(" + props.angle + "rad)"
      }}
    >
      {props.children}
    </div>
  );
}

export function Kaleidoscope(props) {
  function cali() {
    let c = [];

    let setClipPath = angle => {
      let len = Math.tan((Math.PI / 2 - angle) / 2) * 100;

      // apply chosselmetrie
      return "polygon(0% 0%, 100% " + len + "%, " + len + "% 100%)";
    };

    let clipPath = setClipPath((Math.PI * 2) / props.slices);

    for (let i = 0; i < props.slices; i += 1) {
      let sliceAngle = ((Math.PI * 2) / props.slices) * i + "rad";
      let angle = ((Math.PI * 2) / props.slices) * i;
      let transformStyle = "rotate(" + sliceAngle + ")";

      c.push(
        <Rotate angle={angle}>
          <div
            id="clip"
            style={{
              position: "absolute",
              width: "1vw" > "1vh" ? props.r + "vw" : props.r + "vh",
              height: "1vw" > "1vh" ? props.r + "vw" : props.r + "vh",
              zIndex: i,
              overflow: "hidden",
              clipPath: clipPath
            }}
          >
            <div
              id="image"
              style={{
                display: "block",
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage: "url(" + props.img + ")",
                backgroundSize: 400 / props.slices + "vw",
                backgroundPosition: props.x + "px " + props.y + "px"
              }}
            />
          </div>
        </Rotate>
      );
    }

    return c;
  }

  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        align: "center",
        mixBlendMode: "difference",
        position: "absolute"
      }}
    >
      {cali()}
    </div>
  );
}
