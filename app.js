document.getElementById("camdown").style.display="none";
async function getWebCam(){
    try{
        const videoSrc=await navigator.mediaDevices.getUserMedia({video:true});
        var video=document.getElementById("cam_live");
        video.srcObject=videoSrc;
    }catch(e){
        console.log(e);
    }
}
getWebCam();
var capture=document.getElementById("cam_capture");
var canvas=document.getElementById("camdown_canvas");
var context=canvas.getContext('2d');
var video=document.getElementById("cam_live");
capture.addEventListener("click",function(){
  document.getElementById('cam').style.display="none";
  document.getElementById("camdown").style.display="block";
    context.drawImage(video,0,0,900,1200);
});
function download(){
	// Convert canvas to image
	var dataURL = canvas.toDataURL("image/jpeg", 1.0);
	downloadImage(dataURL, 'my-canvas.jpeg');
  // Save | Download image
  function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
  }
}
