
const skillsection = document.querySelector(".skills-section");
const bar = document.querySelector(".bar");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");
const bar4 = document.querySelector(".bar-4");
const bar5 = document.querySelector(".bar-5");
const bar6 = document.querySelector(".bar-6");
const bar7 = document.querySelector(".bar-7");

const inside = document.querySelector(".inside");
const inside2 = document.querySelector(".inside2");
const inside3 = document.querySelector(".inside3");
const inside4 = document.querySelector(".inside4");
const inside5 = document.querySelector(".inside5");
const inside6 = document.querySelector(".inside6");
const inside7 = document.querySelector(".inside7");

const progressbar1 = document.querySelector(".progress-bar1");
const progressbar2 = document.querySelector(".progress-bar2");
const progressbar3 = document.querySelector(".progress-bar3");
const progressbar4 = document.querySelector(".progress-bar4");

const circlePath1 = document.querySelector(".circle-path1");
const circlePath2 = document.querySelector(".circle-path2");
const circlePath3 = document.querySelector(".circle-path3");
const circlePath4 = document.querySelector(".circle-path4");

const percentage1 = document.querySelector(".percentage-1");
const percentage2 = document.querySelector(".percentage-2");
const percentage3 = document.querySelector(".percentage-3");
const percentage4 = document.querySelector(".percentage-4");
const text1 = document.querySelector(".text-1");
const text2 = document.querySelector(".text-2");
const text3 = document.querySelector(".text-3");
const text4 = document.querySelector(".text-4");


const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach(ent => {
        console.log(ent);
        if(ent.isIntersecting){
            bar.classList.add('animate-bar');
            inside.classList.add('inside-bar');
            progressbar1.classList.add("circle-bar");
            circlePath1.classList.add("path-1");
            percentage1.classList.add("show-text");
            text1.classList.add("show-text");
        }
        else{
            bar.classList.remove('animate-bar');
            inside.classList.remove('inside-bar');
            progressbar1.classList.remove("circle-bar");
            circlePath1.classList.remove("path-1");
            percentage1.classList.remove("show-text");
            text1.classList.remove("show-text");
        }
    });
},
{
    root: null,
    threshold: 0
});
const observer2 = new IntersectionObserver(
    (entries) => {
    entries.forEach(ent => {
        console.log(ent);
        if(ent.isIntersecting){
            bar2.classList.add('animate-bar');
            inside2.classList.add('inside-bar');
            progressbar2.classList.add("circle-bar");
            circlePath2.classList.add("path-2");
            percentage2.classList.add("show-text");
            text2.classList.add("show-text");
        }
        else{
            bar2.classList.remove('animate-bar');
            inside2.classList.remove('inside-bar');
            progressbar2.classList.remove("circle-bar");
            circlePath2.classList.remove("path-2");
            percentage2.classList.remove("show-text");
            text2.classList.remove("show-text");
        }
    });
},
{
    root: null,
    threshold: 0
});
const observer3 = new IntersectionObserver(
    (entries) => {
    entries.forEach(ent => {
        console.log(ent);
        if(ent.isIntersecting){
            bar3.classList.add('animate-bar');
            inside3.classList.add('inside-bar');
            progressbar3.classList.add("circle-bar");
            circlePath3.classList.add("path-3");
            percentage3.classList.add("show-text");
            text3.classList.add("show-text");
        }
        else{
            bar3.classList.remove('animate-bar');
            inside3.classList.remove('inside-bar');
            progressbar3.classList.remove("circle-bar");
            circlePath3.classList.remove("path-3");
            percentage3.classList.remove("show-text");
            text3.classList.remove("show-text");
        }
    });
},
{
    root: null,
    threshold: 0
});
const observer4 = new IntersectionObserver(
    (entries) => {
    entries.forEach(ent => {
        console.log(ent);
        if(ent.isIntersecting){
            bar4.classList.add('animate-bar');
            inside4.classList.add('inside-bar');
            progressbar4.classList.add("circle-bar");
            circlePath4.classList.add("path-4");
            percentage4.classList.add("show-text");
            text4.classList.add("show-text");
        }
        else{
            bar4.classList.remove('animate-bar');
            inside4.classList.remove('inside-bar');
            progressbar4.classList.remove("circle-bar");
            circlePath4.classList.remove("path-4");
            percentage4.classList.remove("show-text");
            text4.classList.remove("show-text");
        }
    });
},
{
    root: null,
    threshold: 0
});
const observer5 = new IntersectionObserver(
    (entries) => {
    entries.forEach(ent => {
        console.log(ent);
        if(ent.isIntersecting){
            bar5.classList.add('animate-bar');
            inside5.classList.add('inside-bar');
        }
        else{
            bar5.classList.remove('animate-bar');
            inside5.classList.remove('inside-bar');
        }
    });
},
{
    root: null,
    threshold: 0
});
const observer6 = new IntersectionObserver(
    (entries) => {
    entries.forEach(ent => {
        console.log(ent);
        if(ent.isIntersecting){
            bar6.classList.add('animate-bar');
            inside6.classList.add('inside-bar');
        }
        else{
            bar6.classList.remove('animate-bar');
            inside6.classList.remove('inside-bar');
        }
    });
},
{
    root: null,
    threshold: 0
});
const observer7 = new IntersectionObserver(
    (entries) => {
    entries.forEach(ent => {
        console.log(ent);
        if(ent.isIntersecting){
            bar7.classList.add('animate-bar');
            inside7.classList.add('inside-bar');
        }
        else{
            bar7.classList.remove('animate-bar');
            inside7.classList.remove('inside-bar');
        }
    });
},
{
    root: null,
    threshold: 0
});

observer.observe(skillsection);
observer2.observe(skillsection);
observer3.observe(skillsection);
observer4.observe(skillsection);
observer5.observe(skillsection);
observer6.observe(skillsection);
observer7.observe(skillsection);


const footerText = document.querySelector(".footer-text");
const footerImage = document.querySelector(".footer-image");
const footer = document.querySelector(".footer");

const footerObserver = new IntersectionObserver((entries)=>{
    entries.forEach(ent =>{
        console.log(ent);
        if(ent.isIntersecting){
            footerText.classList.add("appear-left");
            footerImage.classList.add("appear-right");
        }
        else{
            footerText.classList.remove("appear-left");
            footerImage.classList.remove("appear-right");
        }
    })
}); 

footerObserver.observe(footer);

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const doSection = document.querySelector(".do-section");

const doObserver = new IntersectionObserver((entries)=>{
    entries.forEach(ent =>{
        if(ent.isIntersecting){
            item1.classList.add("swipe-left");
            item3.classList.add("swipe-right");
            item3.classList.add("from-bottom");
            item2.classList.add("from-top");
        }
        else{
            item1.classList.remove("swipe-left");
            item3.classList.remove("swipe-right");
            item3.classList.remove("from-bottom");
            item2.classList.remove("from-top");
        }
    })
});

doObserver.observe(doSection);

const aboutMe = document.querySelector(".about-me");
const aboutHeading = document.querySelector(".about-heading");

const aboutSection = document.querySelector(".about-section");

const aboutObserver = new IntersectionObserver((entries) =>{
    entries.forEach(ent =>{
        if(ent.isIntersecting){
            aboutHeading.classList.add("about-heading");
            aboutMe.classList.add("text-right");
        }
        else{
            aboutHeading.classList.remove("about-heading");
            aboutMe.classList.remove("text-right");
        }
    })
});

aboutObserver.observe(aboutSection);


const image1 = document.querySelector(".image-1");
const image2 = document.querySelector(".image-2");
const heading2 = document.querySelector(".heading-2");
const heading1 = document.querySelector(".heading-1");
const para1 = document.querySelector(".para-1");
const para2 = document.querySelector(".para-2");

const projectSection = document.querySelector(".project-section");

const projectObserver = new IntersectionObserver((entries)=>{
    entries.forEach(ent =>{
        if(ent.isIntersecting){
            image1.classList.add("project-image1");
            image2.classList.add("project-image2");
            heading1.classList.add("project-heading1");
            heading2.classList.add("project-heading2");
            para1.classList.add("project-para1");
            para2.classList.add("project-para2");
        }
        else{
            image1.classList.remove("project-image1");
            image2.classList.remove("project-image2");
            heading1.classList.remove("project-heading1");
            heading2.classList.remove("project-heading2");
            para1.classList.remove("project-para1");
            para2.classList.remove("project-para2");
        }
    })
});

projectObserver.observe(projectSection);

