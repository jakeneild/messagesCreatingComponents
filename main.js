var frag = document.createDocumentFragment();

for(let i = 0; i < 5; i++){
    let myS = document.createElement("section")
    myS.className = "message";
    myS.textContent = "Your choosing"
    frag.appendChild(myS)
}


document.querySelector("#messages").appendChild(frag);