/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// builds a triangle based on number
function buildTriangle(number) {
    var triangle = ""
    for (var x = 1; x <= number; x++) {
        triangle += makeLine(x)
    } return triangle
}

console.log(buildTriangle(30));