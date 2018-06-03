// Our 'interface' object
// Individual functions are attached to this in order to create 
// a closure that can reference the onload function's execution context
var td = {};

window.onload = function() {
    const listContainer = document.querySelector(".list");
    const input = document.getElementById("todoInput");

    const divClassList = "box has-text-centered animated";
    const removeIconClassList = "fas fa-check-circle fa-2x";

    td.todoAdd = () => {
        let newText = td._createTextNode();
        if (!newText) {
            // No-op for empty ToDo values (no empty strings)
            return;
        }
        let div = td._createDivNode(newText);

        td._attachRemoveButtonToDiv(div);
        listContainer.prepend(div);
    };

    td._createTextNode = () => {
        let inputText = input.value;
        if (inputText.length === 0) {
            return false;
        }
        console.trace();

        let newText = document.createTextNode(inputText);
        input.value = "";

        return newText;
    };

    td._createDivNode = (newText) => {
        let div = document.createElement("div");
        div.appendChild(newText);
        div.classList = divClassList + " slideInDown";

        return div;
    };

    td._attachRemoveButtonToDiv = (div) => {        
        let removeIcon = document.createElement("i");
        removeIcon.classList = removeIconClassList;
        let removeButton = document.createElement("button");
        removeButton.appendChild(removeIcon);
        
        removeButton.addEventListener('click', function() {
            div.addEventListener('animationend', () => {
                div.remove();
            });
            div.classList = divClassList + " bounceOut";
        });

        div.appendChild(removeButton);

        return div;
    };
}

