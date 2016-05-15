var NUN_MAX = 10,
    isSimple;
    
for (i = 2; i <= NUN_MAX; i++) {
  isSimple = true;
  for (n = i - 1; n > 1; n--) {
    x = i % n;
    if (x === 0) {
      isSimple = false;
      break;  
    }
  }
  if (isSimple) {
  console.log(i);
  }
}

// Второй вариант такой же самый просто числа выводятся не по одному, а все сразу.
var NUN_MAX = 10,
    isSimple
    arr = [];
    
for (i = 2; i <= NUN_MAX; i++) {
  isSimple = true;
  for (n = i - 1; n > 1; n--) {
    x = i % n;
    if (x === 0) {
      isSimple = false;
      break;  
    }
  }
  if (isSimple) {
  arr.push(i);
  }
}

console.log("Простые числв в интервале от 2 до " + NUN_MAX + " это: " + arr + ".");