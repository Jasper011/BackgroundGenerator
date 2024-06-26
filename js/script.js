function getRandomNumber(min, max) {
    let r = Math.floor(Math.random()*max)
    if (r < min){
        r = min
    }
    return r
}

function transformNotation(from, to, number) {
    const tenNotation = parseInt(number, from)
    return tenNotation.toString(to).toUpperCase()
}

function getRandomHexColor() {
    let color = '#'
    for (let i = 0; i < 6; i++){
        color += transformNotation(10, 16, getRandomNumber(0, 16))
    }
    return color
}

function hexToRGB(hex) {
    var bigint = parseInt(hex.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function randomBg() {
    const bgTypes = ['radial-gradient', 'linear-gradient', 'background-color']
    const type = bgTypes[getRandomNumber(0, 3)]
    console.log(type);
    let colorObj = {}
    if (type == 'background-color'){
        color = getRandomHexColor()
        colorObj['hex'] =  color;
        colorObj['rgb'] = hexToRGB(color)
    } else if(type == 'radial-gradient'){
        const colorAmount = getRandomNumber(2, 4)
        colorObj['hex'] = 'radial-gradient('
        colorObj['rgb'] = 'radial-gradient('
        for (let i = 0; i < colorAmount; i++){
            const color = getRandomHexColor()
            colorObj['hex'] += color
            colorObj['rgb'] += hexToRGB(color)
            if (i == colorAmount - 1){
                colorObj['hex'] += ')'
                colorObj['rgb'] += ')'
            } else {
                colorObj['hex'] += ', '
                colorObj['rgb'] += ', '
            }
        }
    } else if (type == 'linear-gradient'){
        const angle = getRandomNumber(0, 360) + 'deg, ';
        colorObj['hex'] = 'linear-gradient(' + angle
        colorObj['rgb'] = 'linear-gradient(' + angle
        const colorAmount = getRandomNumber(2, 4);
        for (let i = 0; i < colorAmount; i++){
            const color = getRandomHexColor()
            colorObj['hex'] += color
            colorObj['rgb'] += hexToRGB(color)
            if (i == colorAmount - 1){
                colorObj['hex'] += ')'
                colorObj['rgb'] += ')'
            } else {
                colorObj['hex'] += ', '
                colorObj['rgb'] += ', '
            }
        }
    }
    return colorObj
}

function setRandomBG() {
    const randomColor = randomBg()
    hexColor.textContent = randomColor['hex'];
    rgbColor.textContent = randomColor['rgb']
    background.style.background = randomColor['hex']
}

generateBtn.addEventListener('click', setRandomBG)
setRandomBG()