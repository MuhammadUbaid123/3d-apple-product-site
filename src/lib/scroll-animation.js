import gsap from "gsap";

/* Camera postion and camers target and onUpdate to update the position of camera */
export const scrollAnimation = (position, target, onUpdate) =>{
    const tl = gsap.timeline();

    /* Update the positin of camera and triggere animation function and properties that we want to change in that */
    tl.to(position, { // we are getting these values from webgi viewer to customize our animation
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger:{
            trigger:'.sound-section',
            start: "top bottom", // start when the section hits the bottom of the viewport
            end: "top top", // ENd the animation when wection hit the top of viewport
            scrub: 2, // Means there is no other position between these two positions, there 2 shows here the delay, you can also put true here rather than number
            immediateRender:false, // This means thate we are not gonnan track to render this animation untill its actually triggered
        },
        onUpdate//once the animation is done then call the onUpdate method
    })
    .to(target, { // we are getting these values from webgi viewer to customize our animation
        x: 1.52,
        y: 0.77,
        z: -1.08,
        scrollTrigger:{
            trigger:'.sound-section',
            start: "top bottom", // start when the section hits the bottom of the viewport
            end: "top top", // ENd the animation when wection hit the top of viewport
            scrub: 2, // Means there is no other position between these two positions, there 2 shows here the delay, you can also put true here rather than number
            immediateRender:false, // This means thate we are not gonnan track to render this animation untill its actually triggered
        },
        
        
    })
    .to('.jumbotron-section', { // we are getting these values from webgi viewer to customize our animation
        opacity:0,
        scrollTrigger:{
            trigger:'.sound-section',
            start: "top bottom", // start when the section hits the bottom of the viewport
            end: "top top", // ENd the animation when wection hit the top of viewport
            scrub: 2, // Means there is no other position between these two positions, there 2 shows here the delay, you can also put true here rather than number
            immediateRender:false, // This means thate we are not gonnan track to render this animation untill its actually triggered
        },
        
        
    })

    .to('.sound-section .content', { // we are getting these values from webgi viewer to customize our animation
        opacity:1,
        scrollTrigger:{
            trigger:'.sound-section',
            start: "top bottom", // start when the section hits the bottom of the viewport
            end: "top top", // ENd the animation when wection hit the top of viewport
            scrub: 2, // Means there is no other position between these two positions, there 2 shows here the delay, you can also put true here rather than number
            immediateRender:false, // This means thate we are not gonnan track to render this animation untill its actually triggered
        },
        
        
    })


    /* for last section animation */
    tl.to(position, { // we are getting these values from webgi viewer to customize our animation
        x: 1.56,
        y: 5.0,
        z: 0.01,
        scrollTrigger:{
            trigger:'.display-section',
            start: "top bottom", // start when the section hits the bottom of the viewport
            end: "top top", // ENd the animation when wection hit the top of viewport
            scrub: 2, // Means there is no other position between these two positions, there 2 shows here the delay, you can also put true here rather than number
            immediateRender:false, // This means thate we are not gonnan track to render this animation untill its actually triggered
        },
        onUpdate//once the animation is done then call the onUpdate method
    })
    .to(target, { // we are getting these values from webgi viewer to customize our animation
        x: -0.55,
        y: 0.32,
        z: 0.0,
        scrollTrigger:{
            trigger:'.display-section',
            start: "top bottom", // start when the section hits the bottom of the viewport
            end: "top top", // ENd the animation when wection hit the top of viewport
            scrub: 2, // Means there is no other position between these two positions, there 2 shows here the delay, you can also put true here rather than number
            immediateRender:false, // This means thate we are not gonnan track to render this animation untill its actually triggered
        },
        
        
    })

    .to('.display-section', { // we are getting these values from webgi viewer to customize our animation
        opacity:1,
        scrollTrigger:{
            trigger:'.display-section',
            start: "top bottom", // start when the section hits the bottom of the viewport
            end: "top top", // ENd the animation when wection hit the top of viewport
            scrub: 2, // Means there is no other position between these two positions, there 2 shows here the delay, you can also put true here rather than number
            immediateRender:false, // This means thate we are not gonnan track to render this animation untill its actually triggered
        },
        
        
    })

}