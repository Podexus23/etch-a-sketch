const body = document.querySelector('body');
const container = document.querySelector('.container');
const shooButton = document.querySelector('.shoo-button')
const popupWindow = document.querySelector('.popup')

function createPixel() {
  let div = document.createElement('div');
  div.classList.add('pixel')
  return div
}

function colorRandomizer() {
  return Math.ceil(Math.random() * 255 - 1)
}

function createGrid(num) {
  let pixelWidth = (container.getBoundingClientRect().width - 1) / num + 'px';
  let pixelHeight = container.getBoundingClientRect().height / num + 'px';
  for (let i = 0; i < num * num; i++) {
    let pixel = createPixel();
    pixel.style.width = pixelWidth;
    pixel.style.height = pixelHeight;
    pixel.addEventListener('mouseover', (e) => {
      e.target.style['background-color'] = `rgb(${colorRandomizer()}, ${colorRandomizer()}, ${colorRandomizer()})`;
      if (e.target.style.opacity) {
        e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
      } else {
        e.target.style.opacity = 0.1;
      }
    })
    container.append(pixel)
  }
}

createGrid(10);

function resetContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createNumInput() {
  let pixelInput = document.createElement('input');
  pixelInput.setAttribute('type', 'number')
  pixelInput.setAttribute('min', '10')
  pixelInput.setAttribute('max', '100')
  pixelInput.setAttribute('value', '10')

  return pixelInput
}


function shooShoo() {
  let popup = document.createElement('div');
  let modal = document.createElement('div');
  let title = document.createElement('h3');
  let button = document.createElement('button');



  popup.classList.add('popup');
  modal.classList.add('popup-modal');
  button.classList.add('modal-button');
  title.textContent = 'Hello';
  button.textContent = 'Cleaning time';
  modal.append(title);
  modal.append(createNumInput())
  modal.append(button);
  popup.append(modal)

  button.addEventListener('click', (e) => {
    let popupWindow = document.querySelector('.popup');
    let pixelCounter = document.querySelector('input').value
    popupWindow.remove();
    resetContainer()
    if (parseInt(pixelCounter) > 100) pixelCounter = 100;
    createGrid(parseInt(pixelCounter));

    console.log('complete')
  })

  body.append(popup)
  console.log('shoo ^_^')
}

shooButton.addEventListener('click', shooShoo)