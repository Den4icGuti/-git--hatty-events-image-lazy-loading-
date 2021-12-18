
const loadImgRef = document.querySelectorAll('img[loading = "lazy"]');

console.log(loadImgRef);

loadImgRef.forEach(img => {
  img.addEventListener('load', onLoadImg, {once: true})
});

function onLoadImg(evt) { 
  console.log(evt.target)
  evt.target.classList.add('showImg')
  console.log('load img')
}