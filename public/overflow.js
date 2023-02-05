// Determines if the passed element is overflowing its bounds,
// either vertically or horizontally.
// Will temporarily modify the "overflow" style to detect this
// if necessary.

const isOverflown = (scrollWidth, clientWidth) => scrollWidth >= clientWidth 

const resizeText = (element, parent) => {
   let i = 100 // let's start with 12px
   let overflow = isOverflown(element.scrollWidth, parent.offsetWidth)
   const minSize = 200 // very huge text size

   console.log(element.scrollWidth, parent.offsetWidth, isOverflown(element.scrollWidth, parent.offsetWidth ))   
  
   while (element.scrollWidth >= parent.clientWidth  ) {
     console.log(i, element.scrollWidth, parent.clientWidth)
     element.style.fontSize = `${i - 1}px`
     i = i - 1
   }

   element.style.fontSize = `${i - 1}px`
   
   // revert to last state where no overflow happened:
   
 }