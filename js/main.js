document.addEventListener("DOMContentLoaded",function(){
let lines = $("subtitles").children() ;
const video = document.getElementById("video1");

	// Update the progress bar as the video plays
	video.addEventListener ("timeupdate",function(){
		// highlight text as video plays
		for (let i = 0;i < lines.length; i++) {
      let current = video.getCurrentTime();
      let start =lines[i].getAttribute("data-start");
      let end= lines[i].getAttribute("data-end");
		  if (current > start && current < end){
		    lines[i].style.backgroundcolor = "#e5a01e";
		  } else {
		    lines[i].style.backgroundcolor = "";
      }
		}
  })
  });




// // var video = document.getElementsByTagName("video")
// var width = window.matchMedia("(max-width:768px)")
//
// function myFunction(width){
//   if (x.matches){
//     document.getElementsByTagName("video").setAttribute("width", "480");
//   }
// }
//
//
// myFunction(width) // Call listener function at run time
// width.addListener(myFunction) // Attach listener function on state changes
