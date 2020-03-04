$(document).ready(function(){
  $("#meme").memeGenerator();
});

$(".draggable").draggable();

function completeImg() {
  let canvas = $("#meme").memeGenerator("saveCanvas");
  console.log(canvas);
  document.querySelector(".completedBox").appendChild(canvas);
}

const box = document.querySelector(".completedBox");

// function completeImg() {
//   let canvas = $("#meme").memeGenerator("save");
//   console.log(canvas);
//   const height = document.querySelector(".mainImg").offsetHeight;
//   console.log(height);
//   box.style.backgroundImage=`url(${canvas})`;
//   box.style.height = `${height}px`;
//   box.classList.add("completedImg");
//   document.querySelector(".shareBox").style.visibility="visible";
// }

// $(function(){
//   var r = $('.mg-wrapper .mg-controls .mg-textbox input[type="range"]');
//   r.on('mouseenter',function(){
//     var p = r.val();
//     r.on('click',function(){
//       p = r.val();
//       bg(p);
//     });
//     r.on('mousemove',function(){
//       console.log("aaa");
//       p = r.val();
//       bg(p);
//     });
//   });
//   function bg(n){
//       r.css({
//         'background-image':'-webkit-linear-gradient(left ,#f22 0%,#f22 '+n+'%,#fff '+n+'%, #fff 100%)'
//       });
//   }
// });


// function deleteTxt() {
//   $("#meme").memeGenerator("destroy");
// }

// $('.mg-textbox .deleteBtn').click(function(){alert('hi')});

// $(".deleteBtn").click(function() {
//   alert("hi");
//   // console.log("aaaa");
//   // this.destroy();
// });

// const image = document.querySelector(".mg-canvas");

// function takeScreenshot() {
//   html2canvas(image).then(canvas => {
//     document.body.appendChild(canvas);
//   });
// }