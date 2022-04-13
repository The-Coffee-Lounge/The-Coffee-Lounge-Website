const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// vw = vw - 10;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
console.log(vw);
console.log(vh);
var image_gallery = document.getElementById("image-gallery");
image_gallery.style.width = vw+"px";
image_gallery.style.height = vh+"px";