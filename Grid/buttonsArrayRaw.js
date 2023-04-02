export const buttonsArrayRaw = [
  {
    properties: ["display"],
    propertiesValues: ["grid"],
    destiny: ["parent", "child"],
   },
  {
    properties: ["grid-template-columns"],
    propertiesValues: ["100px 200px 300px", "100px 1fr 2fr", "repeat(3,1fr)", "100px repeat(2, 1fr 2fr)", "repeat(auto-fill, 200px)", "repeat(auto-fill, minnax(200px, 1fr)"],
    destiny: ["parent", "child"],
   },
  {
    properties: ["grid-gap"],
    propertiesValues: ["20px", "30px", "10vw"],
    destiny: ["parent", "child"],
   },
  {
    properties: ["grid-template-rows"],
    propertiesValues: ["50px", "100px", "200px"],
    destiny: ["parent", "child"],
   },
  {
    properties: ["grid-auto-rows"],
    propertiesValues: ["50px 100px", "100px 200px", "50px 200px"],
    destiny: ["parent"],
   },
   {
      properties: ["align-items"],
      propertiesValues: ["stretch", "start", "end", "center"],
       destiny: ["parent"],
   },
   {
      properties: ["justify-items"],
      propertiesValues: ["stretch", "start", "end", "center"],
      destiny: ["parent"],
   },
  {
    properties: ["align-self"],
    propertiesValues: ["stretch", "start", "end", "center"],
    destiny: ["child", "child_all"],
   },
   {
    properties: ["justify-self"],
    propertiesValues: ["stretch", "start", "end", "center"],
    destiny: ["child", "child_all"],
   },
  {
   properties: ["justify-content"],
   propertiesValues: ["stretch", "start", "end", "center", "space-between", "space-around", "space-evenly"],
    destiny: ["parent"],
   },
   {
     properties: ["align-content"],
     propertiesValues: ["stretch", "start", "end", "center", "space-between", "space-around", "space-evenly"],
     destiny: ["parent"],
   },
  {
    properties: ["grid-column-start"],
    propertiesValues: ["0", "1", "2", "3", "-1", "-2", "-3", "span 2", "span 3"],
    destiny: ["child"],
   },
  {
    properties: ["grid-column-end"],
    propertiesValues: ["0", "1", "2", "3", "-1", "-2", "-3", "span 2", "span 3"],
    destiny: ["child"],
  },
  {
    properties: ["grid-row-start"],
    propertiesValues: ["0", "1", "2", "3", "-1", "-2", "-3", "span 2", "span 3"],
    destiny: ["child"],
  },
  {
    properties: ["grid-row-end"],
    propertiesValues: ["0", "1", "2", "3", "-1", "-2", "-3", "span 2", "span 3"],
    destiny: ["child"],
  },
 ];