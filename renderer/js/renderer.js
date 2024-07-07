const buttonStartFilling = document.getElementById("buttonStartFilling")
const inputFormUrl = document.getElementById("inputFormUrl")
const inputDiscussGroup = document.getElementById("inputDiscussGroup")
const inputRandomSuggestion = document.getElementById("inputRandomSuggestion")
const inputRandomCheck = document.getElementById("inputRandomCheck")


buttonStartFilling.addEventListener("click", () => {
	console.log("clicked start filling")
	ipcRenderer.send("button-startFilling")
})

ipcRenderer.on('crawler-closed', () => {
	console.log("crawler-closed")
})

inputFormUrl.addEventListener('change', () =>{
	ipcRenderer.send("input-formUrl", inputFormUrl.value)
})

inputDiscussGroup.addEventListener('change', () =>{
	ipcRenderer.send("input-discussGroup", inputDiscussGroup.value)
})

inputRandomSuggestion.addEventListener('change', () =>{
	ipcRenderer.send("input-randomSuggestion", inputRandomSuggestion.checked)
})

inputRandomCheck.addEventListener('change', () =>{
	ipcRenderer.send("input-randomCheck", inputRandomCheck.checked)
})