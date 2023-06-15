const commandInput = document.querySelector(".commandField");
const output = document.querySelector(".output");
const outputContainer = document.querySelector(".command-output");
const commands = ["help", "clear", "connect", "contribute"];

// help cmd output 
const showAllAvailableCmds = (messageBox) => {
    
    // list down all commands from array 
    messageBox.innerHTML += " <br>Available Commands to use are: ";
    commands.forEach((cmd) => {
        // add the cmds 
        messageBox.innerHTML += `<br> → ${cmd}`;
    });

    // ask for collabration 
    messageBox.innerHTML += "<br><br>» We are looking for contributors to improve this projects, are you interested? <br>» Type \'contribute\' and become a open-source buddy for Web-Projects.";
}

// clear cmd output 
const clearTerminal = () => {
    // erase everything from output-container 
    outputContainer.innerHTML = '';
}

// connect cmd output 
const openGitHubProfile = () => {
    // open my github profile 
    window.open("https://github.com/Alkaison");
}

// open github repo for contribution 
const contributionLink = () => {
    // open github repo 
    window.open("https://github.com/Alkaison/Web-Projects/");
}

// executes functions as per command match 
const executeCommand = (cmd, messageBox) => {
    switch(cmd)
    {
        case "help":
            showAllAvailableCmds(messageBox);
            break;
        case "clear":
            clearTerminal(messageBox);
            break;
        case "connect":
            openGitHubProfile();
            break;
        case "contribute":
            contributionLink();
            break;
    }
}

// validate the commands 
commandInput.addEventListener("keydown", (e) => {
    
    // get command from input box 
    const inputCommand = commandInput.value.trim();

    if(e.key === "Enter" && inputCommand !== '')
    {

        // create new element and append it on output 
        const createElement = output.cloneNode(true);
        const outputTextMessage = createElement.querySelector(".outputText");
        createElement.style.display = "block";
        outputTextMessage.textContent = inputCommand;

        // append the message 
        if(commands.includes(inputCommand))
            executeCommand(inputCommand, outputTextMessage);
        else
            outputTextMessage.innerHTML += "<br>Command not found. Type \'help\' for list of available commands.";
        
        // clear the input box and append the element 
        commandInput.value = '';

        if(inputCommand != "clear")
            outputContainer.append(createElement);
    }
});
