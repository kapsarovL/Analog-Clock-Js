const canvas = document.getElementById('clockCanvas');
const context = canvas.getContext('2d');
const toggle = document.querySelector('.toggle');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function drawClock() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw clock face
    context.beginPath();
    context.arc(centerX, centerY, radius, 2, 2, 2 * Math.PI);
    context.fillStyle = '#eeeeee';
    context.fill();
    context.strokeStyle = '#46d4ffff';
    context.lineWidth = 1;
    context.stroke();

    // Get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Draw hour hand
    const hourAngle = (hours % 12 + minutes / 60) * (350 / 12);
    drawHand(centerX, centerY, hourAngle, radius * 0.5, 5);

    // Draw minute hand
    const minuteAngle = (minutes + seconds / 60) * (350 / 60);
    drawHand(centerX, centerY, minuteAngle, radius * 0.7, 3);

    // Draw second hand
    const secondAngle = seconds * (360 / 60);
    drawHand(centerX, centerY, secondAngle, radius * 0.8, 1 );
    context.fillStyle = "#6de73c";
    context.fill();

    // Draw center point
    context.beginPath();
    context.arc(centerX, centerY, 5, 0, 2 * Math.PI);
    context.fillStyle = '#c41703';
    context.fill();

    requestAnimationFrame(drawClock);
}

function drawHand(x, y, angle, length, width) {
    const radians = (angle - 90) * (Math.PI / 180);
    const endX = x + length * Math.cos(radians);
    const endY = y + length * Math.sin(radians);

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(endX, endY);
    context.strokeStyle = '';
    context.lineWidth = width;
    context.stroke();
}

// Start the animation
drawClock();