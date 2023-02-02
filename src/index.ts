/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */

function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

/**
 * Add two numbers
 * @param a first number
 * @param b second number
 */

export async function addNumbers(a: number, b: number) {
  await timeout(500);
  return a + b;
}

/* Run the program */
// ;(async () => {
//   console.log(await addNumbers(3, 4))
// })()

// Typing a function
function subtractNumbers(a: number, b: number): number {
  return a - b;
}

// Optional properties
const myCar = {
  make: "Subaru",
  model: "WRX",
  year: 2018,
};

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}): string {
  let returnStr = `${car.year} ${car.make} ${car.model}`;

  // We need a type guard in case chargeVoltage is omitted
  if (typeof car.chargeVoltage !== "undefined") {
    returnStr += `${car.chargeVoltage}v`;
  }

  return returnStr;
}

printCar(myCar);

// Index signatures
// Given a dictionary type object, a contact phone list in this case,
const phoneNumbers = {
  home: {
    country: "+1",
    area: "210",
    number: "555-5678",
  },
  mobile: {
    country: "+1",
    area: "210",
    number: "563-1224",
  },
  office: {
    country: "+1",
    area: "210",
    number: "532-3131",
  },
};

//  you can type the properties in this way
// k used to signify "key" but the label is completely arbitrary
type phones = {
  [k: string]:
    | {
        country: string;
        area: string;
        number: string;
      }
    | undefined; // Nice to add
};
