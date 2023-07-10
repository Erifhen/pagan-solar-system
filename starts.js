document.addEventListener("DOMContentLoaded", function () {
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const canvas = document.getElementById("starfield");
    const context = canvas.getContext("2d");
    const stars = 700;
    const colorrange = [0, 60, 240];

    for (let i = 0; i < stars; i++) {
        let x = Math.random() * canvas.offsetWidth;
        let y = Math.random() * canvas.offsetHeight;
        let radius = Math.random() * 1.2;
        let hue = colorrange[getRandom(0, colorrange.length - 1)];
        let sat = getRandom(50, 100);

        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
        context.fill();
    }
});