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

// Array types
const fileExtensions = ["js", "ts"]; // type string[], inference gets this right

// Tuple types, (positional arrays where each element has a specific type)

// let carTuple = [2018, "Subaru", "WRX"]
// Inference types this as (string | number)[]
// However this is not ideal since we always want the first element to be a number.
// We can explicitly type this order
let carTuple: [number, string, string] = [2018, "Subaru", "WRX"];

// That being said, mutating the array won't be held to this type constraint since TS can only check this at assignment


// JSON Exercise

// @errors: 2578
type JSONPrimitive = number | string | boolean | null
type JSONObject = {
    [k: string]: JSONValue
}
type JSONArray = JSONValue[]
type JSONValue = JSONObject | JSONArray | JSONPrimitive

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) {}

// POSITIVE test cases (must pass)
isJSON("hello")
isJSON([4, 8, 15, 16, 23, 42])
isJSON({ greeting: "hello" })
isJSON(false)
isJSON(true)
isJSON(null)
isJSON({ a: { b: [2, 3, "foo"] } })

// NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => "")
// @ts-expect-error
isJSON(class {})

isJSON(undefined)
// @ts-expect-error
isJSON(BigInt(143))
// @ts-expect-error
isJSON(isJSON)