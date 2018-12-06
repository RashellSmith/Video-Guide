document.addEventListener("DOMContentLoaded",function(){
let lines = document.querySelectorAll('#subtitles span');
const video = document.getElementById("video1");

	// Update the progress bar as the video plays
	video.addEventListener ("timeupdate",function(){
		// highlight text as video plays

		for (let i = 0;i < lines.length; i++) {
      let current = video.getCurrentTime();
      let start =lines[i].getAttribute("data-start");
      let end= lines[i].getAttribute("data-end");
			console.log(current +""+ start + ""+ end);
		  if (current > start & current < end){
		    lines[i].style.color = "#e5a01e";
		  } else {
		    lines[i].style.color = "";
      }
		}
		// video playes at slected senteance
		for (let i = 0; i < lines.length; i += 1){
				 lines[i].addEventListener('click', (click) => {
					 let timeClick = click.target.getAttribute("data-start");
					 video.setCurrentTime(timeClick);
				 });
				 }
  })
  });
