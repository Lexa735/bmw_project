let btn = document.querySelector(".btn");
let content = document.querySelector(".list_electro");

btn.addEventListener("click", btnClick);

function btnClick() {
  
    content.classList.toggle("hidden");
    }


let button = document.querySelector(".button");
let V = document.querySelector(".svg_electro");

  button.addEventListener("click", rotate)

    function rotate() {
      V.classList.toggle("rotate");
    }


