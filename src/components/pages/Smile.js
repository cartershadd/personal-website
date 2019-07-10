import React from 'react';


class Canvas extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        // eslint-disable-next-line
        const repeat = setInterval(draw, 20);
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;
        const ctx = canvas.getContext("2d");
        ctx.globalAlpha = 0.5;

        let numbers = [5, 5, 20, 2, 2, 10, 10, 5, 2, 10, 20];
        let counter = 0;
        let x = 10;
        let y = 50;
        let radius = 50;

        function draw() {
            // this will change face color every time a face pops up
            ctx.fillStyle = makeRandomColor();
            counter = counter + 1;
            ctx.beginPath();
            ctx.arc(x + 75, y + 75, radius + 50, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(x + 110, y + 75);
            ctx.arc(x + 75, y + 75, radius + 35, 0, Math.PI, false);  // Mouth (clockwise)
            ctx.moveTo(x + 65, y + 65);
            ctx.arc(x + 60, y + 65, 5, 0, Math.PI * 2, false);  // Left eye
            ctx.moveTo(x + 95, y + 65);
            ctx.arc(x + 90, y + 65, 5, 0, Math.PI * 2, false);  // Right eye
            ctx.fill();
            x = Math.random() * document.body.clientWidth;
            y = Math.random() * document.body.clientHeight;
            radius = numbers[counter % numbers.length];
        }

        function makeRandomColor() {
            return "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }

    };

    render() {
        return (
                <canvas ref="canvas" className="smile-canvas"/>
        )
    }
}

export default Canvas