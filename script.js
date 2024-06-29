function locomotiveANimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function navAnimation() {
  var nav = document.querySelector("nav")

  nav.addEventListener("mouseenter", function () {
      let tl = gsap.timeline()

      tl.to("#nav-bottom", {
          height: "21vh",
          duration: 0.5
      })
      tl.to(".nav-part2 h5", {
          display: "block",
          duration: 0.1

      })
      tl.to(".nav-part2 h5 span", {
          y: 0,
          // duration:0.3,
          stagger: {
              amount: 0.5
          }
      })
  })
  nav.addEventListener("mouseleave", function () {
      let tl = gsap.timeline()
      tl.to(".nav-part2 h5 span", {
          y: 25,
          stagger: {
              amount: 0.2
          }
      })
      tl.to(".nav-part2 h5", {
          display: "none",
          duration: 0.1
      })
      tl.to("#nav-bottom", {
          height: 0,
          duration: 0.2
      })
  })
}

function page2Animation(){
    let rightElem = document.querySelectorAll(".right-elem")

rightElem.forEach((elem) => {
      elem.addEventListener("mouseenter",()=>{
         gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
         })
      })
      elem.addEventListener("mouseleave",()=>{
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0,
         })
      })
      elem.addEventListener("mousemove",(dets) => {
          gsap.to( elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x -90 ,
            y:dets.y - elem.getBoundingClientRect().y -215,
          })
      })
})
}

function page3Animation(){
    let page3Center = document.querySelector(".page3-center")
let video = document.querySelector("#page3 video")

page3Center.addEventListener("click",()=> {
    video.play()
      gsap.to(video,{
        transform :"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius :0
      })
})
video.addEventListener("click",()=>{
    video.pause()
    gsap.to(video,{
        transform :"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius :"30px"
      })
} )
}

function page4Animation(){
    let sections = document.querySelectorAll(".sec-right");

sections.forEach((elem) => {
    console.log(elem.childNodes[3])
    elem.addEventListener("mouseenter",() =>{
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",() =>{
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load()
    })
})
}

function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#btm6-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part3",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#btm6-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part4",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}


function loadingAnimation(){
    let tl = gsap.timeline()

    tl.from("#page1",{
        opacity:0,
        duration:0.3,
        delay:0.2
    })
    tl.from("#page1",{
        transform:"scaleX(0.7) scaleY(0.2)",
        borderRadius:"50px",
        ease:"expo.out",
        duration:2,
    })

    tl.from("nav",{
        opacity:0
    })

    tl.from("#page1 h1, #page1 p , #page1 div",{
        opacity:0,
        duration:0.5,
        stagger:0.2,
    })
}


locomotiveANimation()

navAnimation()

page2Animation();

page3Animation()

page4Animation()

page6Animations()


loadingAnimation()
