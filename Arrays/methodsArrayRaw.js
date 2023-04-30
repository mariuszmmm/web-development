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
      inputPattern: "^(?!\n)(^\"[^\"]*\"$|^[^\"\n].*[^\"\n]$|^([^\"\n])|)$",
   },
   {
      method: "unshift",
      methodButtons: [],
      inputType: "text",
      inputPattern: "^(?!\n)(^\"[^\"]*\"$|^[^\"\n].*[^\"\n]$|^([^\"\n])|)$",
   },
   {
      method: "map",
      methodButtons: ["a*?", "a**?", "a+?", "a=?", "a===?"],
      inputType: "text",
      inputPattern: "^(?!\n)(^\"[^\"]*\"$|^[^\"\n].*[^\"\n]$|^([^\"\n])|)$",
   },
   {
      method: "filter",
      methodButtons: ["a.length>?", "a>?", "a=?", "a===?", "a!==?"],
      inputType: "text",
      inputPattern: "^(?!\n)(^\"[^\"]*\"$|^[^\"\n].*[^\"\n]$|^([^\"\n])|)$",
   },
   {
      method: "slice",
      methodButtons: [],
      inputType: "text",
      inputPattern: "^\\s*-?\\d+\\s*(,\\s*-?\\d+)?\\s*$",
   },
   {
      method: "indexOf",
      methodButtons: [],
      inputType: "text",
      inputPattern: "^(?!\n)(^\"[^\"]*\"$|^[^\"\n].*[^\"\n]$|^([^\"\n])|)$",
   },
   {
      method: "lastIndexOf",
      methodButtons: [],
      inputType: "text",
      inputPattern: "^(?!\n)(^\"[^\"]*\"$|^[^\"\n].*[^\"\n]$|^([^\"\n])|)$",
   },
];