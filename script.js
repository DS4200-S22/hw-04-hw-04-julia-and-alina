

/**
    The number is increased everytime the circle is clicked.
*/
function circle1Clicked() {
    let numClicks = document.getElementById('circle1Counter').innerHTML;
    numClicks++;
    document.getElementById('circle1Counter').innerHTML = numClicks;
}

/**
    Shows an outline for the circle.
*/
function showOutline() {
    document.getElementById('circle2').style.stroke = "black";
    document.getElementById('circle2').style.strokeWidth = "5px";
}

/**
    When the user hovers the circle, a borde will appear, when the cursor is gone, the ourline will dissapear.
 */
function hideOutline() {
    document.getElementById('circle2').style.stroke = null;
    document.getElementById('circle2').style.strokeWidth = 0;
}

/**
    If the user clicks on the clicks on the circle and its visible it will be invisible, 
    if the user clicks on the circle and its invisible, it will become visible.
*/
function circle3Clicked() {
        // Get svg class
        let currentState = document.getElementById("circle3").getAttribute("class"); 

        // Change visibility 
        if (currentState === "invisible") {
            document.getElementById("circle3").setAttribute("class", "visible"); 
        } else {
            document.getElementById("circle3").setAttribute("class", "invisible"); 
        }
}