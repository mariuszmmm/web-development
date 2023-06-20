export const methodsNumbers = [
  {
    method: "+",
    methodContents: "number + ?",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "-",
    methodContents: "number - ?",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "*",
    methodContents: "number * ?",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "/",
    methodContents: "number / ?",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "===",
    methodContents: "number === ?",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|NaN)$/,
  },
  {
    method: "toFixed",
    methodContents: "toFixed(?)",
    inputPattern: /^\d+|$/,
  },
  {
    method: "Math.sqrt",
    methodContents: "Math.sqrt( number )",
  },
  {
    method: "isNaN",
    methodContents: "isNaN( number )",
  },
  {
    method: "Number.isNaN",
    methodContents: "Number.isNaN( number )",
  },
  {
    method: "Math.round",
    methodContents: "Math.round( number )",
  },
  {
    method: "Math.ceil",
    methodContents: "Math.ceil( number )",
  },
  {
    method: "Math.floor",
    methodContents: "Math.floor( number )",
  },
  {
    method: "Math.max",
    methodContents: "Math.max( ...numbers )",
  },
  {
    method: "Math.min",
    methodContents: "Math.min( ...numbers )",
  },

  {
    method: "Math.random",
    methodContents: "Math.random()",
  },
  {
    method: "Math.floor(Math.random())",
    methodContents: "Math.floor(Math.random() * ?)",
    inputPattern: /^(?:[2-9]|[1-9]\d+)$/,
  },
  {
    method: "++number",
    methodContents: "++number",
  },
  {
    method: "number++",
    methodContents: "number++",
  },
  {
    method: "--number",
    methodContents: "--number",
  },
  {
    method: "number--",
    methodContents: "number--",
  },
  {
    method: "Number",
    methodContents: "Number( number )",
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