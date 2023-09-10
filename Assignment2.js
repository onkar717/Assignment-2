let dayNumber = 9;
let dayType;

switch (dayNumber) {
  case 1:
  case 7:
    dayType = "Weekend";
    break;
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    dayType = "Weekday";
    break;
  default:
    dayType = "Invalid day number";
}

console.log(`Day ${dayNumber} is a ${dayType}.`);
