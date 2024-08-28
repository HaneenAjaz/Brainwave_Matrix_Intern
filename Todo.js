let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value.trim() === ""){
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <span class="task-text">${inputs.value}</span>
            <span class="separator"></span>
            <button class="delete-btn">Delete</button>
        `;
        text.appendChild(newEle);
        inputs.value = "";

        newEle.querySelector(".delete-btn").addEventListener("click", function() {
            newEle.remove();
        });
    }
}
