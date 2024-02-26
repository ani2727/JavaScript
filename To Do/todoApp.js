let btn = document.querySelector("button");

btn.addEventListener("click",function()
{
    let inp = document.querySelector("input");
    if(inp.value.length > 0)
    {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        li.innerText = inp.value;
        inp.value = "";
        let delbtn = document.createElement("button");
        delbtn.innerText = "Delete";
        delbtn.classList.add("delete");
        li.appendChild(delbtn);
        ul.appendChild(li);
    }
});

// let btns = document.querySelectorAll(".delete");
// for(btn of btns)
// {
//     btn.addEventListener("click",function()
//     {
//         let par = this.parentElement;
//         par.remove();
//     });
// }
let ul = document.querySelector("ul");

ul.addEventListener("click",function(event)
{
    if(event.target.nodeName == "BUTTON")
    {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted")
    }
    
});