const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
let slider = document.querySelector('#slider');
let sliderValue = slider.value;
let sliderText = document.querySelector('#slider-tracker');
let gSize = 16;

// creates blocks through DOM elements
function blocksCreation(n) { //important
    console.log(sliderValue)
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

// function will work by modifying sliderValue
function gridSize(number) {
    if (number == 1) {
        return 4;
    } else if (number == 2) {
        return 8;
    } else if (number == 3) {
        return 16;
    } else if (number == 4) {
        return 32;
    } else if (number == 5) {
        return 64;
    }
}

function clearBoard(div) {
    div.classList.remove('hoverEffect');
}

function colorEffect(div) {
    //if (event.type === 'mouseover' && !mouseDown) return;
    let colorInput = document.querySelector('#color-selector'); 
    div.style.backgroundColor = colorInput.value;
   //div.classList.add('hoverEffect');
}

// first event
blocksCreation();
let contentDivs = document.querySelectorAll('.content');
contentDivs.forEach(div => div.addEventListener('mouseenter', function() {
    colorEffect(div);
}));

// second event and onward
btn.addEventListener('click', function() {
    contentDivs.forEach(div => clearBoard(div));
    contentDivs.forEach(div => div.remove());
    blocksCreation(gSize);
    contentDivs = document.querySelectorAll('.content');

    contentDivs.forEach(div => div.addEventListener('mouseenter', function() {
        colorEffect(div);
    }));
});

// slider erases and updates grid size on event
slider.addEventListener('mouseup', function() {
    sliderValue = slider.value;
    gSize = gridSize(sliderValue);
    sliderText.innerText = 'Size ' + gSize;
    contentDivs.forEach(div => clearBoard(div));
    contentDivs.forEach(div => div.remove());
    blocksCreation(gridSize(sliderValue));
    contentDivs = document.querySelectorAll('.content');

    contentDivs.forEach(div => div.addEventListener('mouseenter', function() {
        colorEffect(div);
    }));
});
