var scroller = document.querySelector("#main");

scroller.addEventListener("mousemove",function(dets){
    gsap.to('#cursor',{
        top:dets.clientY,
        left:dets.clientX,
        power:5
        })
})
scroller.addEventListener("mouseenter",function(dets){
    gsap.to('#cursor',{
        opacity:1,
        scale:1
        })
})
scroller.addEventListener("mouseleave",function(dets){
    gsap.to('#cursor',{
        opacity:0,
        scale:0
        })
})
