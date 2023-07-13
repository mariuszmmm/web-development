export const methodsArrayRaw = [
  {
    method: "pop",
    inputType: null,
    contents: [],
    spec: "methods",
  },
  {
    method: "shift",
    contents: [],
    inputType: null,
    spec: "methods",
  },
  {
    method: "reverse",
    contents: [],
    inputType: null,
    spec: "methods",
  },
  {
    method: "push",
    contents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "unshift",
    contents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "join",
    contents: [],
    inputType: "text",
    inputPattern: /^$|^("[^"]*"|\-?\d+)$/,
    spec: "methods",
  },
  {
    method: "slice",
    contents: [],
    inputType: "text",
    inputPattern: /^\s*-?\d+(\s*,\s*-?\d+\s*)?$/,
    spec: "methods",
  },
  {
    method: "includes",
    contents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "indexOf",
    contents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "lastIndexOf",
    contents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "map",
    contents: [
      {
        button: "(a=>a*?)",
        content: "a => a * ",
        destiny: "forAll",
      },
      {
        button: "(a=>a**?)",
        content: "a => a ** ",
        destiny: "forAll",
      },
      {
        button: "(a=>a+?)",
        content: "a => a + ",
        destiny: "forAll",
      },
      {
        button: "(a=>a=?)",
        content: "a => a = ",
        destiny: "forAll",
      },
      {
        button: "(a=>a===?)",
        content: "a => a === ",
        destiny: "forAll",
      },
      {
        button: "(a=>({...a,value:?}))",
        content: "a => ({ ...a, value: ",
        destiny: "forObjects",
      },
      {
        button: "(a=>({...a,name:?}))",
        content: "a => ({ ...a, name: ",
        destiny: "forObjects",
      },
      {
        button: "(a=>({...a,over:a.age>?}))",
        content: "a => ({ ...a, over: a.age >  ",
        destiny: "forObjects",
      },
      {
        button: "(a=>([...a,?]))",
        content: "a => ([ ...a, ",
        destiny: "forArrays",
      },
      {
        button: "(a=>([...a,a[0]=?]))",
        content: "a => ([ ...a, a[0] = ",
        destiny: "forArrays",
      },
      {
        button: "(a=>([...a,a[0]+?]))",
        content: "a => ([ ...a, a[0] + ",
        destiny: "forArrays",
      },
      {
        button: "(a=>([a[0],?]))",
        content: "a => ([a[0], ",
        destiny: "forArrays",
      },
      {
        button: "(a=>a[0]===?)",
        content: "a => a[0] === ",
        destiny: "forArrays",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "find",
    contents: [
      {
        button: "(a=>a.length>?)",
        content: "a => a.length > ",
        destiny: "forAll",
      },
      {
        button: "(a=>a>?)",
        content: "a => a > ",
        destiny: "forAll",
      },
      {
        button: "(a=?)",
        content: "a => a = ",
        destiny: "forAll",
      },
      {
        button: "(a=>a===?)",
        content: "a => a === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a%2===?)",
        content: "a => a % 2 === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a.name===?)",
        content: "a => a.name === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age===?)",
        content: "a => a.age === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age>?)",
        content: "a => a.age > ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a[0]===?)",
        content: "a => a[0] === ",
        destiny: "forArrays",
      },
      {
        button: "(a=>a.find(e=>e===?))",
        content: "a => a.find( e => e === ",
        destiny: "forArrays",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "findIndex",
    contents: [
      {
        button: "(a=>a.length>?)",
        content: "a => a.length > ",
        destiny: "forAll",
      },
      {
        button: "(a=>a>?)",
        content: "a => a > ",
        destiny: "forAll",
      },
      {
        button: "(a=?)",
        content: "a => a = ",
        destiny: "forAll",
      },
      {
        button: "(a=>a===?)",
        content: "a => a === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a!==?)",
        content: "a => a !== ",
        destiny: "forAll",
      },
      {
        button: "(a=>a%2===?)",
        content: "a => a % 2 === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a.name===?)",
        content: "a => a.name === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age===?)",
        content: "a => a.age === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age>?)",
        content: "a => a.age > ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a[0]===?)",
        content: "a => a[0] === ",
        destiny: "forArrays",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "filter",
    contents: [
      {
        button: "(a=>a.length>?)",
        content: "a => a.length > ",
        destiny: "forAll",
      },
      {
        button: "(a=>a>?)",
        content: "a => a > ",
        destiny: "forAll",
      },
      {
        button: "(a=?)",
        content: "a => a = ",
        destiny: "forAll",
      },
      {
        button: "(a=>a===?)",
        content: "a => a === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a!==?)",
        content: "a => a !== ",
        destiny: "forAll",
      },
      {
        button: "(a=>a%2===?)",
        content: "a => a % 2 === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a.name===?)",
        content: "a => a.name === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age===?)",
        content: "a => a.age === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age>?)",
        content: "a => a.age > ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a[0]===?)",
        content: "a => a[0] === ",
        destiny: "forArrays",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "some",
    contents: [
      {
        button: "(a=>a.length>?)",
        content: "a => a.length > ",
        destiny: "forAll",
      },
      {
        button: "(a=>a>?)",
        content: "a => a > ",
        destiny: "forAll",
      },
      {
        button: "(a=?)",
        content: "a => a = ",
        destiny: "forAll",
      },
      {
        button: "(a=>a===?)",
        content: "a => a === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a!==?)",
        content: "a => a !== ",
        destiny: "forAll",
      },
      {
        button: "(a=>a%2===?)",
        content: "a => a % 2 === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a.name===?)",
        content: "a => a.name === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age===?)",
        content: "a => a.age === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age>?)",
        content: "a => a.age > ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a[0]===?)",
        content: "a => a[0] === ",
        destiny: "forArrays",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "every",
    contents: [
      {
        button: "(a=>a.length>?)",
        content: "a => a.length > ",
        destiny: "forAll",
      },
      {
        button: "(a=>a>?)",
        content: "a => a > ",
        destiny: "forAll",
      },
      {
        button: "(a=?)",
        content: "a => a = ",
        destiny: "forAll",
      },
      {
        button: "(a=>a===?)",
        content: "a => a === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a!==?)",
        content: "a => a !== ",
        destiny: "forAll",
      },
      {
        button: "(a=>a%2===?)",
        content: "a => a % 2 === ",
        destiny: "forAll",
      },
      {
        button: "(a=>a.name===?)",
        content: "a => a.name === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age===?)",
        content: "a => a.age === ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a.age>?)",
        content: "a => a.age > ",
        destiny: "forObjects",
      },
      {
        button: "(a=>a[0]===?)",
        content: "a => a[0] === ",
        destiny: "forArrays",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
    spec: "methods",
  },
  {
    method: "reduce",
    contents: [
      {
        button: "((acc,cur)=>acc+cur,?)",
        content: "(acc, cur) => acc + cur ",
        destiny: "forAll",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined|)$/,
    spec: "methods",
  },
  {
    method: "sort",
    contents: [
      {
        button: "( )",
        content: "",
        destiny: "forAll",
      },
      {
        button: "((a,b)=>a-b)",
        content: "(a,b) => a - b ",
        destiny: "forNumbers",
      },
      {
        button: "((a,b)=>b-a)",
        content: "(a,b) => b - a ",
        destiny: "forNumbers",
      },
      {
        button: "((a,b)=>a.localeCompare(b))",
        content: "(a,b) => a.localeCompare(b) ",
        destiny: "forStrings",
      },
      {
        button: "((a,b)=>b.localeCompare(a))",
        content: "(a,b) => b.localeCompare(a) ",
        destiny: "forStrings",
      },
      {
        button: "((a,b)=>a.name.localeCompare(b.name))",
        content: "(a,b) => a.name.localeCompare(b.name)",
        destiny: "forObjects",
      },
      {
        button: "((a,b)=>b.name.localeCompare(a.name))",
        content: "(a,b) => b.name.localeCompare(a.name) ",
        destiny: "forObjects",
      },
      {
        button: "((a,b)=>a.age-b.age)",
        content: "(a,b) => a.age - b.age ",
        destiny: "forObjects",
      },
      {
        button: "((a,b)=>b.age-a.age)",
        content: "(a,b) => b.age - a.age ",
        destiny: "forObjects",
      },
      {
        button: "((a,b)=>a[0].localeCompare(b[0]))",
        content: "(a,b) => a[0].localeCompare(b[0]) ",
        destiny: "forArrays",
      },
      {
        button: "((a,b)=>b[0].localeCompare(a[0]))",
        content: "(a,b) => b[0].localeCompare(a[0]) ",
        destiny: "forArrays",
      },
    ],
    inputType: null,
    spec: "methods",
  },







  
  {
    method: "[...array]",
    contents: [
      {
        button: null,
        content: "[...array]",
        destiny: "forAll",
      },
    ],
    inputType: null,
    spec: "spreadSyntax",
  },
  {
    method: "[...array, ...exampleArray]",
    contents: [
      {
        button: null,
        content: "[...array, ...exampleArray]",
        destiny: "forAll",
      },
    ],
    inputType: null,
    spec: "spreadSyntax",
  },
  {
    method: "[...array, element]",
    contents: [
      {
        button: "[...array, 100]",
        content: "[...array, 100]",
        destiny: "forAll",
      },
      {
        button: "[...array, -20]",
        content: "[...array, -20]",
        destiny: "forAll",
      },
      {
        button: "[...array, 'text']",
        content: "[...array, 'text']",
        destiny: "forAll",
      },
      {
        button: "[...array, [1, 2, 3]]",
        content: "[...array, [ 1, 2, 3]]",
        destiny: "forAll",
      },
      {
        button: "[...array, { city: 'N/A' }]",
        content: "[...array, { city: 'N/A' }]",
        destiny: "forAll",
      },
    ],
    inputType: null,
    spec: "spreadSyntax",
  },
];