var btn_enter = document.getElementById("btn_enter");
var user_input = document.getElementById("user_input");
var ul = document.getElementById("list_shopping");

btn_enter.addEventListener("click", addElementOnClick);

user_input.addEventListener("keypress", addElementOnEnter);

ul.addEventListener("click", elementCrossTrough);

function inputLength(){
    return user_input.value.length;
}

function addElementOnClick(){
    if(inputLength() > 0){
        addLi();
    }
}

function addElementOnEnter(event){
    if(inputLength() > 0 && event.code === "Enter"){
        addLi();
    }
}

function addLi(){
    var li = document.createElement("li");
    var button = document.createElement("button");
    var li_id = "item" + findLastLiId();

    button.appendChild(document.createTextNode("Delete"));
    button.setAttribute("class", "btn_delete");
    button.setAttribute("id", btn_id);

    li.appendChild(document.createTextNode(user_input.value));
    li.setAttribute("id", li_id);
    li.appendChild(button);
    ul.appendChild(li);
}

function findLastLiId(){
    var id_last = ul.lastElementChild.getAttribute("id"); id_last = id_last.replace("item", "");
    id_last = Number(id_last) + 1;
    return id_last;
}

function elementCrossTrough(){
    var target_id = event.target.id;
    if(target_id.search("btn")){
        document.getElementById(target_id).classList.add("done");
    }
    else if(!(target_id.search("btn"))){
        itemDelete();
    }
}

function itemDelete(){
    var target_id = event.target.id;
    var target = document.getElementById(target_id).parentElement;
    target.remove();
}