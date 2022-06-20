const keys = { w: false, a: false, s: false, d: false }; //переменная указывает какие кнопки нажаты сейчас
function keyDown(e) {
  console.log(e);
  //если нажали какую-то кнопку запишем в переменную это
  if (e.code === 'KeyW') {
    keys.w = true;
  } else if (e.code === 'KeyA') {
    keys.a = true;
  } else if (e.code === 'KeyS') {
    keys.s = true;
  } else if (e.code === 'KeyD') {
    keys.d = true;
  }
}
function keyUp(e) {
  //если отпустили кукую-то кнопку запишем в переменную это
  if (e.code === 'KeyW') {
    keys.w = false;
  } else if (e.code === 'KeyA') {
    keys.a = false;
  } else if (e.code === 'KeyS') {
    keys.s = false;
  } else if (e.code === 'KeyD') {
    keys.d = false;
  }
}

export { keyDown, keyUp, keys };
