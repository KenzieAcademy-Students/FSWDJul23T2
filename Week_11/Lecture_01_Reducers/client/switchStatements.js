let dayOfChristmas = 1;

function onTheNthDayOfChristmas(dayNum) {
  console.log("On the " + dayNum + " day of Christmas");
  console.log("my true love gave to me");
  switch (dayNum) {
    case 3:
      console.log("Three French hens");
    case 2:
      console.log("Two turtle doves");
    case 1:
      console.log("A partridge in a pear tree");
  }
  console.log("\n\n");
}

for (let i = 1; i < 3; i++) {
  onTheNthDayOfChristmas(i);
}
