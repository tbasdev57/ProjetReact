
import React, { Component } from 'react'
import Canvas from "./Canvas";

class Pendu extends Component {

    draw = (ctx, frameCount) => {
        switch(this.props.step){
            case 0:
                ctx.moveTo(0,400);
                ctx.lineTo(200,400);
                ctx.stroke();
                break;
            case 1:
                ctx.moveTo(100,0);
                ctx.lineTo(100,400);
                ctx.stroke();
                break;
            case 2:
                ctx.moveTo(100,0);
                ctx.lineTo(200,0);
                ctx.stroke();
                break;
            case 3:
                ctx.moveTo(150,0);
                ctx.lineTo(100,50);
                ctx.stroke();
                break;
            case 4:
                ctx.moveTo(200,0);
                ctx.lineTo(200,60);
                ctx.stroke();
                break;
            case 5:
                ctx.beginPath();
                ctx.arc(200,90,30,0,2*Math.PI);
                ctx.stroke();
                break;
            case 6:
                ctx.moveTo(200,120);
                ctx.lineTo(200,250);
                ctx.stroke();
                break;
            case 7:
                ctx.moveTo(200,150);
                ctx.lineTo(250,200);
                ctx.stroke();
                break;
            case 8:
                ctx.moveTo(200,150);
                ctx.lineTo(150,200);
                ctx.stroke();
                break;
            case 9:
                ctx.moveTo(200,250);
                ctx.lineTo(250,300);
                ctx.stroke();
                break;
            case 10:
                ctx.moveTo(200,250);
                ctx.lineTo(150,300);
                ctx.stroke();
                break;
        }
    }

    render() {
        return <Canvas draw={this.draw} {...this.props}/>
    }

}

export default Pendu
