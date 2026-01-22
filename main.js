let allElems = document.querySelectorAll(".elem")
let allfullElems = document.querySelectorAll(".fullElems")
let allfullElemsbackbtn = document.querySelectorAll(".backbtn")
allElems.forEach(function(elems){
        elems.addEventListener("click", function(){
            allfullElems[elems.id].style.display = "block"
        })       
})

allfullElemsbackbtn.forEach(function(elems){
        elems.addEventListener("click", function(){
            allfullElems[elems.id].style.display = "none"
           
        })       
})
