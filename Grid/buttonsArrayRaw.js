export const buttonsArrayRaw = [
  {
    properties: ["display"],
    propertiesValues: ["grid"],
    destiny: ["parent", "child_all"],
   },
  {
    properties: ["grid-template-columns"],
    propertiesValues: ["50px 160px 70px", "1fr 2fr 1fr .5fr", "50% 25% 25%", "50px auto 100px", "1fr 1fr", "repeat(3, 50px)", "repeat(3, 1fr)", "1fr", "1fr 2fr", "1fr 3fr", "1fr auto", "200px 1fr 200px", "minmax(50px, 1fr)", "auto 1fr auto", "100px 200px 300px", "100px 1fr 2fr"],
    destiny: ["parent"],
   },
  {
    properties: ["grid-column-gap"],
    propertiesValues: ["none", "20px", "30px", "10vw"],
    destiny: ["parent", "child", "child_all"],
   },
  {
    properties: ["grid-row-gap"],
    propertiesValues: ["none", "20px", "30px", "10vw"],
    destiny: ["parent", "child", "child_all"],
   },
  {
    properties: ["grid-template-rows"],
    propertiesValues: ["2fr 100px 1fr", "60px", "90px", "1fr", "2fr"],
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
       destiny: ["parent", "child_all"],
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
    destiny: ["parent", "child_all"],
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