class Graph{
    constructor(points =[], segments=[]){ //initialize to empty arrays so that an empty graph can exist
        this.points = points;
        this.segments = segments;

    }

    addPoint(point){
        this.points.push(point);

    }

    containsPoint(point){
        return this.points.find((p) => p.equals(point)); //try to find already existing point, if cant find return nothing
    }

    containsSegment(segment){
        return this.segments.find((s) => s.equals(segment));
    }

    tryAddPoint(point){
        if(!this.containsPoint(point)){
            this.addPoint(point);
            return true;
        }
        return false;
    }

    addSegment(segment){
        this.segments.push(segment);
    }

    tryAddSegment(segment){
        if(!this.containsSegment(segment)){
            this.addSegment(segment);
            return true;
        }
        return false;
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