const hexaCanvas = document.getElementById('hexaGame').getContext("2d");
// function drawHexagon(canvas, centerX, centerY, radius) {
//     const sideLength = radius * Math.sqrt(3) / 2;
//     const ctx = canvas.getContext('2d');
  
//     ctx.translate(centerX, centerY);
//     ctx.rotate(Math.PI / 2);
//     ctx.translate(-centerX, -centerY);
  
//     // Draw the bottom and top triangles
//     ctx.beginPath();
//     ctx.moveTo(0, Math.sqrt(3) * radius);
//     ctx.lineTo(sideLength, 0);
//     ctx.lineTo(0, -sideLength);
//     ctx.closePath();
//     ctx.beginPath();
//     ctx.moveTo(0, -Math.sqrt(3) * radius);
//     ctx.lineTo(-sideLength, 0);
//     ctx.lineTo(0, Math.sqrt(3) * radius);
//     ctx.closePath();
  
//     // Draw the remaining corners
//     ctx.beginPath();
//     ctx.moveTo(sideLength, Math.sqrt(3) * radius);
//     ctx.lineTo(-sideLength, 0);
//     ctx.lineTo(0, -sideLength);
//     ctx.lineTo(0, Math.sqrt(3) * radius);
//     ctx.lineTo(sideLength, Math.sqrt(3) * radius);
//     ctx.closePath();
  
//     ctx.fillstyle = 'red';
//     ctx.fill();
// }
function whisperHexagon() {
    const hexaCanvas = document.getElementById('hexaGame').getContext("2d");
    hexaCanvas.clearRect(0, 0, hexaCanvas.canvas.width, hexaCanvas.canvas.height);
    hexaCanvas.beginPath();
    hexaCanvas.moveTo(100, 100);
    hexaCanvas.lineTo(150, 100);
    hexaCanvas.lineTo(200, 150);
    hexaCanvas.lineTo(150, 200);
    hexaCanvas.lineTo(100, 200);
    hexaCanvas.lineTo(50, 150);
    hexaCanvas.lineTo(100, 100);
    hexaCanvas.fillStyle = 'red';
    hexaCanvas.fill();
    hexaCanvas.closePath();

}
whisperHexagon();
function myHexagon() {
    const numberOfSides = 6;
    const radius = 0;
    for (let i = 0; i < numberOfSides; ++i) {
        const angle = (360 / numberOfSides) * i;
        
    }
}
myHexagon();
function drawHexagon(ctx, x, y, radius, hexColor) {
    for (let i = 0; i < 360; i += 20) {
        const x2 = Math.cos(i) * radius + x;
        const y2 = -Math.sin(i) * radius + y;
        ctx.fillStyle = hexColor;
        ctx.fillRect(x2, y2, 2 * radius, 2 * radius);
    }
}
function drawHexagon1(context, width, height, x, y) {
    context.beginPath();

    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const radius = Math.min(halfWidth, halfHeight);
    const angle = Math.PI / 6;

    // Draw the hexagon sides
    for (let i = 0; i < 6; i++) {
        const xNext = x + radius * Math.cos(i * angle);
        const yNext = y + radius * Math.sin(i * 1.5);
        context.lineTo(xNext, yNext);
    }

    // Draw the hexagon outline
    context.moveTo(x, y);
    context.lineTo(width - x, y);
    context.lineTo(width - x, halfHeight - y);
    context.lineTo(x, halfHeight - y);
    context.lineTo(x, y);
    context.lineTo(x, halfHeight - y);
    context.lineTo(x, width - x);
    context.fillStyle = '#ffff00';
    context.closePath();
}
function drawHexagon2(ctx, x, y, r, hexColor) {
    ctx.beginPath();
    ctx.fillStyle = hexColor;
    let a = Math.PI / 6.0;
    for (let i = 0; i < 6; i++) {
      let x1 = x + r * Math.cos(a * (i + 1));
      let y1 = r * Math.sin(a * (i + 1));
      if (i != 0) {
        ctx.arc(x + Math.sqrt(3.0 / 2.0) * r, y, Math.sqrt(3.0 / 2.0) * r, 0, Math.PI * (2.0 * i + 2.0), false);
      } else {
        ctx.arc(x1, y1, Math.sqrt(3.0 / 2.0) * r, 0, Math.PI * (2.0 * i + 2.0), true);
      }
    }
    ctx.closePath();
    ctx.fill();
  }
// drawHexagon(hexaCanvas, 100, 100, 50, '#ffff00');
// drawHexagon1(hexaCanvas, 50, 50, 50, 50);
drawHexagon2(hexaCanvas, 50, 50, 20, '#ffff00');