Random Background Color Generator

This project changes the background color of a webpage to a randomly generated color every second. It includes functionality to start and stop the color change using buttons.

 Project Overview

The project consists of three files:
- `index.html`: Contains the structure of the webpage.
- `style.css`: Provides basic styling for the webpage.
- `script.js`: Contains the JavaScript logic to generate random colors and change the background color at regular intervals.

 Features

- Random Color Generation: Every second, a random hex color is generated using JavaScript and applied as the background color.
- Start/Stop Functionality: A start button initiates the color changes, and a stop button halts the changes.

 How It Works

1. Random Color Function: 
    - The function `randomColor()` generates a random hex color.
    - It uses the hexadecimal characters (`0-9, A-F`) and constructs a 6-digit hex code.
  
    ```javascript
    let randomColor = function() {
        let hex = "0123456789ABCDEF";
        let color = "";
        for (i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    ```

2. Start/Stop Buttons:
    - The `start` button starts the interval, changing the background color every second.
    - The `stop` button clears the interval, stopping the color change.
    
    ```javascript
    const startbtn = document.querySelector('start');
    startbtn.addEventListener('click', () => {
        updateColor = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    });

    const stopbtn = document.querySelector('stop');
    stopbtn.addEventListener('click', () => {
        clearInterval(updateColor);
    });
    ```

 Getting Started

To run this project locally:

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/your-username/random-color-generator.git
    ```
2. Open `index.html` in your web browser.
3. Click the "Start" button to begin the random color generation, and click the "Stop" button to halt it.

for More contact: 
1) haris35088@gmail.com
2) www.linkedin.com/in/muhammad-haris88





