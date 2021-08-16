const heading = document.getElementById("heading");
const description = document.getElementById("description")
const display = document.getElementById("ul");
const completed = document.getElementById("completed-list");

var a = 1;

function add() {

    var head = heading.value;
    var desc = description.value;
    validate(head, desc);
}

function validate(head,desc) {

    if (head ==="" || desc === "") {
        alert("pls enter all the values before continuing");
        heading.value = "";
        description.value = "";
        return;
    }
    else {
        setvalue();
    }
}

function setvalue() {

    const list = document.createElement("li");
    list.setAttribute("id", `${a}`);

    const div1 = document.createElement("div");
    div1.setAttribute("class", "display-text-block");

    const div2 = document.createElement("div");
    div2.setAttribute("class", "buttons");

    const h1 = document.createElement("h1");
    h1.setAttribute("class", "to-do-heading");

    const p = document.createElement("p");
    p.setAttribute("class", "description");

    const done = document.createElement("button");
    done.setAttribute("class", "done-btn-size");

    const del = document.createElement("button");
    del.setAttribute("class", "del-btn-size");
    
    h1.innerText = heading.value;
    p.innerText = description.value;

    done.innerHTML = '<i class="far fa-calendar-check"></i>';
    done.onclick = function markdone() {
        completed.appendChild(list);
        done.remove();
    };

    del.innerHTML = '<i class="far fa-trash-alt"></i>';
    del.onclick = function del() {
        list.remove();
        a--;
    };

    div1.append(h1, p);
    div2.append(done, del);
    list.appendChild(div1);
    list.appendChild(div2);
    display.appendChild(list);

    heading.value = "";
    description.value = "";
    a++;
    console.log(list);
}
