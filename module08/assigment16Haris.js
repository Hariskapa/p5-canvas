let xPos;
let yPos;
function setup() {
    // create canvas
    createCanvas(600, 400);
    // set background color
    background('red');
}
function draw() {
    for (xPos = 20; xPos < width; xPos = xPos + 40) {
        for (yPos = 50; yPos < height; yPos = yPos + 100) {
            fill(xPos / 3 + 50, yPos / 2 + 50, (xPos + yPos) / 4);
            ellipse(xPos, yPos, 20);
            if (yPos == 250) {
                fill(255, 255, 0);
                ellipse(xPos, yPos, 5)
            }
        }
    }
}