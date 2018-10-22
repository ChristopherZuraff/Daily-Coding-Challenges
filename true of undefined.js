function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      console.log(num);
    }
  }

  console.log("undefined");
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
