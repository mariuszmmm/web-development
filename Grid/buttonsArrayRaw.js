export const buttonsArrayRaw = [
  {
    properties: ["display"],
    propertiesValues: ["grid"],
    destiny: ["parent"],
   },
  {
    properties: ["grid-template-columns"],
    propertiesValues: ["auto", "auto auto", "1fr","1fr 2fr", "repeat(3, 1fr)", "repeat(2, 1fr 2fr)", "repeat(3, 100px)", "repeat(3, 100px 200px)", "repeat(3, 100px 1fr)", "100px", "25%", "100px 25% auto 1fr", "minmax(50px, 1fr)"],
    destiny: ["parent"],
   },
  {
    properties: ["grid-template-rows"],
    propertiesValues: ["auto", "auto auto", "1fr","1fr 2fr", "repeat(3, 1fr)", "repeat(2, 1fr 2fr)", "repeat(3, 100px)", "repeat(3, 100px 200px)", "repeat(3, 100px 1fr)", "100px", "25%", "100px 25% auto 1fr", "minmax(50px, 1fr)"],
    destiny: ["parent"],
  },  
  {
    properties: ["grid-column-gap"],
    propertiesValues: ["none", "10px", "10%", "10vw"],
    destiny: ["parent"],
   },
  {
    properties: ["grid-row-gap"],
    propertiesValues: ["none", "10px", "10%", "10vw"],
    destiny: ["parent"],
   },
  {
    properties: ["grid-auto-columns"],
    propertiesValues: ["1fr 2fr", "50px 100px", "25% 50%"],
    destiny: ["parent"],
  },
  {
    properties: ["grid-auto-rows"],
    propertiesValues: ["1fr 2fr", "50px 100px", "25% 50%"],
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
    destiny: ["child"],
   },
   {
    properties: ["justify-self"],
    propertiesValues: ["stretch", "start", "end", "center"],
    destiny: ["child"],
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
    propertiesValues: ["1", "2", "3", "-1", "-2", "-3"],
    destiny: ["child"],
   },
  {
    properties: ["grid-row-start"],
    propertiesValues: ["1", "2", "3", "-1", "-2", "-3"],
    destiny: ["child"],
  },
  {
    properties: ["grid-column-end"],
    propertiesValues: ["1", "2", "3", "-1", "-2", "-3", "span 2", "span 3"],
    destiny: ["child"],
  },
  {
    properties: ["grid-row-end"],
    propertiesValues: ["1", "2", "3", "-1", "-2", "-3", "span 2", "span 3"],
    destiny: ["child"],
  },
 ];