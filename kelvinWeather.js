// constant variable kelvin is set at 293
const kelvin = 0;
// Converts kelvin to celsius
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
// rounds of fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
