const checker = new Set();

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("testbutton");

  btn.addEventListener("click", async () => {
  try {
      const tabs = await browser.tabs.query({});
      console.log("Tabs found:", tabs.length);
      tabs.forEach(tab => {
        console.log(`Title: ${tab.title || "(no title)"} | URL: ${tab.url || "(no url)"}`);
      });
    } catch (err) {
      console.error("Error getting tabs:", err);
    }
  
  });
});

setInterval(async () => {
  try {
    const tabs = await browser.tabs.query({});
    //console.log("All Tabs found:", tabs.length);
    tabs.forEach(tab => {
      //console.log(`Title: ${tab.title || "(no title)"} | URL: ${tab.url || "(no url)"}`);
      checker.add(tab.title)
    });
  } catch (err) {
    console.error("Error getting all tabs:", err);
  }
}, 5000);


setInterval(async () => {
  try {
    const tabs = await browser.tabs.query({});
    const soundTabs = tabs.filter(tab => tab.audible);

    if (soundTabs.length === 0) {
      //console.log("No tabs are currently making sound.");
    } else {
      soundTabs.forEach(tab => {
        //console.log(`Audible Tab - Title: ${tab.title || "(no title)"} | URL: ${tab.url || "(no url)"}`);
      });
    }
  } catch (err) {
    console.error("Error getting audible tabs:", err);
  }
}, 5000);


// My new version starts

browser.commands.Oncommand.addEventListener(async (commands) => {

  console.log("The command is running")

  if (commands === "Tab sorter"){

    const tabs = await browser.tabs.query({});
    tabs.forEach(Tab =>{
      console.log(Tab.title)
    })

  }

});


