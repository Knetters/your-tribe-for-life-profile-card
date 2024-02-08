// Get current time and date for the task bar
const timeField = document.getElementById("time-field")
const weekdays = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

function getDateTime() {
    let today = new Date();
    let time = weekdays[today.getDay()] + " " + today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes();

    timeField.innerHTML = time;
}

// Declare variables for the terminal
const textArt = document.getElementById("text-art");
const lastLogin = document.getElementById("last-login");
const output = document.getElementById("output")
const welcomeMSG = document.getElementById("welcome-msg")

function generateTextArt() {
    textArt.innerHTML = 
`||   / |  / /                                                   
||  /  | / /   ___     //   ___      ___     _   __      ___    
|| / /||/ /  //___))  //  //   ))  //   ))  // ))  ))  //___))  
||/ / |  /  //       //  //       //   //  // //  //  //        
|__/  |_/  ((____   //  ((____   ((___//  // //  //  ((____     
`
}

// Function to clear the terminal
function clear() {
    output.innerHTML = ""
    // welcomeMSG.innerHTML = ""
}

// Function to restart the terminal
function restart() {
    output.innerHTML = ""

    const terminalBodies = document.getElementsByClassName("terminal");
    const terminalBody = terminalBodies[0];

    terminalBody.classList.remove("red", "blue", "purple", "yellow", "green")
    terminalBody.classList.add("white")
}

// Function to make the user a sudo user
function sudo() {
    output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);
    output.insertAdjacentHTML('beforeend', `<p>Permission <span class="yellow">denied</span>: unable to run command.</p>`);
    
    setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
    }, 1500);
}

// Function for the help commando
function help() {
    output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);
    output.insertAdjacentHTML('beforeend', `
    <p><span class="yellow" aria-hidden="true">=====></span> Commands <span class="yellow" aria-hidden="true">=====></span></p>
    <p><span class="help-command">clear</span> <span class="help-description grey">Clears the terminal.</span></p>
    <p><span class="help-command">restart</span> <span class="help-description grey">Restarts the terminal.</span></p>
    <p><span class="help-command">stop</span> <span class="help-description grey">Stops the terminal.</span></p>
    <p><span class="help-command">help</span> <span class="help-description grey">List of available commands.</span></p>
    <p><span class="help-command">-v</span> <span class="help-description grey">Shows the current version.</span></p>
    <p><span class="help-command">sudo</span> <span class="help-description grey">Gives user super admin powers.</span></p>
    <p><span class="help-command">github</span> <span class="help-description grey">Redirect to GitHub.</span></p>
    <p><span class="help-command">info</span> <span class="help-description grey">List information.</span></p>
    <p><span class="help-command">time</span> <span class="help-description grey">Shows the current time.</span></p>
    <p><span class="help-command">goto [URL]</span> <span class="help-description grey">Redirects to given URL.</span></p>
    <p><span class="help-command">color [type]</span> <span class="help-description grey">Sets terminal font color.</span></p>
    `);
}

// Function that shows the current version
function version() {
    output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);
    output.insertAdjacentHTML('beforeend', `<p>Version: <span class="yellow">3.18.1</span></p>`);
}

// Function that redirects the user to my GitHub profile
function github() {
            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);

            output.insertAdjacentHTML('beforeend', `<p>Requesting GitHub profile: <span class="yellow">Knetters</span></p>`);

            output.insertAdjacentHTML('beforeend', `<p>Progress: <span id="progressBar">░░░░░░░░░░░░░░░░░░░░</span></p>`);
            const progressBars = document.querySelectorAll("#progressBar");
            const progressBar = progressBars[progressBars.length - 1];

            let bar = "░░░░░░░░░░░░░░░░░░░░";

            function fillBar() {
                let i = 0;
                let interval = setInterval(function() {
                    if (i === bar.length) {
                        clearInterval(interval);
                            window.open('https://github.com/knetters', '_blank');
                        return;
                    }
                    bar = bar.substring(0, i) + "▓" + bar.substring(i + 1);
                    progressBar.innerHTML = bar;
                    i++;
                }, 1000 / bar.length);
            }

            fillBar();
        }

// Function that gives the user info
        function info() {
            output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);
            
            output.insertAdjacentHTML('beforeend', `<p>Progress: <span id="progressBar">░░░░░░░░░░░░░░░░░░░░</span></p>`);
            const progressBars = document.querySelectorAll("#progressBar");
            const progressBar = progressBars[progressBars.length - 1];

            let bar = "░░░░░░░░░░░░░░░░░░░░";

            function fillBar() {
                let i = 0;
                let interval = setInterval(function() {
                    if (i === bar.length) {
                        clearInterval(interval);
                            output.insertAdjacentHTML('beforeend', `
                            <p><span class="yellow" aria-hidden="true">=====></span> Information <span class="yellow" aria-hidden="true">=====></span></p>
                            <p><span class="info-label">Name:</span> <span class="info-description green">Thomas Scheepers</span></p>
                            <p><span class="info-label">Age:</span> <span class="info-description green">23y</span></p>
                            <p><span class="info-label">Gender:</span> <span class="info-description green">Male</span></p>
                            <p><span class="info-label">Email:</span> <span class="info-description green">thomas@scheepers.com</span></p>
                            <p><span class="info-label">GitHub Name:</span> <span class="info-description yellow">Knetters</span></p>
                        `);
                        return;
                    }
                    bar = bar.substring(0, i) + "▓" + bar.substring(i + 1);
                    progressBar.innerHTML = bar;
                    i++;
                }, 1000 / bar.length);
            }

            fillBar();
        }

// Function that gives the user info
function time() {
    let t = new Date();
    let outputTime = t.getHours() + ":" + (t.getMinutes()<10?'0':'') + t.getMinutes();

    output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);
    output.insertAdjacentHTML('beforeend', `<p>Current time: <span class="purple">${outputTime}</span></p>`);
}

// Function that gos to the url the user types
function goTo(url) {
    output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);
    output.insertAdjacentHTML('beforeend', `<p>Requesting URl:</p>`);
    output.insertAdjacentHTML('beforeend', `<p>Progress: <span id="progressBar">░░░░░░░░░░░░░░░░░░░░</span></p>`);
    const progressBars = document.querySelectorAll("#progressBar");
    const progressBar = progressBars[progressBars.length - 1];

    let bar = "░░░░░░░░░░░░░░░░░░░░";

    function fillBar() {
        let i = 0;
        let interval = setInterval(function() {
            if (i === bar.length) {
                clearInterval(interval);
                window.open(url, '_blank');
                return;
            }
            bar = bar.substring(0, i) + "▓" + bar.substring(i + 1);
            progressBar.innerHTML = bar;
            i++;
        }, 1000 / bar.length);
    }

    fillBar(); 
}

// Function to change the color of the text
function color(colorValue) {
    output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);

    const terminalBodies = document.getElementsByClassName("terminal");
    const terminalBody = terminalBodies[0];

    if (colorValue === "green") {
        terminalBody.classList.remove("red", "blue", "purple", "yellow", "white")
        terminalBody.classList.add("green")
    }
    else if (colorValue === "red") {
        terminalBody.classList.remove("green", "blue", "purple", "yellow", "white")
        terminalBody.classList.add("red")
    }
    else if (colorValue === "blue") {
        terminalBody.classList.remove("green", "red", "purple", "yellow", "white")
        terminalBody.classList.add("blue")
    }
    else if (colorValue === "purple") {
        terminalBody.classList.remove("green", "red", "blue", "yellow", "white")
        terminalBody.classList.add("purple")
    }
    else if (colorValue === "yellow") {
        terminalBody.classList.remove("green", "red", "blue", "purple", "white")
        terminalBody.classList.add("yellow")
    }
    else if (colorValue === "white") {
        terminalBody.classList.remove("green", "red", "blue", "purple", "yellow")
        terminalBody.classList.add("white")
    }
    // Color failsafe
    else {
        output.insertAdjacentHTML('beforeend', `<p class="grey">"${colorValue}" is not a valid color. Choose between: red, purple, blue, green, yellow or white.</p>`);
    }
}

// Startup functions and values
generateTextArt()

let inputElem = document.querySelector("input");
window.addEventListener('load', function(e) {
    inputElem.focus();
})

window.addEventListener('click', function(e) {
    inputElem.focus();
})

getDateTime()
setInterval(getDateTime, 10 * 1000); // 1000 milliseconds = 1 second


const input = document.querySelector('.terminal-input');
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    // If statements for all the functions
    const inputValue = input.value.toLowerCase();

    let words = inputValue.split(" ");
    let assignment = words[0];
    let parameter = words[1];
    if (assignment === "help") {
        help();
    }
    else if (assignment === "clear") {
        clear();
    }
    else if (assignment === "restart") {
        restart();
    }
    else if (assignment === "stop") {
        closeTerminal();
    }
    else if (assignment === "sudo") {
        sudo();
    }
    else if (assignment === "-v") {
        version();
    }
    else if (assignment === "github") {
        github();
    }
    else if (assignment === "info") {
        info();
    }
    else if (assignment === "time") {
        time();
    }
    else if (assignment === "goto") {
        goTo(parameter);
    }
    else if (assignment === "color") {
        color(parameter);
    }
    else if (assignment === "") {
        output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);
    }
    // Command failsafe
    else {
        output.insertAdjacentHTML('beforeend', `<p><span class="blue">~/tmp/users</span> <span class="green">admin </span><span class="red">> </span>${input.value}</p>`);
        output.insertAdjacentHTML('beforeend', `<p class="grey">"${input.value}" is not a valid command. Type <span class="blue">help</span> for a list of commands.</p>`);
    }
    input.value = '';
  }
});

// Function for all the toolbar buttons and the OS
const terminal = document.getElementById("terminal")
const terminalToolbar = document.getElementById("terminal-toolbar")

// Toolbar buttons
const close_btn = document.getElementById("close")
const min_btn = document.getElementById("min")
const max_btn = document.getElementById("max")

// Application icons
const applicationIcon = document.getElementById("applicationIcon")

// Functions for the application icons
applicationIcon.addEventListener("dblclick", openTerminal);

function openTerminal() {
    terminal.classList.toggle("terminal-view");
}

// Functions for the toolbar buttons
close_btn.addEventListener("click", closeTerminal);

function closeTerminal() {
    terminal.classList.toggle("terminal-view");
    restart()
}

min_btn.addEventListener("click", minTerminal);

function minTerminal() {
    terminal.classList.toggle("terminal-view");
}

max_btn.addEventListener("click", maxTerminal);

function maxTerminal() {
    terminal.classList.toggle("terminal-width");
    terminalToolbar.classList.toggle("terminal-toolbar-width");
}
