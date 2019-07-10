import React from 'react';

class CurvedLines extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        // eslint-disable-next-line
        let repeat = setInterval(run, 0);
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;
        const ctx = canvas.getContext("2d");
        ctx.globalAlpha = 0.5;

        let numbers = [5, 5, 20, 2, 2, 10, 10, 5, 2, 10, 20];
        let counter = 0;
        let x = 10;
        let y = 50;
        let x2 = 0;
        let y2 = 0;
        let x3 = document.body.clientWidth / 2;
        let y3 = document.body.clientHeight / 2;
        let speedx = 30;
        let speedy = 30;
        let thickness = 50;

        function run() {
            // ctx.fillStyle = makeRandomColor(); this will change ball color every time a ball pops up
            counter = counter + 1;
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            // ctx.lineTo(x, y);
            ctx.quadraticCurveTo(x3, y3, x, y);
            ctx.lineWidth = thickness;
            ctx.stroke();
            x = x + speedx;
            y = y + speedy;
            x2 = Math.random() * document.body.clientWidth;
            y2 = Math.random() * document.body.clientHeight;
            speedx = speedx + 1;
            thickness = numbers[counter % numbers.length];
            if (x > document.body.clientWidth && speedx > 0) {
                speedx = -speedx;
                // thickness = 5;
                ctx.fillStyle = makeRandomColor();
                ctx.strokeStyle = makeRandomColor();
            }
            if (x < 0 && speedx < 0) {
                speedx = -speedx;
                // thickness = 15;
                ctx.fillStyle = makeRandomColor();
                ctx.strokeStyle = makeRandomColor();
            }
            if (y > document.body.clientHeight && speedy > 0) {
                speedy = -speedy;
                // thickness = 30;
                ctx.fillStyle = makeRandomColor();
                ctx.strokeStyle = makeRandomColor();
            }
            if (y < 0 && speedy < 0) {
                speedy = -speedy;
                // thickness = 2;
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
            <canvas ref="canvas" className="curved-canvas"/>
        )
    };
}

export default CurvedLines;