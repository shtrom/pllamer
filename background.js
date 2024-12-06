chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
  console.log(browser);
  console.log(browser.trial);
});
