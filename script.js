// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight * 0.85;
    const revealSection = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
  
        if (sectionTop < triggerBottom) {
          section.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealSection);
    revealSection();
    const rMy=()=>{
        let left=document.getElementsByClassName('left')[0];
    let right=document.getElementsByClassName('right')[0];
    let lHeight=left.getBoundingClientRect().top;
    let rHeight=right.getBoundingClientRect().top;
    if (lHeight < triggerBottom && rHeight < triggerBottom) {
        left.classList.add('leftV');
        right.classList.add('rightV');
      }

    }

    window.addEventListener('scroll',rMy)

    



  });
  