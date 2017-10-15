/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 */

function laugh(num) {
    message = "";
    for (var x = 1; x <= num; x++) {
        if (x === num) {
            message += "ha!";
        } else {
            message += "ha";
        }
    } return message;
}

console.log(laugh(3));