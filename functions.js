const container = document.querySelector('.container');
const btn = document.querySelector('.btnPrimary');

function blocksCreation(n) {
    let number = n || 16;
    let xAxis = 500 / number;
    let yAxis = 500 / number;
    const totalBlocks = number * number;

    let i = 0;
    while (i < totalBlocks) {
        const content = document.createElement('div');
        content.style.width = xAxis + 'px';
        content.style.height = yAxis + 'px';
        content.classList.add('content');
        container.appendChild(content);
        i++;
    }
}

function colorEffect(div) {
    div.classList.add('hoverEffect');
}

function clearBoard(div) {
    div.classList.remove('hoverEffect');
}

function newSize(number) {
    let xAxis = 928.2 / number;
    let yAxis = 609 / number;
    const totalBlocks = number * number;

    blocksCreation(totalBlocks);
}

// first event
blocksCreation();
let contentDivs = document.querySelectorAll('.content');
contentDivs.forEach(div => div.addEventListener('mouseover', function() {
    colorEffect(div);
}));


// second event and onward
btn.addEventListener('click', function() {
    contentDivs.forEach(div => clearBoard(div));
    contentDivs.forEach(div => div.remove());
    let number = prompt("Enter grid size: ", 16);
    blocksCreation(number);
    contentDivs = document.querySelectorAll('.content');

    contentDivs.forEach(div => div.addEventListener('mouseover', function() {
        colorEffect(div);
    }));
});
