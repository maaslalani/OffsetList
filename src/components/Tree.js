export function drawTree(context, x1, y1, angle, depth) {
  const BRANCH_LENGTH = random(depth > 7 ? 4 : 0, depth);
  const TIMEOUT = 10;

  if (depth === 0) return;

  var x2 = x1 + (cos(angle) * depth * BRANCH_LENGTH);
  var y2 = y1 + (sin(angle) * depth * BRANCH_LENGTH);

  setTimeout(() => {
    drawLine(context, x1, y1, x2, y2, depth);
    drawTree(context, x2, y2, angle - random(15, 20), depth - 1);
    drawTree(context, x2, y2, angle + random(15, 20), depth - 1);
  }, TIMEOUT);
}

function drawLine(context, x1, y1, x2, y2, thickness){
  context.lineWidth = thickness / 2;
  context.beginPath();

  context.moveTo(x1,y1);
  context.lineTo(x2, y2);

  context.closePath();
  context.stroke();
}

function cos(angle) {
  return Math.cos(toRadians(angle));
}

function sin(angle) {
  return Math.sin(toRadians(angle));
}

function toRadians(angle){
  return angle * (Math.PI / 180.0);
}

function random(min, max){
  return min + Math.floor(Math.random() * (max + 1 - min));
}
