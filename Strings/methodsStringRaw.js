export const methodsStringRaw = [
  {
    method: "toString",
    methodContents: [],
    inputType: null,
  },
  {
    method: "trim",
    methodContents: [],
    inputType: null,
  },
  {
    method: "toLowerCase",
    methodContents: [],
    inputType: null,
  },
  {
    method: "toUpperCase",
    methodContents: [],
    inputType: null,
  },
  {
    method: "concat",
    methodContents: [
      {
        button: "(' ',?)",
        content: "' ', ",
        destiny: "forAll",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+)$/,
  },
  {
    method: "repeat",
    methodContents: [],
    inputType: "text",
    inputPattern: /^\d+$/,
  },
  {
    method: "charAt",
    methodContents: [
      {
        button: "( )",
        content: "",
        destiny: "forNumbers",
      },
      {
        button: "(a.length-?)",
        content: "a.length - ",
        destiny: "forNumbers",
      },
    ],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+)$/,
  },
  {
    method: "includes",
    methodContents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+)$/,
  },
  {
    method: "startsWith",
    methodContents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+)$/,
  },
  {
    method: "endsWith",
    methodContents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+)$/,
  },
  {
    method: "indexOf",
    methodContents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+)$/,
  },
  {
    method: "lastIndexOf",
    methodContents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+)$/,
  },
  {
    method: "slice",
    methodContents: [],
    inputType: "text",
    inputPattern: /^\s*-?\d+(\s*,\s*-?\d+\s*)?$/,
  },
  {
    method: "substring",
    methodContents: [],
    inputType: "text",
    inputPattern: /^\s*\d+(\s*,\s*\d+\s*)?$/,
  },
  {
    method: "replaceAll",
    methodContents: [],
    inputType: "text",
    inputPattern: /^\s*("[^"]*"\s*,\s*"[^"]*"\s*){0,1}$/,
  },
  {
    method: "replace",
    methodContents: [],
    inputType: "text",
    inputPattern: /^\s*("[^"]*"\s*,\s*"[^"]*"\s*){0,1}$/,
  },
  {
    method: "localeCompare",
    methodContents: [],
    inputType: "text",
    inputPattern: /^("[^"]*"|\-?\d+)$/,
  },


  // {
  //   method: "pop",
  //   methodContents: [],
  //   inputType: null,
  // },
  // {
  //   method: "shift",
  //   methodContents: [],
  //   inputType: null,
  // },
  // {
  //   method: "reverse",
  //   methodContents: [],
  //   inputType: null,
  // },
  // {
  //   method: "push",
  //   methodContents: [],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "unshift",
  //   methodContents: [],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "join",
  //   methodContents: [],
  //   inputType: "text",
  //   inputPattern: /^$|^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "slice",
  //   methodContents: [],
  //   inputType: "text",
  //   inputPattern: /^\s*-?\d+(\s*,\s*-?\d+\s*)?$/,
  // },
  // {
  //   method: "includes",
  //   methodContents: [],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "indexOf",
  //   methodContents: [],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "lastIndexOf",
  //   methodContents: [],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "map",
  //   methodContents: [
  //     {
  //       button: "(a=>a*?)",
  //       content: "a => a * ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a**?)",
  //       content: "a => a ** ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a+?)",
  //       content: "a => a + ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a=?)",
  //       content: "a => a = ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a===?)",
  //       content: "a => a === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>({...a,value:?}))",
  //       content: "a => ({ ...a, value: ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>({...a,name:?}))",
  //       content: "a => ({ ...a, name: ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>({...a,over:a.age>?}))",
  //       content: "a => ({ ...a, over: a.age >  ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>([...a,?]))",
  //       content: "a => ([ ...a, ",
  //       destiny: "forArrays",
  //     },
  //     {
  //       button: "(a=>([...a,a[0]=?]))",
  //       content: "a => ([ ...a, a[0] = ",
  //       destiny: "forArrays",
  //     },
  //     {
  //       button: "(a=>([...a,a[0]+?]))",
  //       content: "a => ([ ...a, a[0] + ",
  //       destiny: "forArrays",
  //     },
  //     {
  //       button: "(a=>([a[0],?]))",
  //       content: "a => ([a[0], ",
  //       destiny: "forArrays",
  //     },
  //     {
  //       button: "(a=>a[0]===?)",
  //       content: "a => a[0] === ",
  //       destiny: "forArrays",
  //     },
  //   ],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "find",
  //   methodContents: [
  //     {
  //       button: "(a=>a.length>?)",
  //       content: "a => a.length > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a>?)",
  //       content: "a => a > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=?)",
  //       content: "a => a = ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a===?)",
  //       content: "a => a === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a%2===?)",
  //       content: "a => a % 2 === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a.name===?)",
  //       content: "a => a.name === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age===?)",
  //       content: "a => a.age === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age>?)",
  //       content: "a => a.age > ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a[0]===?)",
  //       content: "a => a[0] === ",
  //       destiny: "forArrays",
  //     },
  //     {
  //       button: "(a=>a.find(e=>e===?))",
  //       content: "a => a.find( e => e === ",
  //       destiny: "forArrays",
  //     },
  //   ],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "findIndex",
  //   methodContents: [
  //     {
  //       button: "(a=>a.length>?)",
  //       content: "a => a.length > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a>?)",
  //       content: "a => a > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=?)",
  //       content: "a => a = ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a===?)",
  //       content: "a => a === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a!==?)",
  //       content: "a => a !== ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a%2===?)",
  //       content: "a => a % 2 === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a.name===?)",
  //       content: "a => a.name === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age===?)",
  //       content: "a => a.age === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age>?)",
  //       content: "a => a.age > ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a[0]===?)",
  //       content: "a => a[0] === ",
  //       destiny: "forArrays",
  //     },
  //   ],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "filter",
  //   methodContents: [
  //     {
  //       button: "(a=>a.length>?)",
  //       content: "a => a.length > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a>?)",
  //       content: "a => a > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=?)",
  //       content: "a => a = ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a===?)",
  //       content: "a => a === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a!==?)",
  //       content: "a => a !== ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a%2===?)",
  //       content: "a => a % 2 === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a.name===?)",
  //       content: "a => a.name === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age===?)",
  //       content: "a => a.age === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age>?)",
  //       content: "a => a.age > ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a[0]===?)",
  //       content: "a => a[0] === ",
  //       destiny: "forArrays",
  //     },
  //   ],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "some",
  //   methodContents: [
  //     {
  //       button: "(a=>a.length>?)",
  //       content: "a => a.length > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a>?)",
  //       content: "a => a > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=?)",
  //       content: "a => a = ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a===?)",
  //       content: "a => a === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a!==?)",
  //       content: "a => a !== ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a%2===?)",
  //       content: "a => a % 2 === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a.name===?)",
  //       content: "a => a.name === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age===?)",
  //       content: "a => a.age === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age>?)",
  //       content: "a => a.age > ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a[0]===?)",
  //       content: "a => a[0] === ",
  //       destiny: "forArrays",
  //     },
  //   ],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "every",
  //   methodContents: [
  //     {
  //       button: "(a=>a.length>?)",
  //       content: "a => a.length > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a>?)",
  //       content: "a => a > ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=?)",
  //       content: "a => a = ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a===?)",
  //       content: "a => a === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a!==?)",
  //       content: "a => a !== ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a%2===?)",
  //       content: "a => a % 2 === ",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "(a=>a.name===?)",
  //       content: "a => a.name === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age===?)",
  //       content: "a => a.age === ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a.age>?)",
  //       content: "a => a.age > ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "(a=>a[0]===?)",
  //       content: "a => a[0] === ",
  //       destiny: "forArrays",
  //     },
  //   ],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+)$/,
  // },
  // {
  //   method: "reduce",
  //   methodContents: [
  //     {
  //       button: "((acc,cur)=>acc+cur,?)",
  //       content: "(acc, cur) => acc + cur ",
  //       destiny: "forAll",
  //     },
  //   ],
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|\-?\d+|)$/,
  // },
  // {
  //   method: "sort",
  //   methodContents: [
  //     {
  //       button: "( )",
  //       content: "",
  //       destiny: "forAll",
  //     },
  //     {
  //       button: "((a,b)=>a-b)",
  //       content: "(a,b) => a - b ",
  //       destiny: "forNumbers",
  //     },
  //     {
  //       button: "((a,b)=>b-a)",
  //       content: "(a,b) => b - a ",
  //       destiny: "forNumbers",
  //     },
  //     {
  //       button: "((a,b)=>a.localeCompare(b))",
  //       content: "(a,b) => a.localeCompare(b) ",
  //       destiny: "forStrings",
  //     },
  //     {
  //       button: "((a,b)=>b.localeCompare(a))",
  //       content: "(a,b) => b.localeCompare(a) ",
  //       destiny: "forStrings",
  //     },
  //     {
  //       button: "((a,b)=>a.name.localeCompare(b.name))",
  //       content: "(a,b) => a.name.localeCompare(b.name)",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "((a,b)=>b.name.localeCompare(a.name))",
  //       content: "(a,b) => b.name.localeCompare(a.name) ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "((a,b)=>a.age-b.age)",
  //       content: "(a,b) => a.age - b.age ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "((a,b)=>b.age-a.age)",
  //       content: "(a,b) => b.age - a.age ",
  //       destiny: "forObjects",
  //     },
  //     {
  //       button: "((a,b)=>a[0].localeCompare(b[0]))",
  //       content: "(a,b) => a[0].localeCompare(b[0]) ",
  //       destiny: "forArrays",
  //     },
  //     {
  //       button: "((a,b)=>b[0].localeCompare(a[0]))",
  //       content: "(a,b) => b[0].localeCompare(a[0]) ",
  //       destiny: "forArrays",
  //     },
  //   ],
  //   inputType: null,
  // },
];