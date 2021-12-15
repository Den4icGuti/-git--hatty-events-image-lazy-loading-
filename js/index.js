const ref = {
  coords: document.querySelector('.js-coords'),
  input: document.querySelector('.js-input'),
  output:document.querySelector('.js-output')
}

const { coords, input, output } = ref;
let countMouseMove = 0;

 window.addEventListener('mousemove',_.throttle(onMouseMove,500))

function onMouseMove(event) { 
  countMouseMove += 1;

  coords.textContent = `
  Кол-во вызовов функции onMouseMove: ${countMouseMove}
  X:${event.clientX};
  Y:${event.clientY}
  `
}

input.addEventListener('input',_.debounce(onInput,2000))
let inputCountSumbol = 0;

function onInput(event) { 
  inputCountSumbol += 1
  
  output.textContent = `
  Кол-во вызовов onInput: ${inputCountSumbol};
  Значение: ${event.target.value}
  `
}


