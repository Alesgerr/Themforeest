let slider = [
   "photos/photo1.jpg",
   "photos/photo2.jpg",
   "photos/photo3.jpg",
]
let image = document.querySelector(".slider img")
image.src = slider[0]

let next = document.querySelector(".next");
let prev = document.querySelector(".prev")
let count = 0;
next.onclick = function(){
   count++
   if(count > slider.length - 1){
      count = 0
   }
   image.src = slider[count];
}

prev.onclick = function(){
  count--;
  if(count == -1){
   count = slider.length - 1
  }
  image.src = slider[count]
}