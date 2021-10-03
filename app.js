const board = document.querySelector('#board')
const colors = ['#1FABAB', '#517878', '#3EDE83', '#E27891', '#AB1F86']
const SQUARES_NUMBER = 500
const SQUARE_SIZE = 30

const container = document.querySelector('.container')

container.style.maxWidth = `${SQUARES_NUMBER}px`
console.log(container.style.maxWidth)

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.width = `${SQUARE_SIZE}px`
    square.style.height = `${SQUARE_SIZE}px`

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
   /* changeBackground(color)*/
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

/*function changeBackground(color) {
    document.body.style.backgroundColor = color
}*/
