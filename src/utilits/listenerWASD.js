const keys = { w: false, a: false, s: false, d: false }; //переменная указывает какие кнопки нажаты сейчас
function keyDown(e) {
  //если нажали какую-то кнопку запишем в переменную это
  if (e.keyCode === 38 || e.keyCode === 87) {
    keys.w = true;
  } else if (e.keyCode === 65 || e.keyCode === 37) {
    keys.a = true;
  } else if (e.keyCode === 83 || e.keyCode === 40) {
    keys.s = true;
  } else if (e.keyCode === 68 || e.keyCode === 39) {
    keys.d = true;
  }
}
function keyUp(e) {
  //если отпустили кукую-то кнопку запишем в переменную это
  if (e.keyCode === 38 || e.keyCode === 87) {
    keys.w = false;
  } else if (e.keyCode === 65 || e.keyCode === 37) {
    keys.a = false;
  } else if (e.keyCode === 83 || e.keyCode === 40) {
    keys.s = false;
  } else if (e.keyCode === 68 || e.keyCode === 39) {
    keys.d = false;
  }
}

export { keyDown, keyUp, keys };
