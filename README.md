# JavaScript Clock with Dark Mode Toggle

This README.md file provides an overview of the JavaScript code that creates a simple clock displayed on an HTML canvas element. It also includes a dark mode toggle feature. This code uses HTML, CSS, and JavaScript to create a dynamic clock.

## Features

- Displays a real-time clock with hour, minute, and second hands.
- Allows the user to switch between light and dark modes.
- Uses the HTML `<canvas>` element for drawing the clock hands.
- Animates the clock to update in real-time.

## Prerequisites

Before using this code, make sure you have the following:

- An HTML file containing an element with the id "clockCanvas" for the clock canvas.
- A button element with the class "toggle" to switch between light and dark modes.

## Usage

1. Include the JavaScript code in your HTML file.

2. Ensure that you have the necessary HTML structure in place with the canvas and toggle button elements.

3. Customize the clock's appearance by modifying the code within the `drawClock` and `drawHand` functions. You can change colors, hand lengths, or any other visual aspect.

## How it Works

1. The code initializes the clock by obtaining a reference to the canvas and its 2D rendering context.

2. It sets up event handling for the dark mode toggle button, which toggles the "dark" class on the HTML element and updates the button text accordingly.

3. The `drawClock` function is responsible for drawing the clock hands on the canvas. It first clears the canvas and then draws the clock face, the hour, minute, and second hands, and the center point.

4. The `drawHand` function simplifies drawing clock hands by accepting parameters like position, angle, length, and width.

5. The clock starts animating in real-time by calling `drawClock()`.

## Customization

Feel free to customize the appearance of the clock by changing the colors, hand lengths, or other visual aspects within the `drawClock` and `d`rawHand `functions. You can adjust the following:

- Clock face color and stroke color.
- Hand lengths and widths.
- Center point color.

## Example

You can see this JavaScript clock in action by incorporating it into your HTML file and opening it in a web browser.

<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>JavaScript Clock</title>
</head>
<body>
    <canvas id="clockCanvas" width="300" height="300"></canvas>
    <button class="toggle">Dark mode</button>
    <script src="script.js"></script>
</body>
</html>-->

## Credits

This JavaScript clock code was created by kapsarovL.

## License

This code is licensed under the [MIT LICENSE](https://github.com/kapsarovL/Analog-Clock-Js?tab=MIT-1-ov-file#readmee). Feel free to use, modify, and distribute it as needed.
