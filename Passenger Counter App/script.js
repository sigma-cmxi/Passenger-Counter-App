let count = 0
let draft = document.getElementById("draft-el")
let contentEl =  document.getElementById("countertext")

function increment() {
    count = ++count
    contentEl.textContent = count 
}

function save(){
    let countEl = " - " + count  
    draft.textContent += countEl
    count = 0
    contentEl.textContent = count 
}


function reset() {
    count = 0
    contentEl.textContent = count 
    draft.textContent = "drafts: "
}

