window.addEventListener('mousemove', (event) => {
    // Posição do mouse
    let mousePos = { x: event.clientX, y: event.clientY };

    let button = document.getElementById("denial")
    let elementPos = button.getBoundingClientRect();

    // Medidas do botão
    let buttonMeasures = {width: button.offsetWidth, height: button.offsetHeight}

    // Posição do centro botão
    let buttonPos = { x: elementPos.left + (buttonMeasures.width / 2), y: elementPos.top + (buttonMeasures.height / 2) }


    function calculateDistance(x1, x2, y1, y2) {
      return Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
    }

    let distance = calculateDistance(mousePos.x, buttonPos.x, mousePos.y, buttonPos.y)
    console.log(mousePos)

    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    // function that returns a random number between a min and max
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min; 
    }

    let randomTop = getRandomNumber(0, winHeight);
    let randomLeft = getRandomNumber(0, winWidth);

    if (distance <= 50) {
      button.style.position = 'fixed'
      button.style.position = randomTop +"px";
      button.style.top = randomLeft +"px";
      }
  });
  



