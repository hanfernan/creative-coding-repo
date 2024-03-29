const canvasSketch = require('canvas-sketch');
const math = require ('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const settings = {
  dimensions: [ 1080, 1080 ]
};

// const degToRad = (degrees) => {
//   return degrees/180 * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// }

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;

    const num = 12;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);
      // x = cx + radius * Math.sin(angle);
      // y = cy + radius * Math.cos(angle);

      //start with save
      context.save();
      context.translate(x, y);
      context.translate(cx, cy);
      context.rotate(-angle);
      context.scale(random.range(1 , 3), 1);

      context.beginPath();
      context.rect(w * 0.5, h * 0.5, w, h);
      context.fill();
      context.restore();
      //end with restore
    }
   

    // context.translate(100, 400);

    // context.beginPath();
    // context.arc(0, 0, 50, 0, Math.PI * 2);
    // context.fill();


  };
};

canvasSketch(sketch, settings);
