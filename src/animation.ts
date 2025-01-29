import { gsap } from "gsap";

export function slide(btns:NodeList, open:boolean, animatedElement:HTMLElement, slide:number, animatedList:string[]) {
    const slideTimline = gsap.timeline({
        paused:true,
        defaults:{
            duration:.4,
            ease:"power2.inOut"
        }
    });

    slideTimline.to(animatedElement,{
        xPercent:slide,
    });
    slideTimline.to(animatedList,{
        yPercent:-80,
        duration:.3,
        stagger:.1,
    }, "-=.3")
    
    btns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            if (open === false) {
                        slideTimline.play()
                        open = true
                    }else if (open === true) {
                        slideTimline.reverse()
                        open = false
        }
        })
    })
}


export function slideUp(element1:string, element2:string) {

    const animatedElement = gsap.timeline({
        paused: true,
        defaults: {
            duration: 0.3,
        },
    });
    
    animatedElement.to(element1, {
        yPercent: -100,
    });
    animatedElement.to(
        element2,
        {
            yPercent: -100,
        },
        "<"
    );

    return animatedElement
}



export function slideDown(animatedElement:HTMLElement, yPercent:number) {    
    const slideDownTl = gsap.timeline({paused:true, defaults:{
        defaults:{
            duration:.4,
            ease:"power4.inOut"
        }
    }})
    slideDownTl.to(animatedElement,{
        yPercent:yPercent,
    });

    return slideDownTl;
}
