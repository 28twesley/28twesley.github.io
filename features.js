const windowElement = document.querySelector('.window');
const resizeHandle = document.querySelector('.resize-handle');

let isResizing = false;
let startX, startY, startWidth, startHeightl

resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(window.getComputedStyle(windowElement).width, 10);
    startHeight = parseInt(window.getComputedStyle(windowElement).height, 10);
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
});

function resize(e) {
    if(!isResizing) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    windowElement.style.width = startWidth + deltaX + 'px';
    windowElement.style.height = startHeight + deltaY + 'px';
}

function stopResize() {
    isResizing = false;
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
}