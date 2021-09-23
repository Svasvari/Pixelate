
const newRow = () => {
    document.getElementById("table").appendChild(document.createElement('tr'));
        for(let i = 0; i < 20; i++) {
            document.getElementById("table").lastChild.appendChild(document.createElement("td"));
            document.getElementById("table").lastChild.lastChild.setAttribute("class", "select");
        }
};

let buttonsSelector = document.querySelector("#buttons");
buttonsSelector.addEventListener('click', function (event) {
    const exactButtonClicked = event.target;
    const action = exactButtonClicked.id;
    if(action === "add") {
        newRow();
    } else if(action === "color") {

    } 
});

let cellSelector = document.querySelector("#cells");
cellSelector.addEventListener('click', function (event) {
    const exactCellClicked = event.target;
    const action = exactCellClicked.getAttribute("class");
    if(action === "select") {
        exactCellClicked.classList.add("highlight");
    }

});
