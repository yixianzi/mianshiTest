const radom = (n) => {
  const array = new Array(n).fill(1).map((t, i) => i + 1);
  while (array[0]) {
    // console.log(array);
    const index = Math.floor(Math.random() * array.length);
    console.log(array[index]);
    array.splice(index, 1);
  }
};

console.log(radom(17));
