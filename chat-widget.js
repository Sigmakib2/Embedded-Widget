(function () {
    // Create the chat button
    var chatButton = document.createElement("div");
    chatButton.id = "chatButton";
    chatButton.innerHTML = "💬";
    chatButton.style.position = "fixed";
    chatButton.style.bottom = "20px";
    chatButton.style.right = "20px";
    chatButton.style.width = "50px";
    chatButton.style.height = "50px";
    chatButton.style.backgroundColor = "#007bff";
    chatButton.style.color = "#fff";
    chatButton.style.borderRadius = "50%";
    chatButton.style.display = "flex";
    chatButton.style.alignItems = "center";
    chatButton.style.justifyContent = "center";
    chatButton.style.cursor = "pointer";
    chatButton.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    chatButton.style.fontSize = "24px";
    chatButton.style.zIndex = "9999";

    // Create the chat window
    var chatWindow = document.createElement("div");
    chatWindow.id = "chatWindow";
    chatWindow.style.position = "fixed";
    chatWindow.style.bottom = "80px";
    chatWindow.style.right = "20px";
    chatWindow.style.width = "300px";
    chatWindow.style.height = "500px";
    chatWindow.style.backgroundColor = "#fff";
    chatWindow.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    chatWindow.style.borderRadius = "10px";
    chatWindow.style.overflow = "hidden";
    chatWindow.style.display = "none";
    chatWindow.style.zIndex = "10000";

    // Create iframe inside chat window
    var chatIframe = document.createElement("iframe");
    chatIframe.src = "https://embedded-widget.pages.dev"; // Change to your hosted chat app
    chatIframe.style.width = "100%";
    chatIframe.style.height = "100%";
    chatIframe.style.border = "none";

    chatWindow.appendChild(chatIframe);

    // Toggle chat window on button click
    chatButton.onclick = function () {
        if (chatWindow.style.display === "none") {
            chatWindow.style.display = "block";
        } else {
            chatWindow.style.display = "none";
        }
    };

    // Append elements to the body
    document.body.appendChild(chatButton);
    document.body.appendChild(chatWindow);
})();
