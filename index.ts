const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 4 
const scGap : number = 0.02 / parts 
const strokeFactor : number = 90 
const sizeFactor : number = 2.9 
const delay : number = 20 
const backColor : string = "#bdbdbd" 
const colors : Array<string> = [
    "#f44336",
    "#673AB7",
    "#880E4F",
    "#4CAF50",
    "#0D47A1"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }
    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}

class DrawingUtil {

    static drawLine(context : CanvasRenderingContext2D, x1 : number, y1 : number, x2 : number, y2 : number) {
        context.beginPath()
        context.moveTo(x1, y1)
        context.lineTo(x2, y2)
        context.stroke()
    }

    static drawLineDropBox(context : CanvasRenderingContext2D, scale : number) {
        const sc1 : number = ScaleUtil.divideScale(scale, 0, parts)
        const sc2 : number = ScaleUtil.divideScale(scale, 1, parts)
        const sc3 : number = ScaleUtil.divideScale(scale, 0, parts)
        const sc4 : number = ScaleUtil.divideScale(scale, 1, parts)
        const size : number = Math.min(w, h) / sizeFactor 
        context.save()
        context.translate(w / 2, h / 2)
        for (var j = 0; j < 2; j++) {
            const sa : number = size * (1 - 2 * j)
            DrawingUtil.drawLine(context, sa * sc2, 0, sa * sc1, 0)
        }
        context.save()
        context.translate(0, h * 0.5 * sc4)
        context.fillRect(-size / 2, 0, size, size * sc3)
        context.restore()
        context.restore()
    }

    static drawLDBNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.lineCap = 'round'
        context.lineWidth = Math.min(w, h) / strokeFactor 
        context.strokeStyle = colors[i]
        context.fillStyle = colors[i]
        DrawingUtil.drawLineDropBox(context, scale)
    }
}