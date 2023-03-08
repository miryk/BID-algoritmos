// Config and swap
console.log(
  "Define myNumber in 42, myName with a name. Now swap myNumber and myName."
);
let myNumber = 42;
let myName = "Maria";
let aux = myNumber;
myNumber = myName;
myName = aux;
console.log("myName", myName);
console.log("myNumber", myNumber);

// Print from -53 to 1066
console.log("Print from -53 to 1066 with the FOR loop.")
for ( let i=-53; i<=1066; i++) {
  console.log(i);
}

// Don't worry, be happy
console.log("Create beCheerful(). Inside it console.log 'Good day' 98times")
let beCheerful = () => {
  for (let i = 1; i < 99; i++ ) {
    console.log("Good day! x" + i)
  }
}
beCheerful();

// Multiple of 3, but not all
console.log("Use FOR loop to print multiple of 3 from -300 to 0. But omit -3 and -6.")
for (let i = -300; i <= 0 ; i++ ) {
  if (i % 3 === 0) {
    if (!(i === -3 || i === -6)) {
      console.log(i);
    }
  }
}

// Print integers with while loop
console.log("Use the while loop to print form 2000 to 5280.");
let i = 2000;
while (i <= 5280) {
  console.log(i);
  i++;
}

// Tell your birthday
console.log(
  "If two number represent your birth day and month, in whichever order, print 'How did you know?' or 'An ordinary day'."
);
let number = 22;
if (number == 23 || number == 32) {
  console.log("How did you know?");
} else {
  console.log("Any day...");
}

// Leap year
console.log(
  "Write a function that determines whether a given year is a leap year."
);
const isLeapYear = (year) => {
  if ((year % 4 === 0 && !(year % 100 === 0)) || year % 400 == 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year");
  }
};
isLeapYear(2018);
isLeapYear(2020);

// Print and count
console.log("Print all the integer multiple of 5 from 512 to 4096.");
let counter = 0;
for (let i = 512; i <= 4096; i++) {
  if (i % 5 === 0) {
    counter++;
    console.log(i, counter);
  }
}
console.log("Multiple counter: ", counter);

// Multiple of 6
console.log("Print all the multiple of 6 up to 60.000 using while loop.");
i = 0;
while (i <= 60000) {
  if (i % 6 === 0) {
    console.log(i);
  }
  i++;
}

// Counting, the Dojo way
console.log(
  "Print the integers from 1 to 100. If it is divisible by 5, print 'encoding'. It it's for 100 it also prints 'Dojo'."
);
for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log("encoding Dojo");
  } else if (i % 5 === 0) {
    console.log("encoding");
  } else {
    console.log(i);
  }
}

// What do you know?
console.log(
  "Create a function that receives an input parameter. Please console.log this value."
);
const knowledge = (incoming) => {
  console.log(incoming);
};
knowledge("2024 is a leap year");

// That's huge
console.log(
  "Add odd integers form -300.000 to 300.000 and print the final sum. Is therea a shortcut?"
);
let acc = 0;
for (let i = -300000; i <= 300000; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    acc += i;
  }
}
console.log("The sum is: ", acc);
// shortcut
let help = 0;
for (let i=0; i<=300000; i++) {
  if (i%2 !== 0) {
    help += i;
  }
}
console.log("The acumulative is: ",(help + (-help)));

// Countdown every 4
console.log(
  "Record positive numbers starting 2016, counting down every 4 numbers."
);
i = 2016;
while (i > 0) {
  console.log(i);
  i -= 4;
}

// Flexible countdown
console.log("With he countdown given lowNum, highNum, mult. Print multiples of mult from highNum to lowNum");
const countdown = (lowNum, highNum, multiple) => {
  for (let i = highNum; i > lowNum; i--) {
    if (i%multiple == 0) {
      console.log(i)
    }
  }
}
countdown(2, 9, 3);

// Final countdown
console.log("Countdown with four parameters");
const finalCountdown = (param1, param2, param3, param4) => {
  for (let i= param2; i <= param3; i++) {
    if ( i%param1 === 0) {
      if (i !== param4) {
        console.log(i);
      }
    }
  }
}
finalCountdown(3,5,17,9);