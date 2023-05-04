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
      method: "push",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|Nan|undefined)$/,
   },
   {
      method: "unshift",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|Nan|undefined)$/,
   },
   {
      method: "map",
      methodButtons: ["a*?", "a**?", "a+?", "a=?", "a===?"],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|Nan|undefined)$/,
   },
   {
      method: "filter",
      methodButtons: ["a.length>?", "a>?", "a=?", "a===?", "a!==?"],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|Nan|undefined)$/,
   },
   {
      method: "slice",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^-?\d+(,-?\d+){0,2}$/,
   },
   {
      method: "indexOf",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|Nan|undefined)$/,
   },
   {
      method: "lastIndexOf",
      methodButtons: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|Nan|undefined)$/,
   },
];