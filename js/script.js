function generateRandomColor() {
    let rgb = [];
    for ( let i = 0; i < 3; i++ ) {
        let colorNum = Math.floor( ( Math.random() * 255 ) + 1 );
        rgb.push(colorNum)
    }
    let node = document.getRootNode();
    console.log(node);
    rgbColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    document.body.style.backgroundColor = rgbColor;
}

window.onload = function() {
    generateRandomColor();
}