export const methodsArrayRaw = [
   {
      method: "pop",
      methodContents: [],
      inputType: null,
   },
   {
      method: "shift",
      methodContents: [],
      inputType: null,
   },
   {
      method: "reverse",
      methodContents: [],
      inputType: null,
    },
   {
      method: "includes",
      methodContents: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "slice",
      methodContents: [],
      inputType: "text",
      inputPattern: /^-?\d+(,-?\d+){0,1}$/,
   },
   {
      method: "indexOf",
      methodContents: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "lastIndexOf",
      methodContents: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },   
   {
      method: "join",
      methodContents: [],
      inputType: "text",
      inputPattern: /^$|^("[^"]*"|\-?\d+)$/,
   },  
   {
      method: "push",
      methodContents: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "unshift",
      methodContents: [],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "map",
      methodContents: [
        {
          button: "(a=>a*?)", 
          content: "a => a * ",
        },
        {
          button: "(a=>a**?)",
          content: "a => a ** ",
        },
        {
          button: "(a=>a+?)",
          content: "a => a + ",
        },
        {
          button: "(a=>a=?)",
          content: "a => a = ",
        },
        {
          button: "(a=>a===?)",
          content: "a => a === ",
        },
        {
          button: "(a=>({...a,country:?}))",
          content: "a => ({ ...a, country: ",
        },
      ],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "find",
      methodContents: [
        {
          button: "(a=>a.length>?)", 
          content: "a => a.length > ",
        },
        {
          button: "(a=>a>?)",
          content: "a => a > ",
        },
        {
          button: "(a=?)",
          content: "a => a = ",
        },
        {
          button: "(a=>a===?)",
          content: "a => a === ",
        },
        {
          button: "(a%2===?)",
          content: "a % 2 === ",
        },
        {
          button: "(a=>a.name===?)",
          content: "a => a.name === ",
        },
        {
          button: "(a=>a[0]===?)",
          content: "a => a[0] === ",
        },        
      ],      
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "findIndex",
      methodContents: [
        {
          button: "(a=>a.length>?)",
          content: "a => a.length > ",
        },
        {
          button: "(a=>a>?)",
          content: "a => a > ",
        },
        {
          button: "(a=?)",
          content: "a => a = ",
        },
        {
          button: "(a=>a===?)",
          content: "a => a === ",
        },
        {
          button: "(a=>a!==?)",
          content: "a => a !== ",
        },
        {
          button: "(a%2===?)",
          content: "a % 2 === ",
        },
      ],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "filter",
      methodContents: [
        {
          button: "(a=>a.length>?)",
          content: "a => a.length > ",
        },
        {
          button: "(a=>a>?)",
          content: "a => a > ",
        },
        {
          button: "(a=?)",
          content: "a => a = ",
        },
        {
          button: "(a=>a===?)",
          content: "a => a === ",
        },
        {
          button: "(a=>a!==?)",
          content: "a => a !== ",
        },
        {
          button: "(a%2===?)",
          content: "a % 2 === ",
        },
      ],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "some",
      methodContents: [
        {
          button: "(a=>a.length>?)",
          content: "a => a.length > ",
        },
        {
          button: "(a=>a>?)",
          content: "a => a > ",
        },
        {
          button: "(a=?)",
          content: "a => a = ",
        },
        {
          button: "(a=>a===?)",
          content: "a => a === ",
        },
        {
          button: "(a=>a!==?)",
          content: "a => a !== ",
        },
        {
          button: "(a%2===?)",
          content: "a % 2 === ",
        },
      ],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "every",
      methodContents: [
        {
          button: "(a=>a.length>?)",
          content: "a => a.length > ",
        },
        {
          button: "(a=>a>?)",
          content: "a => a > ",
        },
        {
          button: "(a=?)",
          content: "a => a = ",
        },
        {
          button: "(a=>a===?)",
          content: "a => a === ",
        },
        {
          button: "(a=>a!==?)",
          content: "a => a !== ",
        },
        {
          button: "(a%2===?)",
          content: "a % 2 === ",
        },
      ],
      inputType: "text",
      inputPattern: /^("[^"]*"|\-?\d+|null|false|true|NaN|undefined)$/,
   },
   {
      method: "sort",
        methodContents: [
          {
            button: "( )",
            content: "",
          },
          {
            button: "((a,b)=>a-b)",
            content: "(a,b) => a - b ",
          },
          {
            button: "((a,b)=>b-a)",
            content: "(a,b) => b - a "
          },
          {
            button: "((a,b)=>a.localeCompare(b))",
            content: "(a,b) => a.localeCompare(b) ",
          },
          {
            button: "((a,b)=>b.localeCompare(a))",
            content: "(a,b) => b.localeCompare(a) ",
          },
          {
            button: "((a,b)=>a.name.localeCompare(b.name))",
            content:"(a,b) => a.name.localeCompare(b.name)",
          },
          {
            button: "((a,b)=>b.name.localeCompare(a.name))",
            content: "(a,b) => b.name.localeCompare(a.name) ",
          },
          {
            button:  "((a,b)=>a.age-b.age)",
            content:  "(a,b) => a.age - b.age ",
          },
          {
            button: "((a,b)=>b.age-a.age)",
            content: "(a,b) => b.age - a.age ",
          },
          {
            button:  "((a,b)=>a[0].localeCompare(b[0]))",
            content: "(a,b) => a[0].localeCompare(b[0]) ",
          },
          {
            button: "((a,b)=>b[0].localeCompare(a[0]))",
            content: "(a,b) => b[0].localeCompare(a[0]) ",
          },
        ],
      inputType: null,
   },
];