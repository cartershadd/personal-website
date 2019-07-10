import React from 'react';

class CrazyLines extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        // eslint-disable-next-line
        let repeat = setInterval(run, 0);
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;
        const ctx = canvas.getContext("2d");
        ctx.globalAlpha = 0.5;

        let x = 10;
        let y = 50;
        let speedx = 30;
        let speedy = 30;

        function run() {
            // ctx.fillStyle = makeRandomColor(); this will change ball color every time a ball pops up
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(x, y);
            ctx.stroke();
            x = x + speedx;
            y = y + speedy;
            speedx = speedx + 1;
            if (x > document.body.clientWidth && speedx > 0) {
                speedx = -speedx;
                ctx.fillStyle = makeRandomColor();
                ctx.strokeStyle = makeRandomColor();
            }
            if (x < 0 && speedx < 0) {
                speedx = -speedx;
                ctx.fillStyle = makeRandomColor();
                ctx.strokeStyle = makeRandomColor();
            }
            if (y > document.body.clientHeight && speedy > 0) {
                speedy = -speedy;
                ctx.fillStyle = makeRandomColor();
                ctx.strokeStyle = makeRandomColor();
            }
            if (y < 0 && speedy < 0) {
                speedy = -speedy;
                ctx.fillStyle = makeRandomColor();
                ctx.strokeStyle = makeRandomColor();
            }
        }

        function makeRandomColor() {
            return "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }


    }


    render() {
        return (
                <canvas ref="canvas" className="line-canvas"/>
        )
    };
}

export default CrazyLines;