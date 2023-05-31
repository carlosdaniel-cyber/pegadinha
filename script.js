window.addEventListener('mousemove', (event) => {
    // Posição do mouse
    let mousePos = { x: event.clientX, y: event.clientY };

    let denialButton = document.getElementById("denial")
    let elementPos = denialButton.getBoundingClientRect();

    // Medidas do botão
    let buttonMeasures = {width: denialButton.offsetWidth, height: denialButton.offsetHeight}

    // Posição do centro botão
    let buttonPos = { x: elementPos.left + (buttonMeasures.width / 2), y: elementPos.top + (buttonMeasures.height / 2) }


    function calculateDistance(x1, x2, y1, y2) {
      return Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
    }

    let distance = calculateDistance(mousePos.x, buttonPos.x, mousePos.y, buttonPos.y)
    console.log(mousePos)

    const windowWidth = window.innerWidth * 0.9;
    const windowHeight = window.innerHeight * 0.9;

    // function that returns a random number between a min and max
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min; 
    }

    let randomTop = getRandomNumber(0, windowHeight);
    let randomLeft = getRandomNumber(0, windowWidth);

    if (distance <= 70) {
      denialButton.style.position = "fixed"
      denialButton.style.top = randomTop +"px";
      denialButton.style.left = randomLeft +"px";
      }
  });
  



