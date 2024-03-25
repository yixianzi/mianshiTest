function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

let a = setTimeout(() => {}, 1);
// clearTimeout(a);
console.log(a);
