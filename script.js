
function effect(){
    document.querySelectorAll(".slide").forEach(function(dets){
        dets.addEventListener("mousemove", function(elem){
          var dim =  dets.getBoundingClientRect();
this.children[1].style.clipPath=`circle(20% at ${elem.clientX-dim.left}px ${elem.clientY-dim.top}px)`
        })
    })
    document.querySelectorAll(".slide").forEach(function(dets){
        dets.addEventListener("mouseleave", function(elem){
          var dim =  dets.getBoundingClientRect();
this.children[1].style.clipPath=`circle(0% at ${elem.clientX-dim.left}px ${elem.clientY-dim.top}px)`
        })
    })
}

effect();
function slidesSkewMaker(){
    
    var dim = document.querySelector(".slide")
    .getBoundingClientRect();

    var prev = dim.left;

    document.querySelector("#load")
    .addEventListener("scroll", function(){
        var dim2 = document.querySelector(".slide")
        .getBoundingClientRect();
        var diff = prev - dim2.left;
        document.querySelectorAll(".slide")
        .forEach(function(elem){
            elem.style.transform = `skewX(${diff*.08}deg)`; 
        });
        prev = dim2.left;
    })
}


slidesSkewMaker();

document.querySelector("#mon")
mon.addEventListener("click",function(){
    
    menu.style.transform="translate(-50%,0%)"
   on.style.display="inline-block"

    
})
document.querySelector("#on")
on.addEventListener("click",function(){
    menu.style.transform="translate(-50%,-100%)"
})