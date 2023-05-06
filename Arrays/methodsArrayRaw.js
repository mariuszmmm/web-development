export const methodsArrayRaw = [
   {
      method: "pop",
      methodButtons: [],
      inputType: null,
   },
   {
      method: "shift",
      methodButtons: [],
      inputType: null,
   },
   {
      method: "reverse",
      methodButtons: [],
      inputType: null,
   },
   {
      method: "sort",
      methodButtons: ["( )", "(a,b)=>a-b", "(a,b)=>b-a"],
      inputType: null,
   },
   {
      method: "push",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "unshift",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "map",
      methodButtons: ["a*?", "a**?", "a+?", "a=?", "a===?"],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "find",
      methodButtons: ["a.length>?", "a>?", "a=?", "a===?", "a!==?", "a%2===?"],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "findIndex",
      methodButtons: ["a.length>?", "a>?", "a=?", "a===?", "a!==?", "a%2===?"],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "filter",
      methodButtons: ["a.length>?", "a>?", "a=?", "a===?", "a!==?", "a%2===?"],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "some",
      methodButtons: ["a.length>?", "a>?", "a=?", "a===?", "a!==?", "a%2===?"],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "every",
      methodButtons: ["a.length>?", "a>?", "a=?", "a===?", "a!==?", "a%2===?"],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "includes",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "slice",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^-?\d+(,-?\d+){0,1}$/,
   },
   {
      method: "indexOf",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "lastIndexOf",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
];