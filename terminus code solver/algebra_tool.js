// Values associated with each image
const imageValues = {
    "image1.png": 0,
    "image2.png": 10,
    "image3.png": 11,
    "image4.png": 20,
    "image5.png": 21,
    "image6.png": 22
};

// Variables to hold selected values
let xValue = null;
let yValue = null;
let zValue = null;

// Function to select a number based on the clicked image
function selectNumber(variable, imgSrc) {
    const value = imageValues[imgSrc]; // Get the numeric value associated with the clicked image

    if (variable === 'x') {
        xValue = value; // Set xValue
    } else if (variable === 'y') {
        yValue = value; // Set yValue
    } else if (variable === 'z') {
        zValue = value; // Set zValue
    }

    // Update the image selection styles
    updateImageSelection(variable, imgSrc);

    // Automatically evaluate and display results
    updateResults();
}

// Function to update selected image styles
function updateImageSelection(variable, imgSrc) {
    const images = document.querySelectorAll(`img[onclick*="${variable}"]`);
    images.forEach((img) => {
        if (img.src.includes(imgSrc)) { // Match the image source to the selected image
            img.classList.add('selected'); // Highlight selected image
        } else {
            img.classList.remove('selected'); // Remove highlight from unselected images
        }
    });
}

// Function to evaluate expressions and update results
function updateResults() {
    // Ensure values are checked before calculation
    const results = {
        expr1: (xValue !== null) ? (2 * xValue + 11) : "0",
        expr2: (yValue !== null && zValue !== null) ? (2 * zValue + yValue - 5) : "0",
        expr3: (yValue !== null && zValue !== null && xValue !== null) ? (yValue + zValue - xValue) : "0"
    };

    // Update the displayed results
    document.getElementById("result1").innerText = results.expr1;
    document.getElementById("result2").innerText = results.expr2;
    document.getElementById("result3").innerText = results.expr3;
}
