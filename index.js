function getSizeValue(valueWithUnit, unit) {
    return parseInt(valueWithUnit.split(unit)[0]);
}

function balloon(event) {
    event.preventDefault();
    switch (event.keyCode) {
        case 40:
            changeSize('.balloon', 1.1, 'down');
            break;
        case 38:
            changeSize('.balloon', 1.1, 'up');
            break;
        default:
            return;
    }
}

function changeSize(element, amount, direction) {
    element = document.querySelector(element);
    let elementSize = window.getComputedStyle(element).fontSize;
    let elementSizeValue = getSizeValue(elementSize, 'px');
    if (direction == 'up') {
        elementSizeValue *= amount;
    } else if (direction == 'down') {
        elementSizeValue /= amount;
    }

    if (elementSizeValue <= 250) {
        elementSize = Math.ceil(elementSizeValue) + 'px';
        element.style.fontSize = elementSize;
    } else boom(element);
}

function boom(element) {
    element.firstChild.nodeValue = '💥';
    document.removeEventListener('keydown', balloon, true);
}

document.addEventListener('keydown', balloon, true);