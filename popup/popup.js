//const { createEngine } = ChromeUtils.importESModule("chrome://global/content/ml/EngineProcess.sys.mjs");

const prompt = "Could you create a todo list including pre-filled links to relevant web-searches, as well as criteria to evaluate the results of those searches? The objective is: ";

document.getElementById("actionButton").addEventListener("click", () => {

  const objective = document.getElementById("objectiveInput").value;
  alert("Button clicked!" + objective);
  alert(browser.trial.ml);

  plan(objective);

});

async function plan(objective) {
  //await browser.trial.ml.createEngine({taskName: "text-generation"});
  //
  //const res = await browser.trial.ml.runEngine({
  //  args: [prompt + objective]
  //});
  //
  //console.log(res);
  
  // 1. Initialize the event listener
  browser.trial.ml.onProgress.addListener(progressData => {
    console.log(progressData);
  });

  // 2. Create the engine, may trigger downloads.
  await browser.trial.ml.createEngine({
    modelHub: "huggingface",
    taskName: "summarization",
  });

  // 3. Call the engine
  const res = await browser.trial.ml.runEngine({
    args: ["This is the text to summarize"],
  });

  // 4. Get the results.
  console.log(res[0]["summary_text"]);

  // 5. Delete the downloaded model files
  await browser.trial.ml.deleteCachedModels();
}
