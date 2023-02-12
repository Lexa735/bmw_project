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



    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.burger-menu');
    menuBtn.addEventListener('click', clickBtn);
    function clickBtn(){
      menu.classList.toggle('hidden-menu');
    }
   

 
     
    let menuBrg = document.querySelector('.menu-btn');
    let menuel = document.querySelector('.list_electro');
    
    
    menuBrg.addEventListener('click', clickBtEl);

    function clickBtEl(){
      if ( menuel.classList.contains("hidden") == true){
        menuel.classList.add("hidden");
      }
  
        console.log (clickBtEl)
      }
      