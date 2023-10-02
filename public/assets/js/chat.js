// Collapsible
var coll = document.getElementsByClassName("collapsible");
// Adding the action Listner to the Chat with Us button present in the collapsible class
    coll[0].addEventListener("click", function () {
        //this.classList.toggle("full-chat-block");

        // Go to the next Sibbling of Chat with Us button-> div with class="content"
        var content = this.nextElementSibling;
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            console.log(content.style.maxHeight);
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.scrollHeight);
        }

    });

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Wecolme to chatbot by team-5"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(true);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        return;
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 250)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Bot responding thankyou
    setTimeout(() => {
        getHardResponse("heart clicked");
    }, 250)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {        /*Which key was presses and if it is equal to enter having key code 13*/
        getResponse();
    }
});