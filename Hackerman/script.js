const commandInput = document.querySelector(".commandField");
const output = document.querySelector(".output");
const outputContainer = document.querySelector(".command-output");
const commands = ["help", "clear"];

const executeCommand = (cmd) => {
    switch(cmd)
    {
        case 'help':
            console.log("Help cmd");
            break;
        case 'clear':
            console.log("Clear cmd");
            break;
    }
}

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
        outputContainer.append(createElement);

        // clear the input box 
        commandInput.value = '';

        if(commands.includes(inputCommand))
            executeCommand(inputCommand);
        else
            outputTextMessage.setHTML(`<br> ${inputCommand} Command not found. Type \'help\' for list of available commands.`);
    }
});
