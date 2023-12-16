import { ReactP5Wrapper } from "@p5-wrapper/react";
import { useEffect, useRef } from "react";
let img = [];
export default function Canvas2() {
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
    // console.log(img);
    p5.createCanvas(600, 400);
  };
}

function draw(p5) {
  return () => {
    // console.log(spriteWidth, spriteHeight, p5.width, p5.height);
    p5.background(250);
    // Draw the preloaded image on the canvas
    img.forEach((img, i) => {
      p5.image(
        img,
        -p5.frameCount * i,
        0,
        img.width,
        p5.height,
        0,
        0,
        img.width,
        img.height,
        // p5.COVER,
      );
    });
    // p5.image(
    //   img,
    //   0,
    //   0,
    //   p5.width,
    //   p5.height,
    //   0,
    //   0,
    //   img.width / 12,
    //   img.height / 10,
    //   p5.CONTAIN,
    // );
  };
}

function preload(p5) {
  // Preload the image
  return () => {
    // img[0] = p5.loadImage("./layer-1.png");
    // img[1] = p5.loadImage("./layer-2.png");
    for (let index = 0; index < 5; index++) {
      img[index] = p5.loadImage(`./layer-${index + 1}.png`);
    }
  };
}

function sketch(p5) {
  p5.preload = preload(p5);
  p5.setup = setup(p5);
  p5.draw = draw(p5);
}
