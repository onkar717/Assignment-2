// Question.1 = Demonstrate the use of Switch Case 
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


// Question.2 = Take 5 Subject marks the percentage and Provide grade based on that
// Marks out of 100

let English = 85;
let Hindi = 90;
let Science = 95;
let Maths = 99;
let SocialScience = 98;
const Total_Marks = English + Hindi + Science + Maths + SocialScience;
const Out_of = 500;

console.log(`The Total Marks Gain By Student ${Total_Marks} Out of ${Out_of} and Total Percentage is ${Total_Marks*100/500}`);