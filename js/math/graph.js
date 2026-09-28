class Graph{
    constructor(points =[], segments=[]){ //initialize to empty arrays so that an empty graph can exist
        this.points = points;
        this.segments = segments;

    }

    addPoint(point){
        this.points.push(point);

    }
    draw(ctx){
        for(const seg of this.segments){
            seg.draw(ctx);
        }

        for(const point of this.points){
            point.draw(ctx);
        }
    }
}