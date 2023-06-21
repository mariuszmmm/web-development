export const methodsNumbers = [
  {
    method: "+",
    methodContents: "number + ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "-",
    methodContents: "number - ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "*",
    methodContents: "number * ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "/",
    methodContents: "number / ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "===",
    methodContents: "number === ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "toFixed",
    methodContents: "toFixed(?)",
    inputType: "text",
    inputPattern: /^(?:\d|[1-9]\d|100|)$/,
  },
  {
    method: "Math.sqrt",
    methodContents: "Math.sqrt(number)",
    inputType: null,
  },
  {
    method: "isNaN",
    methodContents: "isNaN(number)",
    inputType: null,
  },
  {
    method: "Number.isNaN",
    methodContents: "Number.isNaN(number)",
    inputType: null,
  },
  {
    method: "Math.round",
    methodContents: "Math.round(number)",
    inputType: null,
  },
  {
    method: "Math.ceil",
    methodContents: "Math.ceil(number)",
    inputType: null,
  },
  {
    method: "Math.floor",
    methodContents: "Math.floor(number)",
    inputType: null,
  },
  {
    method: "Math.max",
    methodContents: "Math.max(...numbers)",
    inputType: null,
  },
  {
    method: "Math.min",
    methodContents: "Math.min(...numbers)",
    inputType: null,
  },

  {
    method: "Math.random",
    methodContents: "Math.random()",
    inputType: null,
  },
  {
    method: "Math.floor(Math.random())",
    methodContents: "Math.floor(Math.random() * ?)",
    inputType: "text",
    inputPattern: /^(?:[2-9]|[1-9]\d+)$/,
  },
  {
    method: "++number",
    methodContents: "++number",
    inputType: null,
  },
  {
    method: "number++",
    methodContents: "number++",
    inputType: null,
  },
  {
    method: "--number",
    methodContents: "--number",
    inputType: null,
  },
  {
    method: "number--",
    methodContents: "number--",
    inputType: null,
  },
  {
    method: "Number",
    methodContents: "Number(number)",
    inputType: null,
  },
  {
    method: "toString",
    methodContents: "number.toString()",
    inputType: null,
  },


  // {
  //   method: "+",
  //   inputType: null,
  // },


  //   test

  // {
  //   method: "trim",
  //   inputType: null,
  // },
  // {
  //   method: "toLowerCase",
  //   inputType: null,
  // },
  // {
  //   method: "toUpperCase",
  //   inputType: null,
  // },
  // {
  //   method: "split",
  //   inputType: "text",
  //   inputPattern: /^(("[^"]*")|\-?\d+|)$/,
  // },
  // {
  //   method: "slice",
  //   inputType: "text",
  //   inputPattern: /^\s*-?\d+(\s*,\s*-?\d+\s*)?$/,
  // },
  // {
  //   method: "substring",
  //   inputType: "text",
  //   inputPattern: /^\s*\d+(\s*,\s*\d+\s*)?$/,
  // },
  // {
  //   method: "repeat",
  //   inputType: "text",
  //   inputPattern: /^"?\d+"?$/,
  // },
  // {
  //   method: "charAt",
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  // },
  // {
  //   method: "includes",
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  // },
  // {
  //   method: "startsWith",
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  // },
  // {
  //   method: "endsWith",
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  // },
  // {
  //   method: "indexOf",
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  // },
  // {
  //   method: "lastIndexOf",
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  // },
  // {
  //   method: "replace",
  //   inputType: "text",
  //   inputPattern: /^\s*((\s*\d+\s*|"\s*[^"]+\s*")\s*,\s*(\s*\d+\s*|"\s*[^"]+\s*"))\s*$/,
  // },
  // {
  //   method: "replaceAll",
  //   inputType: "text",
  //   inputPattern: /^\s*((\s*\d+\s*|"\s*[^"]+\s*")\s*,\s*(\s*\d+\s*|"\s*[^"]+\s*"))\s*$/,
  // },
  // {
  //   method: "localeCompare",
  //   inputType: "text",
  //   inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  // },
];