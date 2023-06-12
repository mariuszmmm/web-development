export const buttonsArrayRaw = [
  {
    properties: ["display"],
    propertiesValues: ["flex"],
    destiny: ["parent"],
  },
  {
    properties: ["flex-direction"],
    propertiesValues: ["row", "row-reverse", "column", "column-reverse"],
    destiny: ["parent"],
  },
  {
    properties: ["justify-content"],
    propertiesValues: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
    destiny: ["parent"],
  },
  {
    properties: ["align-content"],
    propertiesValues: ["stretch", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
    destiny: ["parent"],
  },
  {
    properties: ["align-items"],
    propertiesValues: ["stretch", "flex-start", "flex-end", "center", "baseline"],
    destiny: ["parent"],
  },
  {
    properties: ["flex-wrap"],
    propertiesValues: ["nowrap", "wrap", "wrap-reverse"],
    destiny: ["parent"],
  },
  {
    properties: ["gap"],
    propertiesValues: ["0", "10px", "50px", "10%", "10vw"],
    destiny: ["parent"],
  },
  {
    properties: ["align-self"],
    propertiesValues: ["stretch", "flex-start", "flex-end", "center"],
    destiny: ["child"],
  },
  {
    properties: ["order"],
    propertiesValues: ["0", "1", "2", "3", "-1"],
    destiny: ["child", "child_all"],
  },
  {
    properties: ["flex-grow"],
    propertiesValues: ["0", "1", "2", "3", "4"],
    destiny: ["child", "child_all"],
  },
  {
    properties: ["flex-shrink"],
    propertiesValues: ["1", "2", "3", "4", "0"],
    destiny: ["child", "child_all"],
  },
  {
    properties: ["flex-basis"],
    propertiesValues: ["auto", "100px", "200px", "12vw", "18vw", "50%", "0"],
    destiny: ["child", "child_all"],
  },
];