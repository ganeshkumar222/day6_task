class Circle{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }
    get circleradius()
    {
        return this.radius;
    }
    set circleradius(radii){
        this.radius = radii;

    }
    get circlecolor(){
        return this.color;
    }
    set circlecolor(col){
        this.color=col;
    }
    get toString(){
        return `"Circle[radius="${this.radius}`
    }
    get Area(){
        return Math.PI*this.radius*this.radius
    }
    get Circumference(){
        return 2*Math.PI*this.radius
    }

}
const cir= new Circle(1.0,"red")
console.log(cir.toString)
console.log(cir.Area);
console.log(cir.Circumference);