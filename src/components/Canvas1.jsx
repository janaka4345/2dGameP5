import { ReactP5Wrapper } from "@p5-wrapper/react";
import { useEffect, useRef } from "react";
export default function Canvas1() {
  // useEffect(() => {
  // }, []);
  return (
    <>
      <ReactP5Wrapper sketch={sketch} />;
    </>
  );
}
function setup(p5) {
  return () => {
    p5.createCanvas(600, 400, p5.WEBGL);
  };
}

function draw(p5) {
  return () => {
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
}

function sketch(p5) {
  p5.setup = setup(p5);
  p5.draw = draw(p5);
}
