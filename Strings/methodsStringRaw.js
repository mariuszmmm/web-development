export const methodsStringRaw = [
  {
    method: "+",
    inputType: "text",
    inputPattern: /^\s*("[^"]*"|\-?\d+)\s*$/,
  },
  {
    method: "length",
    inputType: null,
  },
  {
    method: "trim",
    inputType: null,
  },
  {
    method: "toLowerCase",
    inputType: null,
  },
  {
    method: "toUpperCase",
    inputType: null,
  },
  {
    method: "split",
    inputType: "text",
    inputPattern: /^(("[^"]*")|\-?\d+|)$/,
  },
  {
    method: "slice",
    inputType: "text",
    inputPattern: /^\s*-?\d+(\s*,\s*-?\d+\s*)?$/,
  },
  {
    method: "substring",
    inputType: "text",
    inputPattern: /^\s*\d+(\s*,\s*\d+\s*)?$/,
  },
  {
    method: "repeat",
    inputType: "text",
    inputPattern: /^"?\d+"?$/,
  },
  {
    method: "charAt",
    inputType: "text",
    inputPattern: /^\s*("[^"]*"|\-?\d+)\s*$/,
  },
  {
    method: "includes",
    inputType: "text",
    inputPattern: /^\s*("[^"]*"|\-?\d+)\s*$/,
  },
  {
    method: "startsWith",
    inputType: "text",
    inputPattern: /^\s*("[^"]*"|\-?\d+)\s*$/,
  },
  {
    method: "endsWith",
    inputType: "text",
    inputPattern: /^\s*("[^"]*"|\-?\d+)\s*$/,
  },
  {
    method: "indexOf",
    inputType: "text",
    inputPattern: /^\s*("[^"]*"|\-?\d+)\s*$/,
  },
  {
    method: "lastIndexOf",
    inputType: "text",
    inputPattern: /^\s*("[^"]*"|\-?\d+)\s*$/,
  },
  {
    method: "replace",
    inputType: "text",
    inputPattern: /^\s*((\s*\d+\s*|"\s*[^"]+\s*")\s*,\s*(\s*\d+\s*|"\s*[^"]+\s*"))\s*$/,
  },
  {
    method: "replaceAll",
    inputType: "text",
    inputPattern: /^\s*((\s*\d+\s*|"\s*[^"]+\s*")\s*,\s*(\s*\d+\s*|"\s*[^"]+\s*"))\s*$/,
  },
  {
    method: "localeCompare",
    inputType: "text",
    inputPattern: /^\s*("[^"]*"|\-?\d+)\s*$/,
  },
];