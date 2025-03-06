// Change Variable
let stylemode = document.cookie;

// Change Variable
let stylelink = document.getElementById('style');

// Conditional Branch With Else Branch
if (stylemode == 'dark') {
    //Change the href property of the 'link'
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
    stylemode = 'light';
    document.cookie = 'light';
}

//common event
function switchmode() {

        //conditional statement with else branch
        if (stylemode == 'light') {
            stylemode = 'dark'
            stylelink.href = 'css/dark.css';
            document.cookie = 'dark';
        } else {
            stylemode = 'light'
            stylelink.href = 'css/light.css';
            document.cookie = 'light';
        }
}

function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display === 'block') {
        toolbarbuttons.style.display = 'none';
    } else{
        toolbarbuttons.style.display = 'block';
    }
}

let clickCountDisplay;

function setupClickCounter() {
    clickCountDisplay = document.getElementById('clickCount');
    if (!clickCountDisplay) {
        //Create a clickCount div
        clickCountDisplay = document.createElement('div');
        clickCountDisplay.id = 'clickCount';
        document.body.appendChild(clickCountDisplay);
    }
    let clickCount = localStorage.getItem('clickCount') || 0;
    clickCountDisplay.textContent = 'Clicks: ' + clickCount;

    document.addEventListener('click', function() {
        clickCount++;
        localStorage.setItem('clickCount', clickCount);
        clickCountDisplay.textContent = 'Clicks: ' + clickCount;
    });
}

window.onload = setupClickCounter;