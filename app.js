
const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.5 } });
tl.fromTo(".navbar", { opacity: 0, y: -100 }, { opacity: 1,y:0, duration: 1.5});
tl.fromTo(".hero-image", {scale: 1.8,opacity: 0 }, {scale: 1, opacity: 1, duration: 2.5, transformOrigin:"right center", ease: "elastic.out(1.5,1)", })
tl.fromTo(".architecture", { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, "<70%");
tl.fromTo(".studio", { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, "<70%");
tl.fromTo(".brooklyn", { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<70%");
tl.fromTo(".next", { opacity: 0, x: -100 }, { opacity: 1, x: 0, delay:0.3 }, );
tl.fromTo(".previous", { opacity: 0, x: 100 }, { opacity: 1, x: 0 },"<30%" );

const ourDna = document.querySelector('.dna-section');
const ourDnaImage = document.querySelector('.dna-section-image');

const newcolumnObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.5 } });
      tl.fromTo(".dna-section-image", {x: -100, opacity: 0}, {x: 0, opacity:1,  transformOrigin:"right center", })
      tl.fromTo(".dna-section-heading", { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "<70%");
      tl.fromTo(".dna-section-top-text", { opacity: 0, y: 100, }, { opacity: 1, y: 0 }, "<70%");
      tl.fromTo(".dna-section-bottom-text", { opacity: 0, y: 100, }, { opacity: 1, y: 0 }, "<70%");

      // gsap.fromTo(selectedProjectColumn.children, {
      //   opacity: 0,
      //   y: 120
      // }, {
      //   opacity: 1,
      //   y: 0,
      //   duration: 0.75,
      //   ease: 'power2.out',
      //   stagger: {
      //     amount: 0.4,
      //     each: 0.1
      //   }
      // });
      newcolumnObserver.unobserve(ourDna); 
    }
  });
}, {
  threshold: 0.2
});

newcolumnObserver.observe(ourDna);






const animateElement = document.querySelector('.selected-project');
const selectedProjectColumn = document.querySelector('.selected-project-column');


const columnObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      gsap.fromTo(selectedProjectColumn.children, {
        opacity: 0,
        y: 120
      }, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power2.out',
        stagger: {
          amount: 0.4,
          each: 0.1
        }
      });
      // columnObserver.unobserve(selectedProjectColumn); 
    }
  });
}, {
  threshold: 0.5
});

columnObserver.observe(selectedProjectColumn);














