export default class Blob {
  constructor(ctx) {
    var circ = (7.5 * (Math.sqrt(2) - 1) / 3);
    var c = circ;

    var count = Math.PI;
    var ctx = ctx;

    this.func = function drawBezierCircle(cx,cy,r) {

      var c;
      var offsetX = 2 * Math.sin(count);
      var offsetY = 5 * Math.cos(count * 2);
      r = r / 2;
    
      count += 0.01;
    
      ctx.translate(cx,cy); // translate to centerpoint
    
      ctx.beginPath();
    
      // top right
      c = circ + ( 0.2 * Math.sin(count) );
      ctx.moveTo(offsetX + 0, offsetY + -r);
      ctx.bezierCurveTo(
        offsetX + c*r, offsetY + -r, 
        offsetX + r, offsetY + -c*r, 
        offsetX + r, offsetY + 0
      );
    
      // bottom right
      c = circ + ( 0.2 * Math.cos(count) );
      ctx.bezierCurveTo(
        offsetX + r, offsetY + c*r, 
        offsetX + c*r, offsetY + r, 
        offsetX + 0, offsetY + r
      );
    
      // bottom left
      c = circ + ( 0.2 * Math.sin(count * 2) );
      ctx.bezierCurveTo(
        offsetX + -c*r, offsetY + r, 
        offsetX + -r, offsetY + c*r, 
        offsetX + -r, offsetY + 0
      );
    
      // top left
      c = circ + ( 0.2 * Math.cos(count + 1) );
      ctx.bezierCurveTo(
        offsetX + -r, offsetY + -c*r, 
        offsetX + -c*r, offsetY + -r, 
        offsetX + 0, offsetY + -r
      );
      
      ctx.fillStyle = "#f1f3f5";
      ctx.fill();
    }
  }


}