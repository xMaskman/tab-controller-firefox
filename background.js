 

browser.commands.onCommand.addListener(async (command) => {

  console.log("The command is running")

  if (command === "Tab sorter"){

    const tabcollector = {}

    const tabs = await browser.tabs.query({});
    tabs.forEach(Tab =>{
      console.log(Tab.title)
      let tabid = Tab.id
      let taburl = Tab.url


      //check if the object is already in dictionary
      // if the dict has the object then it appends to the array
      if(tabcollector.hasOwnProperty(taburl)){

        tabcollector[taburl].tabid1.push(tabid)

      //If the object isn't in the dict it creates an array.
      }else{
      
      tabcollector[taburl] = {
        tabid1: [tabid]
      }} 


  
      
      
    })

    // Collects all of the parent dict and sorts it inside an array
    let domainlist32 = Object.keys(tabcollector).sort()


    // Checks the length all of the array
    domainlength = domainlist32.length;

    

    let alltabid = []

    // iterate through url array
    for(let i = 0;i<domainlength;i++){
      let temp = domainlist32[i];
    
      let tempsize = tabcollector[temp].tabid1
      let tempsizelength = tempsize.length
      
      for(let i = 0;i<tempsizelength;i++){
        console.log("Does this work?")
        let temp2 = tempsize[i]
        alltabid.push(temp2)
        

      }

    alltabidlength = alltabid.length;
    for(let i = 0;i<alltabidlength;i++){

      await browser.tabs.move(alltabid[i],{index: i});



    }


    }

    
    
  }

});

browser.commands.onCommand.addListener(async (command) => {


  let audibletabs = []

  console.log("The command is running")

  if (command === ""){

    const tabaudiocollector = {}

    const tabs = await browser.tabs.query({});
    playingTabs = tabs.filter(tab => tab.audible);


    playingTabs.forEach(tab =>{

    audibletabs.push(tab.id)



    })
      
  
   
  
  
  }
  
  
  
  })

   let auditab = await browser.tabs.query({});
   let audiabletab = await auditab.filter(tab => tab.audible);

   
