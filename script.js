function getCircleArea() {
    const radius = parseFloat(document.getElementById('radius').value.trim());
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid radius.");
        return;
    }
    const area = Math.PI * radius * radius;
    document.getElementById('circle-area').value = area.toFixed(2);
}

function getTriangleArea() {
    const base = parseFloat(document.getElementById('base').value.trim());
    const height = parseFloat(document.getElementById('height').value.trim());
    if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
        alert("Please enter valid base and height.");
        return;
    }
    const area = 0.5 * base * height;
    document.getElementById('triangle-area').value = area.toFixed(2);
}

function getSquareArea() {
    const side = parseFloat(document.getElementById('side').value.trim());
    if (isNaN(side) || side <= 0) {
        alert("Please enter a valid side length.");
        return;
    }
    const area = side * side;
    document.getElementById('square-area').value = area.toFixed(2);
}

function getRectangleArea() {
    const width = parseFloat(document.getElementById('width').value.trim());
    const height = parseFloat(document.getElementById('height-rect').value.trim());
    if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
        alert("Please enter valid width and height.");
        return;
    }
    const area = width * height;
    document.getElementById('rectangle-area').value = area.toFixed(2);
}
