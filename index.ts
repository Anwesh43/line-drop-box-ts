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
