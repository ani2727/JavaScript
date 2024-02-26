let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let randomcolor = generateColor();
    let h1 = document.querySelector("h1");
    h1.innerText = randomcolor;

    let divi = document.querySelector("div");
    divi.style.backgroundColor = randomcolor;
});

function generateColor()
{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}