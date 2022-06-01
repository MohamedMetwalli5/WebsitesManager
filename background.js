chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.name === "message"){
        response({text: "this is a response....."});
    }
});