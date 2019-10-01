import React from 'react';

class ReverseGravity extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const c = canvas.getContext("2d");
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;
        const mouse = {
            x: 0,
            y: 0
        };
        const colors = ["#70121f", "#bc521a", "#ffcdee", "#ff151d"];

        const gravity = -1;
        const friction = 0.99;

        /*Event Listeners*/
        document.body.addEventListener("mousemove", function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        document.body.addEventListener("resize", () => {
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight;
            init();
        });

        document.body.addEventListener("click", function () {
            init();
        });

        /*Utility Functions*/
        function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function randomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        /*Objects*/
        function Ball(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color;

            this.update = function () {
                if (this.y + this.radius + this.dy > canvas.height || this.y + this.radius < 0) {
                    this.dy = -this.dy * friction;
                } else {
                    // This line gives the balls gravity.
                    this.dy += gravity;
                }
                if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius - this.dx <= 0) {
                    this.dx = -this.dx;
                }
                // This line makes the balls move along the x axis.
                this.x += this.dx;

                // This line makes the balls move along the y axis.
                this.y += this.dy;
                this.draw();
            };

            this.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
                c.stroke();
                c.closePath();
            };

        }

        /*Implementation*/
        // let ball;
        let ballArray;

        function init() {
            ballArray = [];
            for (let i = 0; i < 100; i++) {
                const radius = randomIntFromRange(4, 80);
                const x = randomIntFromRange(radius, canvas.width - radius);
                const y = randomIntFromRange(radius, canvas.height - radius);
                const dx = randomIntFromRange(-2, 2);
                const dy = randomIntFromRange(-2, 2);
                ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
            }
        }

        /*Animation Loop*/
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < ballArray.length; i++) {
                ballArray[i].update();
            }
        }

        init();
        animate();

    };

    render() {
        return (
                <canvas ref="canvas" className="reverse-canvas"/>
        )
    }
}

export default ReverseGravity