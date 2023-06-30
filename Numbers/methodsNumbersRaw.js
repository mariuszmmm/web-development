export const methodsNumbers = [
  {
    method: "+",
    methodContents: "number + ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|-Infinity|NaN)$/,
  },
  {
    method: "-",
    methodContents: "number - ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|-Infinity|NaN)$/,
  },
  {
    method: "*",
    methodContents: "number * ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|-Infinity|NaN)$/,
  },
  {
    method: "/",
    methodContents: "number / ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|-Infinity|NaN)$/,
  },
  {
    method: "===",
    methodContents: "number === ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|-Infinity|NaN)$/,
  },
  {
    method: "=",
    methodContents: "number = ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|-Infinity|NaN)$/,
  },
  {
    method: "+=",
    methodContents: "number += ?",
    inputType: "text",
    inputPattern: /^("[^"]*"|-?\d+(?:[.]\d+)?|Infinity|-Infinity|NaN)$/,
  },
  {
    method: "toFixed",
    methodContents: "number.toFixed(?)",
    inputType: "text",
    inputPattern: /^(?:\d|[1-9]\d|100|)$/,
  },
  {
    method: "toString",
    methodContents: "number.toString( )",
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
    method: "Number",
    methodContents: "Number(number)",
    inputType: null,
  },
  {
    method: "+number",
    methodContents: "+number",
    inputType: null,
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
    method: "Math.min",
    methodContents: "Math.min(...numbers)",
    inputType: null,
  },
  {
    method: "Math.max",
    methodContents: "Math.max(...numbers)",
    inputType: null,
  },
  {
    method: "Math.sqrt",
    methodContents: "Math.sqrt(number)",
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
    method: "Math.random",
    methodContents: "Math.random( )",
    inputType: null,
  },
  {
    method: "Math.floor(Math.random())",
    methodContents: "Math.floor(Math.random() * ?)",
    inputType: "text",
    inputPattern: /^(?:[2-9]|[1-9]\d+)$/,
  },
];