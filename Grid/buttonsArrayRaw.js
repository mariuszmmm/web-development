export const buttonsArrayRaw = [
  {
    properties: ["display"],
    propertiesValues: ["grid"],
    destiny: ["parent", "child"],
   },
  {
    properties: ["grid-template-columns"],
    propertiesValues: ["30px 60px 90px", "50px 1fr 2fr", "repeat(3,1fr)", "50px repeat(2, 1fr 2fr)", "repeat(auto-fill, 50px)", "repeat(auto-fill, minnax(90px, 1fr)"],
    destiny: ["parent", "child"],
   },
  {
    properties: ["grid-gap"],
    propertiesValues: ["20px", "30px", "10vw"],
    destiny: ["parent", "child"],
   },
  {
    properties: ["grid-template-rows"],
    propertiesValues: ["30px", "60px", "90px"],
    destiny: ["parent", "child"],
   },
  {
    properties: ["grid-auto-rows"],
    propertiesValues: ["20px 30px", "40px 80px", "30px 90px"],
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