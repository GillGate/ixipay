function parallax(e,t){const n=document.querySelector(t);let a=window.innerWidth/2,o=window.innerHeight/2,l=`${.016*(e.clientX-a)}%, ${.016*(e.clientY-o)}%`;n.style.transform=`translate(${l})`}window.addEventListener("DOMContentLoaded",(function(){const e=document.documentElement.clientWidth,t=document.querySelector(".approach__list--buyer"),n=document.querySelector(".approach__list--seller");null!==t&&(window.addEventListener("scroll",(function(){window.pageYOffset>350&&(t.classList.add("fadeInLeft"),n.classList.add("fadeInRight"))})),e>768&&window.addEventListener("mousemove",(function(e){parallax(e,".intro__beforeElement"),parallax(e,".intro__afterElement"),parallax(e,".robot__parallax"),parallax(e,".robot__img")})))}));
//# sourceMappingURL=all.js.map