const title = document.querySelector(".red")
console.log(title)
function handleClick(){
    if(title.style.color==="red"){
        title.style.color = "blue"
    }
    else{
        title.style.color = "red"
    }
}
title.addEventListener("click",handleClick);
const btn = document.querySelector("#btn")

btn.addEventListener("click",btnClick)
const element = document.querySelector("#blue")

console.log(blue)

function btnClick(){
    console.log("버튼클릭")
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden')
    }else{
        element.classList.add('hidden')
    }
}
