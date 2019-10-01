import React, {Component} from 'react';

class RainbowStar extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;
        let ctx = canvas.getContext("2d");
        ctx.globalAlpha = 0.5;

        function run() {
            for (let i = 0; i < 500; i++) {
                star(i * 3, i + 25, 500 - (i * 0.5), i * Math.PI * 0.5);
            }
        }

        function star(x, y, size, angle) {

            ctx.fillStyle = makeRandomColor();

            ctx.beginPath();
            ctx.moveTo(x + (Math.sin(angle) * size), y + (Math.cos(angle) * size));
            ctx.arc(x + (Math.sin(angle + (Math.PI/2)) * size * 0.2), y + (Math.cos(angle + (Math.PI/2)) * size * 0.2), size/4, (2.11 * Math.PI) - angle, (1.25 * Math.PI) - angle, true);
            ctx.arc(x + (Math.sin(angle - (Math.PI/2)) * size * 0.2), y + (Math.cos(angle - (Math.PI/2)) * size * 0.2), size/4, (1.75 * Math.PI) - angle, (2.8 * Math.PI) - angle, true);



            ctx.fill();


        }
        run();

        function makeRandomColor() {
            return "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }

    }


    render() {
        return (
            <canvas ref="canvas" className="star-canvas" />
        );
    }
}

export default RainbowStar;