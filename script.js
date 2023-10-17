let scrapeEmails = document.getElementById("scrapeEmails");

chrome.runtime.onMessage.addEventListener((request,sender,sendResponse)=>{

  let emails=request.emails;
  alert(emails)
})
scrapeEmails.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target:{tabId: tab.id },
    func: scrapEmailsFromPage,
  });
});
function scrapEmailsFromPage() {
  const emailRegX= /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/gim;

 let emails=document.body.innerHTML.match(emailRegX);

chrome.runtime.sendMessage({emails});





//  alert(emails)
//  document.getElementById("scrapeEmails").addEventListener("click",function(){
//   window.location.href = "home.html";
  
//  });
}
