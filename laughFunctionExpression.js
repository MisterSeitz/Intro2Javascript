/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    message = "";
    for (var x = 1; x <= num; x++) {
        if (x === num) {
            message += "ha!";
        } else {
            message += "ha";
        }
    } return message;
};

console.log(laugh(10));
