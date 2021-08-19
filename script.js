let field = document.querySelector(".mainField");
let mainArea = document.querySelector("ul");

document.querySelector("button").onclick = function () {
    let text = field.value;
    if (text !== "") {
        /*mainArea.innerHTML += `<li><input type="checkbox"><span>${text}</span></li>`;
        console.log(mainArea.innerHTML);*/
        let newElem = document.createElement("li");
        newElem.innerHTML = `<input type="checkbox"><span>${text}</span>`;
        mainArea.appendChild(newElem);
        field.value = "";
    } else console.log("ELSE");


}