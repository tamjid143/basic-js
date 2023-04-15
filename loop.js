// for loop
for (var i = 1; i < 10; i++) {
  console.log("step" + i);
}

// do while / 1st execute loop then check condition
var num = 1000;
do {
  console.log("number" + num);
  num += 1;
} while (num < 1010);

// while / 1st check condition then start loop
var num1 = 1;
while (num1 < 10) {
  console.log(num1);
  num1 += 1;
}

for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

for (var i = 0; i < 6; i++) {
  if (i === 4) {
    console.log(i + "four is skipped");
    continue;
  }
  console.log("i is at" + i);
}
