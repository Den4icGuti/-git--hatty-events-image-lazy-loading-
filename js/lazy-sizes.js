
const imgRef = document.querySelectorAll('img[data-src]');
// console.log(imgRef)




imgRef.forEach(image => {
  image.addEventListener('load', onloadImg);
})

function onloadImg(evt) {
evt.target.classList.add('showImg')
}

if ('loading' in HTMLImageElement.prototype) {
 
  addSrcAttrLazyImg();
} else {
   addLazy()
   }

function addLazy() { 
const scriptEl = document.createElement('script');

  scriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  scriptEl.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  scriptEl.crossOrigin = 'anonymous';
  document.body.appendChild(scriptEl)
}

function addSrcAttrLazyImg() { 
  const imgRef = document.querySelectorAll('img[loading="lazy"]');

   imgRef.forEach(img => { 
    img.src = img.dataset.src;
    console.log(img)
  })
}