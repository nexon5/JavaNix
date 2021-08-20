let field = document.querySelector(".mainField");
let mainArea = document.querySelector("ul");

document.querySelector("button").onclick = function () {
    let text = field.value;
    if (text !== "") {
        let newElem = document.createElement("li");
        newElem.innerHTML = `<input type="checkbox"><span>${text}</span>`;
        mainArea.appendChild(newElem);
        field.value = "";
    } else console.log("ELSE");


}