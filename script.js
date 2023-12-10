function codepen() {


    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);


    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


    ScrollTrigger.refresh();
}

codepen();

// function containerAnimation() {
//     var con = document.querySelector(".page2 .containerp2")
//     var mouse = document.createElement("div")
//     mouse.classList.add("mouse")
//     con.addEventListener("mousemove", (dets) => {
//         mouse.style.top = dets.y + "px"
//         mouse.style.left = dets.x + "px"
//         mouse.style.opacity = "100%"
//         mouse.style.transform = "scale(1)"
//     })
// }
// window.addEventListener("load", () => {
//     containerAnimation();
// })

var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});








gsap.to(".box img", {
    y: -300,
    scrollTrigger: {
        trigger: ".box",
        scroller: "#main",
        scrub: 2,
        // markers:true,
        start: "top 25%",
        end: "top -30%"
    }
});

gsap.from(".boxes", {
    x: -2000,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".boxes",
        scrub: 2,
        end: "top 35%"
    }
})

gsap.to(".nav h2", {
    x: -1500,
    scrollTrigger: {
        trigger: ".nav .h2",
        scroller: "#main",
        start: "top -5%",
        scrub: 1,
        end: "top -10%"

    }
})



var page3 = document.querySelector(".page3")
var c = page3.getBoundingClientRect();
console.log(c)





function containerAnimations() {
    var profile = document.querySelector(".profile");
    var education = document.querySelector(".education");
    var skills = document.querySelector(".skills");
    var projects = document.querySelector(".projects");

    var btn1 = document.querySelector(".btn1");
    var btn2 = document.querySelector(".btn2");
    var btn3 = document.querySelector(".btn3");
    var btn4 = document.querySelector(".btn4");



    var back1 = document.querySelector(".back1");
    var back2 = document.querySelector(".back2");
    var back3 = document.querySelector(".back3");
    var back4 = document.querySelector(".back4");



    var nav = document.querySelector(".nav");
    var page1 = document.querySelector(".page1");
    var page3 = document.querySelector(".page3")


    btn1.addEventListener("click", () => {
        profile.style.display = "block"
    })
    btn2.addEventListener("click", () => {
        education.style.display = "block"
    })
    btn3.addEventListener("click", () => {
        skills.style.display = "block"
    })
    btn4.addEventListener("click", () => {
        projects.style.display = "block"
    })



    back1.addEventListener("click", () => {
        profile.style.display = "none"
        page1.style.display = "block"
    })

    back2.addEventListener("click", () => {
        education.style.display = "none"
    })

    back3.addEventListener("click", () => {
        skills.style.display = "none"
    })

    back4.addEventListener("click", () => {
        projects.style.display = "none"
    })

}


window.addEventListener("load", () => {
    containerAnimations();
})


// page 3 animations


function p3img1() {
    gsap.to("#p3img1", {
        y: -270,
        scrollTrigger: {
            trigger: "#p3img1",
            scroller: "#main",
            scrub: 2,
            // start:"top 60%"
        }

    })
}

p3img1();


function p3circle() {
    gsap.to(".p3circle", {
        y: -570,
        scrollTrigger: {
            trigger: ".p3circle",
            scroller: "#main",
            scrub: 3,
            // start:"top 60%"
        }

    })
}

p3circle();


function p3container() {
    gsap.to(".p3container", {
        y: 70,
        x: 0,
        scrollTrigger: {
            trigger: ".p3container",
            scroller: "#main",
            scrub: 2,
            start: "top 80%"
        }

    })
}

p3container();


// page 4


function p4img1() {
    gsap.to("#p4img1", {
        y: -270,
        scrollTrigger: {
            trigger: "#p4img1",
            scroller: "#main",
            scrub: 2,
            // markers:true,
            start: "top 90%"
        }

    })
}

p4img1();


function p4circle() {
    gsap.to(".p4circle", {
        y: -670,
        scrollTrigger: {
            trigger: ".p4circle",
            scroller: "#main",
            scrub: 4,
            // start:"top 60%"
        }

    })
}

p4circle();


function p4container() {
    gsap.to(".p4container", {
        y: 70,
        scrollTrigger: {
            trigger: ".p4container",
            scroller: "#main",
            scrub: 2,
            start: "top 80%"
        }

    })
}

p4container();



Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.7,
});

Shery.imageMasker("#p3img1" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Rahul",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.imageMasker("#p4img1" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "School",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

// Shery.makeMagnet(".img1" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
// });
Shery.hoverWithMediaCircle(".boxes", {
    images: ["https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-File.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVdPlO8PEcKnWKhSKhFdPeuItDYgQ9xKIsQ&usqp=CAU","https://www.pngitem.com/pimgs/m/300-3005606_skills-clipart-png-transparent-png.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGDoc77aGK0C-pOz1nSCufIKvPES0hMtSOA&usqp=CAU"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
});

function multicolor() {
    var elem = document.querySelector(".box2 h1 span");
    var body = document.querySelector("body");

    var aestheticColors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"]; // Aesthetic colors

    var colorIndex = 0;

    body.addEventListener("mousemove", () => {
        gsap.to(elem, {
            backgroundColor: aestheticColors[colorIndex],
            duration: 0.5,
            ease: "power1.inOut"
        });

        colorIndex = (colorIndex + 1) % aestheticColors.length; // Cycle through colors
    });
}

window.addEventListener('load', () => {
    multicolor();
});

