window.addEventListener('mousemove', (event) => {
    // Posição do mouse
    let mousePos = { x: event.clientX, y: event.clientY };

    // Posição do botão
    let element = document.getElementById("denial");
    let buttonPos = {x: element.offsetLeft, y: element.offsetTop}

    function distance(x1, x2, y1, y2) {
      return Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
    }

    console.log(distance(mousePos.x, mousePos.y, buttonPos.x, buttonPos.y))
});




