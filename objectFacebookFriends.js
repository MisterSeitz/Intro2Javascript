/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: "Muhammed Faiz Seitz",
    friends: 85,
    messages: ["hello", "How are you"],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriend() {
        facebookProfile.friends += 1;
    },
    removeFriend: function removeFriend() {
        facebookProfile.friends -= 1;
    }
};
