//const { createEngine } = ChromeUtils.importESModule("chrome://global/content/ml/EngineProcess.sys.mjs");

const prompt = "Could you create a todo list including pre-filled links to relevant web-searches, as well as criteria to evaluate the results of those searches? The objective is: ";

document.getElementById("actionButton").addEventListener("click", () => {

  const objective = document.getElementById("objectiveInput").value;
  alert("Button clicked!" + objective);
  alert(browser.trial.ml);

  plan(objective);

});

async function plan(objective) {
  await browser.trial.ml.createEngine({taskName: "text-generation"});
  const res = await browser.trial.ml.runEngine({
    args: [prompt + objective]
  });
  
  console.log(res);
}
